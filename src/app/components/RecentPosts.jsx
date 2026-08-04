import PostCard from './PostCard';
import Post from '../../lib/models/post.model';
import { connect } from '../../lib/mongodb/mongoose';
import { projectPosts } from '../posts/projectPosts';

export default async function RecentPosts({ limit = 9 }) {
  let posts = [];

  try {
    await connect();
    const databasePosts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    posts = [...projectPosts, ...databasePosts]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit);
  } catch (error) {
    console.log('Error getting recent posts:', error);
    posts = projectPosts.slice(0, limit);
  }

  return (
    <div className='mb-5'>
      {posts.length > 0 ? (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <PostCard key={post._id.toString()} post={post} />
          ))}
        </div>
      ) : (
        <div className='rounded-2xl border border-dashed border-gray-300 px-6 py-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400'>
          No articles have been published yet.
        </div>
      )}
      </div>
  );
}
