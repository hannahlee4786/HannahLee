import styles from "../styles/pageStyles";

export default function AboutSection() {
  return (
    <div
      style={{
        width: 1500,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/header.jpg"
          alt="Hannah Lee magazine letter logo"
          style={styles.mainHeader}
        />
      </div>

      {/* Introduction */}
      <div style={styles.polaroidContainer}>
        <div style={{ ...styles.polaroid, ...styles.polaroid1 }}>
          <img
            src="/images/pink-ribbon.png"
            alt="Pink ribbon"
            style={styles.ribbon}
          />

          <img
            src="/images/headshot.jpg"
            alt="Hannah Lee"
            style={styles.picture}
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
              Hi, I'm Hannah Lee, a current undergraduate at the University of Southern California studying Computer Science and minoring in Psychology! Since elementary school, I've always found myself drawn to math and the way numbers logically piece together with a single solution. Naturally, I picked up Computer Science in my junior year of high school after taking AP Computer Science A, and I decided to pursue a career in the field of software engineering. 
            </p>
          </div>

          <img
            src="/images/green-star.png"
            alt="Green star"
            style={styles.star}
          />
        </div>
      </div>

      {/* Fun Section */}
      <div style={styles.heartContainer}>
        <img
          src="/images/heart.png"
          alt="Red heart with lace"
          style={styles.heart}
        />

        <div style={styles.moreText}>
          <p style={styles.moreParagraph}>
            Outside of academics and tech, as a Bay area native, I've grown to love exploring new cafes and matcha places. I also love visiting art museums such as SF MOMA and Legion of Honor since I grew up learning art from my mom. 
          </p>
        </div>

        <div>
          <div style={{ ...styles.polaroid, ...styles.polaroid2 }}>
            <img
              src="/images/moma2.jpg"
              alt="Hannah at SFMOMA"
              style={styles.picture}
            />
          </div>
          <div style={{ ...styles.polaroid, ...styles.polaroid3 }}>
            <img
              src="/images/moma1.jpg"
              alt="Jellycat dogs at SFMOMA"
              style={styles.picture}
            />
          </div>
          <div style={{ ...styles.polaroid, ...styles.polaroid4 }}>
            <img
              src="/images/matcha.png"
              alt="Matcha lattes"
              style={styles.matcha}
            />

            <img
              src="/images/art.jpg"
              alt="Art piece"
              style={styles.picture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}