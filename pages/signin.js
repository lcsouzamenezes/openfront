import { getSigninPage } from "@keystone-6/auth/pages/SigninPage";
import { checkAuth } from "@lib/checkAuth";

const Page = () => {
  return getSigninPage({
    identityField: "email",
    secretField: "password",
    mutationName: "authenticateUserWithPassword",
    successTypename: "UserAuthenticationWithPasswordSuccess",
    failureTypename: "UserAuthenticationWithPasswordFailure",
  })();
};

export async function getServerSideProps({ req }) {
  const { authenticatedItem, redirectToInit } = await checkAuth(req);
  if (authenticatedItem) {
    return { redirect: { destination: `/` } };
  }
  if (redirectToInit) {
    return { redirect: { destination: `/init` } };
  }

  return {
    props: {
      hello: "world",
    },
  };
}

export default Page;
