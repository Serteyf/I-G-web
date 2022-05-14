import CTABanner from "@components/CTA/CTABanner";
import CTASimple from "@components/CTA/CTASimple";
import CTAWithVideo from "@components/CTA/CTAWithVideo";
import Testimonial from "@components/Testimonial";
import styles from "./Landing.module.scss";

export default function Main({ children, isConnected }): JSX.Element {
  return (
    <>
      <main className={styles.main}>
        <CTABanner />
        <CTASimple />
        <CTAWithVideo />
        {/* <Testimonial /> */}
      </main>
      {children}
    </>
  );
}
