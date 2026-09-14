import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const posts = (await getCollection('writing', ({ data }) => !data.draft))
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export function GET(context) {
  return rss({
    title: 'Camille Aubert — Writing',
    description:
      'Field notes on RAG architectures, AI-assisted engineering, and running enterprise platforms.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
