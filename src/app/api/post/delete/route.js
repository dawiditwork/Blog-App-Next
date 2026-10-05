import Post from '../../../../lib/models/post.model';
import { connect } from '../../../../lib/mongodb/mongoose';
import { currentUser } from '@clerk/nextjs/server';

export const DELETE = async (req) => {
  try {
    const user = await currentUser();

    if (!user || user.publicMetadata.isAdmin !== true) {
      return new Response(
        JSON.stringify({
          message: 'Unauthorized',
        }),
        { status: 401 }
      );
    }

    await connect();

    const data = await req.json();

    const deletedPost = await Post.findByIdAndDelete(data.postId);

    if (!deletedPost) {
      return new Response(
        JSON.stringify({
          message: 'Post not found',
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        message: 'Post deleted successfully',
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log('DELETE ERROR:', error);

    return new Response(
      JSON.stringify({
        message: 'Error deleting post',
      }),
      { status: 500 }
    );
  }
};