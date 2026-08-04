import RecentPosts from '../../components/RecentPosts';
import Link from 'next/link';
import { headers } from 'next/headers';

export default async function PostPage({ params }) {
  const { slug } = await params;

  let post = null;

  try {
    const requestHeaders = await headers();
    const host = requestHeaders.get('host');
    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    const result = await fetch(`${baseUrl}/api/post/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
      cache: 'no-store',
    });

    const data = await result.json();
    post = data.posts[0];
  } catch (error) {
    console.log('Error fetching post:', error);
    post = null;
  }

  if (!post) {
    return (
      <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h2 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
          Post not found
        </h2>
      </main>
    );
  }

  const plainText = post.content.replace(/<[^>]*>/g, ' ').trim();
  const readingTime = Math.max(
    1,
    Math.ceil(plainText.split(/\s+/).filter(Boolean).length / 200)
  );
  const articleContent = post.content
    .replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, '')
    .replace(/\s(?:style|width|height)=("|')[\s\S]*?\1/gi, '');

  return (
    <main className='min-h-screen'>
      <article>
        <header className='mx-auto max-w-4xl px-4 pb-10 pt-16 text-center sm:pt-24'>
          <Link
            href={`/search?category=${post.category}`}
            className='inline-flex rounded-full bg-teal-500/10 px-4 py-2 text-sm font-semibold capitalize text-teal-500 transition hover:bg-teal-500/20'
          >
            {post.category}
          </Link>

          <h1 className='mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
            {post.title}
          </h1>

          <div className='mt-6 flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400'>
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span aria-hidden='true'>•</span>
            <span>{readingTime} min read</span>
          </div>
        </header>

        <div className='mx-auto max-w-6xl px-4'>
          <img
            src={post.image}
            alt={post.title}
            className='aspect-[16/8] w-full rounded-3xl border border-gray-200 object-cover shadow-2xl dark:border-gray-800'
          />
        </div>

        <div className='mx-auto max-w-3xl px-5 py-14 sm:py-20'>
          <div
            className='post-content'
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />
        </div>
      </article>

      <section className='border-t border-gray-200 bg-gray-50 px-4 py-14 dark:border-gray-800 dark:bg-gray-950'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-8 text-2xl font-bold'>More from the blog</h2>
          <RecentPosts limit={3} />
        </div>
      </section>
    </main>
  );
}
