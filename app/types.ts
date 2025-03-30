export type Meta = {
  title: string;
  description: string;
  thumbnailPath: string;
  tags: string[];
};

export type MiniMeta = Pick<Meta, "title" | "thumbnailPath">;
