export const projectPosts = [
  {
    _id: 'project-post-myhikes',
    userId: 'portfolio',
    title: 'Building MyHikes: A Modern Hiking Experience',
    slug: 'building-myhikes-a-modern-hiking-experience',
    category: 'nextjs',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=85',
    createdAt: '2026-07-26T18:00:00.000Z',
    updatedAt: '2026-07-26T18:00:00.000Z',
    content: `
      <p>MyHikes is a web experience created for people who enjoy discovering, documenting and sharing outdoor adventures.</p>
      <h2>The idea behind MyHikes</h2>
      <p>I wanted to build a focused hiking platform that presents useful content through a clean and accessible interface. The project gave me an opportunity to turn structured information into a responsive experience that works well across desktop and mobile devices.</p>
      <h2>What the application offers</h2>
      <ul>
        <li>A clear presentation of hiking routes and outdoor content</li>
        <li>Reusable components that keep the interface consistent</li>
        <li>Responsive layouts designed for different screen sizes</li>
        <li>Simple navigation focused on content discovery</li>
      </ul>
      <h2>What I learned</h2>
      <p>Building MyHikes improved my understanding of component composition, visual hierarchy and responsive design. It also helped me think more carefully about how users browse content and find the information they need.</p>
      <p><a href="https://myhikes.dawidfrankowicz.com" target="_blank" rel="noopener noreferrer">Visit the live MyHikes project →</a></p>
    `,
  },
  {
    _id: 'project-post-portfolio',
    userId: 'portfolio',
    title: 'Designing and Building My Developer Portfolio',
    slug: 'designing-and-building-my-developer-portfolio',
    category: 'nextjs',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=85',
    createdAt: '2026-07-26T17:00:00.000Z',
    updatedAt: '2026-07-26T17:00:00.000Z',
    content: `
      <p>My portfolio is the central place where I present my work, technical skills and progress as a full-stack developer.</p>
      <h2>More than a project gallery</h2>
      <p>I designed the portfolio to communicate who I am, what I build and how I approach development. The goal was to create a fast and focused experience that makes the most important information easy to find.</p>
      <h2>Key parts of the portfolio</h2>
      <ul>
        <li>A concise introduction and overview of my technical background</li>
        <li>Selected projects with descriptions and live links</li>
        <li>A responsive interface for desktop and mobile visitors</li>
        <li>A consistent visual system built around strong typography and clear spacing</li>
      </ul>
      <h2>The development process</h2>
      <p>The project helped me improve the way I present technical work to other people. I focused on clarity, performance and creating a design that supports the content instead of competing with it.</p>
      <h2>What comes next</h2>
      <p>I will continue updating the portfolio as I complete new applications, learn new technologies and take on more ambitious development challenges.</p>
      <p><a href="https://dawidfrankowicz.com" target="_blank" rel="noopener noreferrer">Visit my developer portfolio →</a></p>
    `,
  },
];

const aiPostContent = `
  <p>I built this AI-powered image application to explore how modern artificial intelligence services can become part of a complete, production-ready web product.</p>
  <h2>The idea behind the project</h2>
  <p>The goal was to create more than a technical demo. I wanted the application to feel like a real SaaS product, with a clear workflow, secure authentication and tools that solve practical image-editing problems directly in the browser.</p>
  <h2>What the application can do</h2>
  <ul>
    <li>Remove image backgrounds automatically</li>
    <li>Enhance image quality with AI-powered processing</li>
    <li>Crop and transform uploaded images</li>
    <li>Manage user accounts and protected actions</li>
    <li>Track usage through a credit-based system</li>
    <li>Purchase additional credits through an integrated payment flow</li>
  </ul>
  <h2>Building the product</h2>
  <p>I developed the interface with Next.js and React, then connected it to authentication, image-processing and payment services. Each operation needed clear feedback, reliable error handling and a consistent experience across desktop and mobile devices.</p>
  <h2>The biggest challenge</h2>
  <p>The most demanding part was coordinating several external services inside one smooth workflow. Image uploads, AI processing, account permissions, credit limits and payments all needed to remain synchronized without making the interface feel complicated.</p>
  <h2>What I learned</h2>
  <p>This project strengthened my understanding of full-stack SaaS architecture. I gained practical experience with authentication, protected server actions, external APIs, payment integration and responsive product design.</p>
  <h2>Final result</h2>
  <p>The finished application combines useful AI tools with the structure expected from a modern web product. It is one of my most complete projects and an important step in developing my full-stack skills.</p>
  <p><a href="https://ai.dawidfrankowicz.com" target="_blank" rel="noopener noreferrer">Visit the live AI application →</a></p>
`;

export function applyPostContentOverrides(post) {
  if (
    post.slug === 'building-an-ai-application-with-nextjs' ||
    post.slug === 'building-an-ai-powered-image-editor-with-nextjs'
  ) {
    return { ...post, content: aiPostContent };
  }
  return post;
}

export function filterProjectPosts(data = {}) {
  return projectPosts.filter((post) => {
    if (data.slug && post.slug !== data.slug) return false;
    if (data.postId && post._id !== data.postId) return false;
    if (
      data.category &&
      !['null', 'undefined', 'uncategorized'].includes(data.category) &&
      post.category !== data.category
    ) {
      return false;
    }
    if (data.searchTerm) {
      const term = data.searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
      );
    }
    return true;
  });
}
