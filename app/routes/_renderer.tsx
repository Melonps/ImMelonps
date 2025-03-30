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
            ソフトウェアや音楽を作って渡すのが好きです。
          </p>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Banri Kakehi</p>
        </footer>
      </body>
    </html>
  );
});
