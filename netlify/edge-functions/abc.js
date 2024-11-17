import { HTMLRewriter } from "https://raw.githubusercontent.com/worker-tools/html-rewriter/master/index.ts";

const handler = async (request, context) => {
  const res = await context.next();
  const rewriter = new HTMLRewriter();
  rewriter.trans;
  return await new HTMLRewriter().transform(res);
};

export default handler;

export const config = {
  path: "/",
};
