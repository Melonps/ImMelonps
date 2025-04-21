import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title}</title>}
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <header class="header-wrapper">
          <div class="name-wrapper">
            <h1>Banri Kakehi</h1>
            <p>@Melonps</p>
          </div>
          <p>
            Osakaに住んでいるソフトウェアエンジニアです
            <br />
            人々の生活がちょっと豊かになるアプリ開発や、続きがみたくなるUI/UX開発、ワクワクさせるようなプロトタイプ開発・研究が好きです。
          </p>
          <div class="icon-list">
            <a href="https://github.com/Melonps">
              <img
                class="project-icon"
                src="/assets/icon/github.svg"
                width="32"
                height="32"
              />
            </a>
            <a href="https://www.linkedin.com/in/banri-kakehi-121915351/">
              <img
                class="project-icon"
                src="/assets/icon/linkedin.svg"
                width="32"
                height="32"
              />
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Banri Kakehi</p>
        </footer>
      </body>
    </html>
  );
});
