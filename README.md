# Blog App Next

A modern blog application built with [Next.js](https://nextjs.org/).

## About the project

Blog App Next is a web application for publishing and displaying blog posts.  
The project can be used as a starting point for a personal blog, portfolio blog, or content-focused website.

## Features

- Blog post listing
- Individual post pages
- Responsive user interface
- Fast page rendering with Next.js
- Easy local development and deployment

## Getting started

### Requirements

Install the following software before running the project:

- [Node.js](https://nodejs.org/) 18.18 or newer
- npm, pnpm, yarn, or Bun
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/dawiditwork/Blog-App-Next.git
cd Blog-App-Next
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding the blog to an existing Next.js application

1. Copy the blog pages from this project into your application's `app/blog` directory.
2. Copy the components used by the blog into your application's components directory, for example `components/blog`.
3. Copy any blog images and other static files into the `public` directory.
4. Copy the blog styles into your application or import them from the appropriate component.
5. Install any dependencies required by the copied components:

   ```bash
   npm install
   ```

6. Update import paths if your application uses a different directory structure.
7. Add a link to the blog in your navigation:

   ```tsx
   import Link from "next/link";

   export function Navigation() {
     return <Link href="/blog">Blog</Link>;
   }
   ```

8. Start the application and open `http://localhost:3000/blog`.

> Copying files may not be enough if the project uses a database, external API, authentication, or environment variables. In that case, also copy the required configuration and add the relevant values to `.env.local`. Never commit secrets or `.env.local` to GitHub.

## Available scripts

The exact scripts are defined in `package.json`. Common Next.js scripts include:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` runs the production build.
- `npm run lint` checks the project for code-quality issues, if configured.

## Production build

Create and test a production build:

```bash
npm run build
npm run start
```

## Deployment

The easiest way to deploy a Next.js application is with [Vercel](https://vercel.com/):

1. Push the project to GitHub.
2. Sign in to Vercel.
3. Select **Add New → Project**.
4. Import the `Blog-App-Next` repository.
5. Add required environment variables, if the application uses any.
6. Select **Deploy**.

## Contributing

Contributions are welcome. Create a branch, make your changes, and open a pull request.

## License

No license has been specified yet. Add a `LICENSE` file if you want to define how other people may use this project.


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
