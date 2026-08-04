import Post from '../../../../lib/models/post.model.js';
import { connect } from '../../../../lib/mongodb/mongoose.js';
import {
  applyPostContentOverrides,
  filterProjectPosts,
} from '../../../posts/projectPosts.js';

export const POST = async (req) => {
  try {
    await connect();

    const data = await req.json();

    const startIndex = parseInt(data.startIndex) || 0;
    const limit = parseInt(data.limit) || 9;
    const sortDirection = data.order === 'asc' ? 1 : -1;

    const query = {
      ...(data.userId && { userId: data.userId }),

      ...(data.category &&
        data.category !== 'null' &&
        data.category !== 'undefined' &&
        data.category !== 'uncategorized' && {
          category: data.category,
        }),

      ...(data.slug && { slug: data.slug }),

      ...(data.postId && { _id: data.postId }),

      ...(data.searchTerm && {
        $or: [
          { title: { $regex: data.searchTerm, $options: 'i' } },
          { content: { $regex: data.searchTerm, $options: 'i' } },
        ],
      }),
    };

    const databasePosts = await Post.find(query).lean();
    const includedProjectPosts = filterProjectPosts(data);
    const allPosts = [...databasePosts, ...includedProjectPosts].sort(
      (a, b) =>
        (new Date(a.updatedAt) - new Date(b.updatedAt)) * sortDirection
    );
    const posts = allPosts
      .slice(startIndex, startIndex + limit)
      .map(applyPostContentOverrides);

    const totalPosts = allPosts.length;

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthPosts = await Post.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    return new Response(
      JSON.stringify({
        posts,
        totalPosts,
        lastMonthPosts,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log('Error getting posts:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error getting posts',
      }),
      {
        status: 500,
      }
    );
  }
};
