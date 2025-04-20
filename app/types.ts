export type Meta = {
  title: string;
  description: string;
  thumbnailPath: string;
  tags: string[];
  year: number;
};

export type PostEntry = {
  id: string;
  frontmatter: Meta;
};

export type PostsByYear = Record<number, PostEntry[]>;
