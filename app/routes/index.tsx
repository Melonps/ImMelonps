import type { Meta, PostEntry, PostsByYear } from "../types";

export default function Top() {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./projects/*.mdx", {
    eager: true,
  });

  const postList: PostEntry[] = Object.entries(posts).map(([id, mod]) => ({
    id: id.replace(/\.mdx$/, ""),
    frontmatter: mod.frontmatter,
  }));

  const postsByYear: PostsByYear = postList.reduce((acc, post) => {
    const year = post.frontmatter.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {} as PostsByYear);

  const sortedYears = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  console.log(sortedYears);
  return (
    <div>
      <h2>どんなことをやってきたの？</h2>
      {sortedYears.map((year) => {
        const posts = postsByYear[year];
        return (
          <section key={year} class="year-section">
            <h3>{year}年</h3>
            <div class="project-list">
              {posts.map((post: PostEntry) => {
                return (
                  <a href={`${post.id.replace(/\.mdx$/, "")}`}>
                    <div class="project-container">
                      <img
                        class="project-icon"
                        src={post.frontmatter.thumbnailPath}
                        width="100"
                        height="100"
                      />
                      <div class="textual-wrapper">
                        <h4 class="project-title">{post.frontmatter.title}</h4>
                        <p>{post.frontmatter.description}</p>
                        <div class="tags-list">
                          {post.frontmatter.tags.map((tag) => (
                            <p key={tag} class="tag-content">
                              {" "}
                              # {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
