import { HomePage } from "@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/pages/HomePage";
import { checkAuth } from "@lib/checkAuth";

const Page = () => {
  return HomePage();
};

export async function getServerSideProps({ req }) {
  const { authenticatedItem, redirectToInit } = await checkAuth(req);

  if (authenticatedItem) {
    return {
      props: { authenticatedItem },
    };
  }
  if (redirectToInit) {
    return { redirect: { destination: `/init` } };
  }
  return { redirect: { destination: `/signin` } };
}

export default Page;
