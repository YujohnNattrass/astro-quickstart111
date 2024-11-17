const handler = async (request, context) => {
  const res = await context.next();
  await setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, "1000");
  return res;
};

export default handler;

export const config = {
  path: "/",
};
