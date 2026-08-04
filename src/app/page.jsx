import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Hero Section */}
      <div className='flex flex-col gap-6 py-20 px-3 max-w-6xl mx-auto w-full'>
        <h1 className='text-4xl font-bold lg:text-6xl'>
          Thoughts, Projects & Development Notes
        </h1>

        <p className='text-gray-500 text-lg max-w-3xl'>
          Welcome to my corner of the internet. Here I share projects I've
          built, challenges I've solved, and lessons learned while working
          with React, Next.js, TypeScript, and modern web technologies.
        </p>

        <div className='flex gap-4'>
          <Link
            href='/search'
            className='bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition'
          >
            Explore Posts
          </Link>

          <a
            href='https://github.com/dawiditwork'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition'
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Featured Project */}
      <div className='w-full max-w-6xl px-3 mb-10'>
        <CallToAction />
      </div>

      {/* Recent Posts */}
      <div className='p-3 flex flex-col gap-8 py-7 w-full max-w-6xl'>
        <h2 className='text-3xl font-bold'>
          Latest Posts
        </h2>

        <RecentPosts limit={9} />

        <Link
          href='/search?category=null'
          className='text-lg text-teal-500 hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}
