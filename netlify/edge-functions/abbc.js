const handler = async (request, context) => {
  const res = await context.next();
  await setTimeout(() => {
    console.log("Delayed.");
  }, 30);
  return res;
};

export default handler;

export const config = {
  path: "/",
};
