const handler = async (request, context) => {
  const res = await context.next();
  return res;
};

export default handler;

export const config = {
  path: "/",
};
