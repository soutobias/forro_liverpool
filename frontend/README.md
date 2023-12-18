# Clone a React Template App using Next.js

This guide will walk you through the steps off to clone this repo and use it as a template for your react app.

## Prerequisites

Before you get started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)
- [docker](https://www.docker.com/)

## Getting Started

1. **Clone this repo**

```bash
git clone ...
```
2. **Change Directory**

Move into your project directory:

```bash
cd react-template
```
2. **Install the libraries**

```bash
npm install
```
Your Next.js app will be available at [http://localhost:3000](http://localhost:3000).


3. **Start the Development Server**

To start the development server, run:

```bash
npm run dev
```
Your Next.js app will be available at [http://localhost:3000](http://localhost:3000).

4. **Building Your App** 

To build your app for production, run:

```bash
npm run build
```

5. **Running Your App in Production Mode**

To run your app in production mode, use:

```bash
npm start
```

6. **Running Your App as a Docker Container**

To run your app as a Docker Container, you can run:

```bash
docker build --progress=plain -t react-template .
docker run -p 3000:80 -d react-template
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn more about Next.js features and capabilities.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Explore React for building dynamic user interfaces.
- [Create a GitLab Repository](https://docs.gitlab.com/ee/user/project/repository/#create-a-project-repository) - Instructions for creating a GitLab repository.
- [Tailwind documentation](https://tailwindcss.com/) - Instructions on how to use tailwind to style your app.
