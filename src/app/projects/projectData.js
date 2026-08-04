export const projects = [
  {
    slug: 'ai-application',
    number: '01',
    title: 'AI Application',
    summary: 'A full-stack web application exploring practical AI-powered image tools in a modern SaaS experience.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Artificial intelligence visual on a computer screen',
    stack: ['Next.js', 'React', 'AI', 'Clerk', 'PostgreSQL'],
    liveUrl: 'https://ai.dawidfrankowicz.com',
    overview: 'I built this project to turn common image-editing tasks into a simple browser-based workflow. The application combines a responsive interface, authentication, usage credits and AI-powered processing in one product.',
    highlights: ['Secure user authentication and account management', 'AI-assisted image editing workflows', 'Credit-based access to resource-intensive features', 'Responsive interface designed for desktop and mobile'],
    learned: 'The project strengthened my experience with complete SaaS flows: connecting the interface to external services, protecting user actions and keeping a multi-step experience clear.',
  },
  {
    slug: 'myhikes',
    number: '02',
    title: 'MyHikes',
    summary: 'A dedicated web experience for discovering, documenting and sharing hiking and outdoor adventures.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Hiker walking through a mountain landscape',
    stack: ['React', 'Next.js', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://myhikes.dawidfrankowicz.com',
    overview: 'MyHikes brings hiking content into a focused and accessible interface. It was created as a practical project for working with reusable components, structured content and responsive layouts.',
    highlights: ['Clear presentation of hiking-related content', 'Reusable components and maintainable page structure', 'Mobile-friendly navigation and layouts', 'Deployment under a dedicated custom subdomain'],
    learned: 'Building MyHikes helped me improve component composition, visual hierarchy and the way a product adapts across screen sizes.',
  },
  {
    slug: 'blog-application',
    number: '03',
    title: 'Blog Application',
    summary: 'A full-stack publishing platform for technical articles, project stories and development notes.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Laptop and notebook on a desk used for writing a blog',
    stack: ['Next.js', 'MongoDB', 'Clerk', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://blog.dawidfrankowicz.com',
    overview: 'This blog is both my publishing space and a complete full-stack project. It includes authentication, an admin dashboard, rich-text editing, image uploads, search and post management.',
    highlights: ['Admin dashboard for creating and editing articles', 'MongoDB-backed posts and user data', 'Authentication and protected administration routes', 'Search, categories, image uploads and dark mode'],
    learned: 'The application gave me hands-on experience connecting authentication, database models, uploads and server routes inside a production Next.js project.',
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
