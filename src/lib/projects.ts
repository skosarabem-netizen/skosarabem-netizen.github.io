import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const RESUME = 'https://docs.google.com/document/d/11UWcTbpPsSfrJbCvQ30NSPQQGrKQGfru9BvrP8BLHe0/edit?usp=sharing';
export const LINKEDIN = 'https://www.linkedin.com/in/swapnil-kosarabe';

export const url = (p: Project) => `/${p.data.path}/`;
export const media = (file?: string) => (file ? `/assets/media/${file}` : undefined);

export async function allProjects() {
  return (await getCollection('projects', p => !p.data.draft)).sort((a, b) => a.data.order - b.data.order);
}
export async function byKind(kind: Project['data']['kind']) {
  return (await allProjects()).filter(p => p.data.kind === kind);
}
