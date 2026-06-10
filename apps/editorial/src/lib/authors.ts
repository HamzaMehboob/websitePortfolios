export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
}

export const authors: Author[] = [
  {
    slug: 'maya-chen',
    name: 'Maya Chen',
    role: 'Design Editor',
    bio: 'Maya covers interaction design, design systems, and the craft of digital products.',
  },
  {
    slug: 'jordan-lee',
    name: 'Jordan Lee',
    role: 'Technology Editor',
    bio: 'Jordan writes about frontend architecture, performance, and the tools shaping the web.',
  },
];

export function getAuthor(slug: string) {
  return authors.find((a) => a.slug === slug);
}
