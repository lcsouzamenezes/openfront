import { getItemPage } from "@keystone-6/core/___internal-do-not-use-will-break-in-patch/admin-ui/pages/ItemPage";
import { models } from "@models/index";
import { getNamesFromList } from "@lib/getNamesFromList";
import { checkAuth } from "@lib/checkAuth";

const Page = ({ listKey }) => {
  return getItemPage({ listKey })();
};

export async function getServerSideProps({ params, req }) {
  const { authenticatedItem, redirectToInit } = await checkAuth(req);

  if (authenticatedItem) {
    const listsObject = {};
    for (const [key, list] of Object.entries(models)) {
      const { adminUILabels } = getNamesFromList(key, list);
      listsObject[adminUILabels.path] = key;
    }

    // Pass post data to the page via props
    return { props: { listKey: listsObject[params.listKey] } };
  }
  if (redirectToInit) {
    return { redirect: { destination: `/init` } };
  }
  return { redirect: { destination: `/signin` } };
}

export default Page;
