import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";

// declare module "hono" {
//   interface ContextRenderer {
//     (content: string | Promise<string>, props: { title: string }): Response;
//   }
// }
const app = createApp();

showRoutes(app);

export default app;
