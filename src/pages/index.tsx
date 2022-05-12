import type { NextPage } from "next";
import clientPromise from "@utils/mongodb";

import Layout from "@components/Layout";
import Navbar from "@components/Navigation/Navbar";
import Footer from "@components/Navigation/Footer";
import { Flex } from "@chakra-ui/react";
import Landing from "@modules/Landing/Landing";

export async function getServerSideProps() {
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
      <Flex direction={"column"} height={"100vh"}>
        <Navbar />
        <Landing isConnected={isConnected}>{children}</Landing>
        <Footer />
      </Flex>
    </Layout>
  );
};

export default Index;
