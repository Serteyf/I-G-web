import CTABanner from "@components/CTA/CTABanner";
import CTASimple from "@components/CTA/CTASimple";
import CTAWithVideo from "@components/CTA/CTAWithVideo";
import styles from "./Landing.module.scss";

export default function Main({ children, isConnected }) {
  return (
    <>
      <main className={styles.main}>
        <CTABanner />
        <CTASimple />
        <CTAWithVideo />
        <div>
          {isConnected ? (
            <h2 className="subtitle">You are connected to MongoDB</h2>
          ) : (
            <h2 className="subtitle">
              You are NOT connected to MongoDB. Check the <code>README.md</code> for
              instructions.
            </h2>
          )}
        </div>
      </main>
      {children}
    </>
  );
}
