import Post from '../../../../lib/models/post.model';
import { connect } from '../../../../lib/mongodb/mongoose';
import { auth } from '@clerk/nextjs/server';

export const DELETE = async (req) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new Response(
        JSON.stringify({
          message: 'Unauthorized',
        }),
        { status: 401 }
      );
    }

    await connect();

    const data = await req.json();

    await Post.findByIdAndDelete(data.postId);

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