import type { NextPage } from "next";
import clientPromise from "@utils/mongodb";

import Layout from "@components/Layout";
import Landing from "@modules/Landing/Landing";

const AboutUs: NextPage = (isConnected, { children }): JSX.Element => {
  return (
    <Layout pageTitle={"About us"}>
      <div>hi</div>
    </Layout>
  );
};

export default AboutUs;
