# Blog System Guide

This portfolio uses Next.js App Router with MDX for the blog system. Here's how to add new blog posts:

## Adding a New Blog Post

1. **Create the MDX file**: Add a new `.mdx` file in `src/content/blog/`

   Example: `src/content/blog/my-new-post.mdx`

2. **Add the metadata**: Each post needs metadata at the top:

```javascript
export const metadata = {
  title: "Your Post Title",
  description: "A brief description of your post",
  publishDate: "2024-09-18", // YYYY-MM-DD format
  tags: ["JavaScript", "React", "Web Development"],
  readTime: "5 min read", // Optional
  thumbnail: "/img/your-thumbnail.jpg", // Optional
};
```

3. **Write your content**: Below the metadata, write your content in Markdown:

````markdown
# Your Post Title

Your content goes here. You can use:

- **Bold text**
- _Italic text_
- `Code snippets`
- [Links](https://example.com)

## Code blocks

\```javascript
function example() {
console.log("Hello, world!");
}
\```
````

4. **Update the blog slugs**: Add your new post slug to the `BLOG_SLUGS` array in `src/lib/blog.ts`:

```typescript
const BLOG_SLUGS: string[] = ["sample-post", "my-new-post"];
```

5. **Build and deploy**: Run `pnpm run build` to generate the static site.

## Features

- ✅ Static generation for GitHub Pages
- ✅ Automatic SEO metadata
- ✅ MDX support (Markdown + React components)
- ✅ Tag system
- ✅ External article support
- ✅ TypeScript support

## Deployment to GitHub Pages

1. Build the site: `pnpm run build`
2. The static files will be in the `out/` directory
3. Deploy to GitHub Pages using the static files

Your site is fully optimized for static hosting!
