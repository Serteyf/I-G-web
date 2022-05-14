import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Footer from "@modules/Navigation/Footer";
import Navbar from "@modules/Navigation/Navbar/Navbar";

const Layout = ({ pageTitle, children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Flex direction={"column"} height={"100vh"}>
        <Navbar {...children} />
        {children}
        <Footer />
      </Flex>
    </>
  );
};
export default Layout;
