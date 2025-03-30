import { jsxRenderer } from "hono/jsx-renderer";
import "../public/static/style.scss";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
});
