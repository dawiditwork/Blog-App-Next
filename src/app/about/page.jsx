export default function About() {
  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Prisma',
    'PostgreSQL',
    'MongoDB',
    'Clerk',
    'Tailwind CSS',
  ];

  const projects = [
    {
      title: 'AI Image Editor',
      description:
        'Full-stack SaaS application with AI-powered image editing tools.',
    },
    {
      title: 'Blog Platform',
      description:
        'Modern blog application built with Next.js, MongoDB and Clerk.',
    },
    {
      title: 'Marketplace',
      description:
        'Upcoming marketplace platform currently in development.',
    },
  ];

  return (
    <div className='min-h-screen'>
      <div className='max-w-6xl mx-auto px-4 py-16'>
        {/* Hero */}
        <div className='mb-16'>
          <h1 className='text-5xl font-black mb-4'>
            Hi, I'm Dawid 👋
          </h1>

          <p className='text-xl text-gray-400 max-w-3xl'>
            Full-stack developer focused on building modern web applications
            with React, Next.js, TypeScript and cloud technologies.
          </p>
        </div>

        {/* About */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold mb-6'>
            About
          </h2>

          <p className='text-gray-400 leading-8 max-w-4xl'>
            This blog documents my journey into software development.
            Here I share projects, technical challenges and lessons learned
            while building real-world applications. My goal is to continuously
            improve my skills, build useful products and grow as a full-stack
            developer.
          </p>
        </div>

        {/* Tech Stack */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold mb-6'>
            Tech Stack
          </h2>

          <div className='flex flex-wrap gap-3'>
            {techStack.map((tech) => (
              <span
                key={tech}
                className='rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:border-teal-500 hover:text-teal-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold mb-6'>
            Current Projects
          </h2>

          <div className='grid gap-6 md:grid-cols-3'>
            {projects.map((project) => (
              <div
                key={project.title}
                className='rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500'
              >
                <h3 className='text-xl font-bold mb-3'>
                  {project.title}
                </h3>

                <p className='text-gray-400'>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <h2 className='text-3xl font-bold mb-6'>
            My Goal
          </h2>

          <div className='rounded-2xl border border-slate-800 bg-slate-900 p-8'>
            <p className='text-gray-400 leading-8'>
              My goal is to transition into a full-stack developer role,
              continue building real-world applications and deepen my
              knowledge of modern software engineering, cloud platforms
              and scalable architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
