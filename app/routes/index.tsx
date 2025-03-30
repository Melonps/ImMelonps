import type { Meta, MiniMeta } from "../types";

export default function Top() {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./projects/*.mdx", {
    eager: true,
  });
  return (
    <div class="project-list">
      <h2>どんなことをやってきたの？</h2>
      {Object.entries(posts).map(([id, module]) => {
        if (module.frontmatter) {
          return (
            <a href={`${id.replace(/\.mdx$/, "")}`}>
              <div class="project-container">
                <img
                  class="project-icon"
                  src={module.frontmatter.thumbnailPath}
                  width="100"
                  height="100"
                />

                <div class="textual-wrapper">
                  <h4 class="project-title">{module.frontmatter.title}</h4>
                  <p>{module.frontmatter.description}</p>
                  <div class="tags-list">
                    {module.frontmatter.tags.map((tag) => (
                      <p key={tag}> # {tag}</p>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
}
