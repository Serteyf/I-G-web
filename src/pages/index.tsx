import type { NextPage } from "next";
import clientPromise from "@utils/mongodb";

import Layout from "@components/Layout";
import Landing from "@modules/Landing/Landing";
import { VisuallyHidden } from "@chakra-ui/react";

export async function getServerSideProps(): Promise<{
  props: { isConnected: boolean };
}> {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Index: NextPage = (isConnected, { children }) => {
  return (
    <Layout pageTitle={"Landing page"}>
      <VisuallyHidden>
        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code> for
            instructions.
          </h2>
        )}
      </VisuallyHidden>
      <Landing isConnected={isConnected}>{children}</Landing>
    </Layout>
  );
};

export default Index;
