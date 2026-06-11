import styles from "./pageStyles";
import Navbar from "./navbar";

export default function AboutPage() {
  return (
    <div style={styles.main}>
      <div>
        <img
          src="/images/header.jpg"
          alt="Hannah Lee magazine letter logo"
          style={styles.mainHeader}
        />
      </div>
      <div style={styles.polaroidContainer}>
        <div style={styles.polaroid}>
          <img
            src="/images/pink-ribbon.png"
            alt="Pink ribbon"
            style={styles.ribbon}
          />

          <img
            src="/images/headshot.jpg"
            alt="Hannah Lee"
            style={styles.headshot}
          />
        </div>
        <div style={styles.introContainer}>
          <img
            src="/images/intro-paper.png"
            alt="Background paper for introduction"
            style={styles.introPaper}
          />

          <div style={styles.introText}>
            <h2 style={styles.introHeading}>About Me</h2>
            <p style={styles.introParagraph}>
              Hi, I'm Hannah Lee, a current undergraduate at the University of Southern California studying Computer Science and minoring in Psychology. Since elementary school, I've always found myself drawn to math and the way everything logically pieces together. Naturally, I picked up Computer Science in my junior year of high school and decided to pursue a career in the field. 
            </p>
          </div>

          <img
            src="/images/green-star.png"
            alt="Green star"
            style={styles.star}
          />
        </div>
      </div>
    </div>
  );
}