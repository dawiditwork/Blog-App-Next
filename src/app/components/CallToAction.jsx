import Link from 'next/link';

export default function CallToAction() {
  return (
    <div className='flex flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl border border-teal-500 bg-white p-8 shadow-lg dark:bg-slate-900 sm:flex-row'>
      <div className='flex flex-1 flex-col justify-center text-center sm:text-left'>
        <span className='mb-2 text-sm font-semibold uppercase tracking-wider text-teal-500'>
          Coming soon
        </span>

        <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
          Mystery Project
        </h2>

        <p className='my-4 text-gray-600 dark:text-gray-300'>
          I&apos;m working on something new. I can&apos;t reveal the details
          just yet, but it will be my most ambitious project yet — designed and
          built from the ground up. More information coming soon.
        </p>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <Link
            href='/projects'
            className='inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700'
          >
            View my projects
          </Link>
        </div>
      </div>

      <div className='flex-1'>
        <img
          src='https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85'
          alt='Mystery project coming soon'
          className='h-72 w-full rounded-2xl object-cover shadow-md'
        />
      </div>
    </div>
  );
}
