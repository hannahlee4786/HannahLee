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
        <div style={styles.mainHeader}>
          <motion.img
            src="/images/h1.png"
            alt="Letter H"
            style={styles.letterH1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/a1.png"
            alt="Letter a"
            style={styles.letterA1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/n1.png"
            alt="Letter n"
            style={styles.letterN1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/n2.png"
            alt="Letter n"
            style={styles.letterN2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/a2.png"
            alt="Letter a"
            style={styles.letterA2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/h2.png"
            alt="Letter h"
            style={styles.letterH2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/l1.png"
            alt="Letter L"
            style={styles.letterL1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/e1.png"
            alt="Letter e"
            style={styles.letterE1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/e2.png"
            alt="Letter e"
            style={styles.letterE2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </div>
      </div>

      {/* Introduction */}
      <div style={styles.polaroidContainer}>
        <motion.div
          style={{
            ...styles.polaroid,
            transformOrigin: "center center",
          }}
          whileHover={{
            scale: 1.05,
            rotate: -4,
            y: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
          }}
        >
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
        </motion.div>

        <motion.img
          src="/images/heart.png"
          alt="Red heart with lace"
          style={styles.heart}
          whileHover={{
            rotate: -8,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
        />

        <div style={styles.introContainer}>
          <motion.div
            style={styles.introGroup}
            whileHover={{ rotate: 3, scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img
              src="/images/beige-paper.png"
              alt="Background paper for introduction"
              style={styles.introPaper}
            />

            <div style={styles.introText}>
              <h2 style={styles.introHeading}>About Me</h2>
              <p style={styles.introParagraph}>
                Hi, I'm Hannah Lee, a current undergraduate at the University of
                Southern California studying Computer Science and minoring in Psychology!
                Since elementary school, I've always found myself drawn to math and the
                way numbers logically piece together with a single solution. Naturally,
                I picked up Computer Science in my junior year of high school after
                taking AP Computer Science A, and I decided to pursue a career in the
                field of software engineering.
              </p>
            </div>

            <img
              src="/images/pink-tape.png"
              alt="Pink picnic blanket pattern tape"
              style={styles.pinkTape}
            />
          </motion.div>

          <motion.img
            src="/images/usc-logo.png"
            alt="USC felt logo"
            style={styles.usc}
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/blue-flower.png"
            alt="Blue flower"
            style={styles.flower}
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/green-star.png"
            alt="Green star"
            style={styles.star}
            initial={{ rotate: -14 }}
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/warriors-wax.png"
            alt="Golden state warriors wax stamp"
            style={styles.warriors}
            initial={{ rotate: -14 }}
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </div>
      </div>

      {/* Fun Section */}
      <div style={styles.moreContainer}>
        <motion.img
          src="/images/blue-flower-2.png"
          alt="Blue flower patch with green center"
          style={styles.flower2}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/music-receipt.png"
          alt="Receipt with favorites songs"
          style={styles.receipt}
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/record.png"
          alt="New Jeans record"
          style={styles.record}
          initial={{ rotate: -45 }}
          whileHover={{
            rotate: -35,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
        />

        <motion.div
          style={styles.moreGroup}
          whileHover={{ rotate: -4, scale: 1.03, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
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
              Outside of academics and tech, as a Bay area native, I've grown to love
              exploring new cafes and matcha places. I also love visiting art
              museums such as SF MOMA and Legion of Honor since I grew up learning
              art from my mom.
            </p>
          </div>
        </motion.div>

        <div style={styles.polaroidsContainer}>
          <motion.div
            style={{ ...styles.polaroid, ...styles.polaroid2 }}
            whileHover={{ rotate: 5, scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img
              src="/images/moma2.jpg"
              alt="Hannah at SFMOMA"
              style={styles.picture}
            />
            <h3 style={styles.h32}>@SFMOMA</h3>
          </motion.div>

          <motion.img
            src="/images/mango.png"
            alt="Mango sticker"
            style={styles.mango}
            whileHover={{ rotate: -10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.div
            style={{ ...styles.polaroid, ...styles.polaroid3 }}
            whileHover={{ rotate: -5, scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img
              src="/images/mango-shaved-ice.png"
              alt="Mango shaved ice with Jellycats"
              style={styles.picture}
            />
            <h3 style={styles.h33}>mangooo</h3>
          </motion.div>

          <motion.img
            src="/images/matcha.png"
            alt="Matcha latte and rabbit Jellycat"
            style={styles.matcha}
            whileHover={{ rotate: -10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.div
            style={{ ...styles.polaroid, ...styles.polaroid4 }}
            whileHover={{ rotate: 5, scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img
              src="/images/baby.jpg"
              alt="Hannah as a baby with her parents at the Golden Gate Bridge"
              style={styles.picture}
            />
            <h3 style={styles.h34}>baby me</h3>
          </motion.div>
        </div>
      </div>

      {/* Last section */}
      <div style={styles.lastContainer}>
        <motion.div
          style={styles.lastGroup}
          whileHover={{ rotate: -4, scale: 1.03, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/pink-paper.png"
            alt="Background paper for ending paragraph"
            style={styles.lastPaper}
          />

          <div style={styles.lastText}>
            <p style={styles.lastParagraph}>
              {"Feel free to connect with me below :)"}
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid5 }}
          whileHover={{ rotate: -5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/fair.jpg"
            alt="Picture at the fair"
            style={styles.picture}
          />
          <h3 style={styles.h35}>@alameda fair</h3>
        </motion.div>

        <motion.img
          src="/images/cotton-candy.png"
          alt="Cotton candy sticker"
          style={styles.cottonCandy}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.stripGroup}
          whileHover={{ rotate: 6, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/orange-clip.png"
            alt="Orange clip"
            style={styles.orangeClip}
          />

          <img
            src="/images/photo-strip.jpg"
            alt="Photo strip with friend"
            style={styles.photoStrip}
          />
        </motion.div>

        <a
          href="https://www.linkedin.com/in/hannah-lee1107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src="/images/linkedin.png"
            alt="LinkedIn bottle cap"
            style={styles.linkedin}
            whileHover={{ rotate: -5, scale: 1.4, zIndex: 50, y: -4, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </a>

        <a
          href="https://github.com/hannahlee4786"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src="/images/github.png"
            alt="Github bottle cap"
            style={styles.github}
            whileHover={{ rotate: 5, scale: 1.4, zIndex: 50, y: -4, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </a>

        <a href="mailto:hlee4786@usc.edu">
          <motion.img
            src="/images/gmail.png"
            alt="Gmail bottle cap"
            style={styles.gmail}
            whileHover={{ rotate: -5, scale: 1.4, zIndex: 50, y: -4, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </a>
      </div>

      <div style={styles.footerContainer}>
        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} Hannah Lee</p>
        </footer>
      </div>
    </div>
  );
}