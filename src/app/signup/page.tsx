import Link from "next/link";
import styles from "./page.module.css";

export default function SignupPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <aside className={styles.heroPanel}>
          <div className={styles.badge}>Start learning today</div>
          <h1>Build your next skill in a smarter way.</h1>
          <p>
            Join ByteSpace to discover curated classes, expert mentors, and a
            focused path to growth that matches your goals.
          </p>

          <div className={styles.featureList}>
            <div>
              <strong>70+</strong>
              <span>Expert-led courses</span>
            </div>
            <div>
              <strong>16</strong>
              <span>Industry creators</span>
            </div>
            <div>
              <strong>12K</strong>
              <span>Happy students</span>
            </div>
          </div>
        </aside>

        <section className={styles.formPanel}>
          <Link href="/" className={styles.brand} aria-label="Go to ByteSpace homepage">
            <span className={styles.brandMark}>B</span>
            <span>ByteSpace</span>
          </Link>

          <div className={styles.headingWrap}>
            <h2>Create your account</h2>
            <p>Start your learning journey in minutes.</p>
          </div>

          <form className={styles.form}>
            <label className={styles.inputGroup}>
              <span>Full name</span>
              <input type="text" name="name" placeholder="Jane Doe" />
            </label>

            <label className={styles.inputGroup}>
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>

            <label className={styles.inputGroup}>
              <span>Password</span>
              <input type="password" name="password" placeholder="Create a password" />
            </label>

            <label className={styles.inputGroup}>
              <span>Confirm password</span>
              <input type="password" name="confirmPassword" placeholder="Repeat your password" />
            </label>

            <label className={styles.checkRow}>
              <input type="checkbox" name="terms" />
              <span>I agree to the terms and privacy policy.</span>
            </label>

            <button type="submit" className={styles.primaryButton}>Create account</button>
          </form>

          <div className={styles.divider}>
            <span>or sign up with</span>
          </div>

          <div className={styles.socialRow}>
            <button type="button" className={styles.socialButton}>Google</button>
            <button type="button" className={styles.socialButton}>GitHub</button>
          </div>

          <p className={styles.switchText}>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
