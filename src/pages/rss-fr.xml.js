import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

const posts = (await getCollection('writing', ({ data }) => !data.draft && (data.lang ?? 'en') === 'fr'))
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export function GET(context) {
  return rss({
    title: 'Camille Aubert — Articles',
    description:
      "Retours d'expérience sur les architectures RAG, l'ingénierie assistée par IA et l'exploitation de plateformes en production.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
    customData: '<language>fr-fr</language>',
  });
}
