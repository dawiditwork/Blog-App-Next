import Link from 'next/link';

export default function PostCard({ post, compact = false }) {
  if (compact) {
    return (
      <article className='group grid w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:border-teal-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:grid-cols-[240px_1fr]'>
        <Link href={`/post/${post.slug}`} className='h-48 overflow-hidden bg-gray-100 sm:h-full dark:bg-gray-800'>
          <img
            src={post.image}
            alt={post.title}
            className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
          />
        </Link>
        <div className='flex min-h-48 flex-col p-6'>
          <span className='text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400'>
            {post.category}
          </span>
          <h2 className='mt-3 text-xl font-bold leading-snug sm:text-2xl'>
            <Link href={`/post/${post.slug}`} className='hover:text-teal-600 dark:hover:text-teal-400'>
              {post.title}
            </Link>
          </h2>
          <Link
            href={`/post/${post.slug}`}
            className='mt-auto pt-5 font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'
          >
            Read article →
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className='group flex min-h-[390px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900'>
      <Link href={`/post/${post.slug}`} className='block h-56 overflow-hidden bg-gray-100 dark:bg-gray-800'>
        <img
          src={post.image}
          alt={post.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
          loading='lazy'
        />
      </Link>
      <div className='flex flex-1 flex-col p-6'>
        <span className='mb-3 text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400'>
          {post.category}
        </span>
        <h3 className='line-clamp-2 text-xl font-bold leading-snug'>
          <Link href={`/post/${post.slug}`} className='hover:text-teal-600 dark:hover:text-teal-400'>
            {post.title}
          </Link>
        </h3>
        <Link
          href={`/post/${post.slug}`}
          className='mt-auto pt-6 font-semibold text-teal-600 transition hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
