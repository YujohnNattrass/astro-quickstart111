import { HTMLRewriter } from "https://deno.land/x/html_rewriter@v0.1.0-pre.17/index.ts";
const handler = async (request, context) => {
  const res = await context.next();
  const rewriter = new HTMLRewriter();
  return await new HTMLRewriter().transform(res);
};

export default handler;

export const config = {
  path: "/",
};
