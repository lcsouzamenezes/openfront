import { getInitPage } from "@keystone-6/auth/pages/InitPage";
import { checkAuth } from "@lib/checkAuth";

const Page = () => {
  return getInitPage({
    listKey: "User",
    fieldPaths: ["name", "email", "password"],
  })();
};

export async function getServerSideProps({ req }) {
  const { authenticatedItem, redirectToInit } = await checkAuth(req);
  if (authenticatedItem) {
    return { redirect: { destination: `/` } };
  }
  if (!redirectToInit) {
    return { redirect: { destination: `/signin` } };
  }

  return {
    props: {},
  };
}

export default Page;
