import Link from "next/link";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <aside className={styles.heroPanel}>
          <div className={styles.badge}>Learn without limits</div>
          <h1>Access your learning journey.</h1>
          <p>
            Continue building new skills with expert-led courses, guided projects,
            and a community that keeps you moving forward.
          </p>

          <div className={styles.metricCard}>
            <span>Active learners</span>
            <strong>12k+</strong>
            <small>Across design, development, and business.</small>
          </div>
        </aside>

        <section className={styles.formPanel}>
          <Link href="/" className={styles.brand} aria-label="Go to ByteSpace homepage">
            <span className={styles.brandMark}>B</span>
            <span>ByteSpace</span>
          </Link>

          <div className={styles.headingWrap}>
            <h2>Welcome back</h2>
            <p>Sign in to continue your learning path.</p>
          </div>

          <form className={styles.form}>
            <label className={styles.inputGroup}>
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>

            <label className={styles.inputGroup}>
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter your password" />
            </label>

            <div className={styles.metaRow}>
              <label className={styles.checkRow}>
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <Link href="/signup">Forgot password?</Link>
            </div>

            <button type="submit" className={styles.primaryButton}>Sign In</button>
          </form>

          <div className={styles.divider}>
            <span>or continue with</span>
          </div>

          <div className={styles.socialRow}>
            <button type="button" className={styles.socialButton}>Google</button>
            <button type="button" className={styles.socialButton}>GitHub</button>
          </div>

          <p className={styles.switchText}>
            New here? <Link href="/signup">Create an account</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
