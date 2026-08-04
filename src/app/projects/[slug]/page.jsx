import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../projectData';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectStory({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className='min-h-screen'>
      <article className='mx-auto max-w-4xl px-4 py-16 sm:py-24'>
        <Link href='/projects' className='text-sm font-semibold text-teal-500 hover:underline'>← All projects</Link>
        <p className='mb-3 mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal-500'>Project {project.number}</p>
        <h1 className='text-4xl font-black tracking-tight sm:text-6xl'>{project.title}</h1>
        <p className='mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400'>{project.summary}</p>
        <div className='my-10 flex flex-wrap gap-2'>
          {project.stack.map((item) => (
            <span key={item} className='rounded-full border border-gray-200 px-4 py-2 text-sm dark:border-gray-700'>{item}</span>
          ))}
        </div>
        <div className='space-y-12 border-t border-gray-200 pt-12 dark:border-gray-800'>
          <section><h2 className='text-2xl font-bold'>Overview</h2><p className='mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400'>{project.overview}</p></section>
          <section>
            <h2 className='text-2xl font-bold'>Key features</h2>
            <ul className='mt-4 grid gap-3 text-gray-600 dark:text-gray-400 sm:grid-cols-2'>
              {project.highlights.map((highlight) => <li key={highlight} className='rounded-2xl bg-gray-50 p-4 dark:bg-gray-900'>{highlight}</li>)}
            </ul>
          </section>
          <section><h2 className='text-2xl font-bold'>What I learned</h2><p className='mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400'>{project.learned}</p></section>
        </div>
        <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='mt-12 inline-flex rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600'>Visit live project ↗</a>
      </article>
    </main>
  );
}
