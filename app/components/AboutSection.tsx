import styles from "../styles/aboutMeStyles";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div
      style={{
        width: 850,
        margin: "0 auto",
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
        <div style={{ ...styles.polaroid, }}>
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

          <h3 style={styles.h31}>meee!</h3>
        </div>

        <img
          src="/images/heart.png"
          alt="Red heart with lace"
          style={styles.heart}
        />

        <div style={styles.introContainer}>
          <img
            src="/images/beige-paper.png"
            alt="Background paper for introduction"
            style={styles.introPaper}
          />

          <img
            src="/images/usc-logo.png"
            alt="USC felt logo"
            style={styles.usc}
          />

          <div style={styles.introText}>
            <h2 style={styles.introHeading}>About Me</h2>
            <p style={styles.introParagraph}>
              Hi, I'm Hannah Lee, a current undergraduate at the University of Southern California studying Computer Science and minoring in Psychology! Since elementary school, I've always found myself drawn to math and the way numbers logically piece together with a single solution. Naturally, I picked up Computer Science in my junior year of high school after taking AP Computer Science A, and I decided to pursue a career in the field of software engineering. 
            </p>
          </div>

          <img
            src="/images/pink-tape.png"
            alt="Pink picnic blanket pattern tape"
            style={styles.pinkTape}
          />

          <img
            src="/images/blue-flower.png"
            alt="Blue flower"
            style={styles.flower}
          />

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
          src="/images/music-receipt.png"
          alt="Receipt with favorites songs"
          style={styles.receipt}
        />

        <motion.img
          src="/images/record.png"
          alt="New Jeans record"
          style={styles.record}
          animate={{ rotate: [-45, 315] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <img
          src="/images/binder-paper.png"
          alt="Binder paper for more info"
          style={styles.morePaper}
        />

        <img
          src="/images/purple-tape.png"
          alt="Purple tape"
          style={styles.purpleTape}
        />

        <div style={styles.moreText}>
          <p style={styles.moreParagraph}>
            Outside of academics and tech, as a Bay area native, I've grown to love exploring new cafes and matcha places. I also love visiting art museums such as SF MOMA and Legion of Honor since I grew up learning art from my mom. 
          </p>
        </div>

        <div style={styles.polaroidsContainer}>
          <div style={{ ...styles.polaroid, ...styles.polaroid2 }}>
            <img
              src="/images/moma2.jpg"
              alt="Hannah at SFMOMA"
              style={styles.picture}
            />
            <h3 style={styles.h32}>@SFMOMA</h3>
          </div>
          <div style={{ ...styles.polaroid, ...styles.polaroid3 }}>
            <img
              src="/images/mango-shaved-ice.png"
              alt="Mango shaved ice with Jellycats"
              style={styles.picture}
            />
            <h3 style={styles.h33}>mangooo</h3>
          </div>
          <div style={{ ...styles.polaroid, ...styles.polaroid4 }}>
            <img
              src="/images/matcha.png"
              alt="Matcha latte and rabbit Jellycat"
              style={styles.matcha}
            />

            <img
              src="/images/baby.jpg"
              alt="Hannah as a baby with her parents at the Golden Gate Bridge"
              style={styles.picture}
            />
            <h3 style={styles.h34}>baby me</h3>
          </div>
        </div>
      </div>

      {/* Last section */}
      <div>
        
      </div>
    </div>
  );
}