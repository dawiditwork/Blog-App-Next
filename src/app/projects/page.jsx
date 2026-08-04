import Link from 'next/link';
import { projects } from './projectData';

export const metadata = {
  title: 'Projects',
  description: 'Selected full-stack projects by Dawid Frankowicz.',
};

export default function Projects() {
  return (
    <main className='min-h-screen'>
      <section className='mx-auto max-w-6xl px-4 py-16 sm:py-24'>
        <div className='mb-12 max-w-3xl'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-500'>Selected work</p>
          <h1 className='text-4xl font-black tracking-tight sm:text-5xl'>Projects built from idea to deployment</h1>
          <p className='mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400'>
            A closer look at the applications I have designed, developed and deployed while growing as a full-stack developer.
          </p>
        </div>
        <div className='grid gap-6 lg:grid-cols-3'>
          {projects.map((project) => (
            <article key={project.slug} className='group flex min-h-96 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900'>
              <div className='h-48 overflow-hidden bg-gray-100 dark:bg-gray-800'>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                  loading='lazy'
                />
              </div>
              <div className='flex flex-1 flex-col p-7'>
                <span className='text-sm font-bold text-teal-500'>{project.number}</span>
                <h2 className='mt-4 text-2xl font-bold'>{project.title}</h2>
                <p className='mt-4 flex-1 leading-7 text-gray-600 dark:text-gray-400'>{project.summary}</p>
                <div className='my-6 flex flex-wrap gap-2'>
                  {project.stack.slice(0, 3).map((item) => (
                    <span key={item} className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100'>{item}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className='font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300'>Read project story →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
