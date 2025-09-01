This is a [Next.js](https://nextjs.org) project configured to fetch content from **Contentful** using `getStaticProps` and `getServerSideProps`.

## Getting Started

Create an `.env.local` file based on `.env.example` and provide your Contentful credentials:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

Then run the development server:

```bash
npm run dev
```

The following pages demonstrate dynamic content:

- `/` lists projects via `getStaticProps`
- `/team` lists team members via `getStaticProps`
- `/[slug]` renders static pages via `getServerSideProps`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentful Documentation](https://www.contentful.com/developers/docs/)

## Deploy

Deploy the application to your preferred hosting provider such as [Vercel](https://vercel.com/).
