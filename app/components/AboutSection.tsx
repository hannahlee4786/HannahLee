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
            src="/images/aboutMe/h1.png"
            alt="Letter H"
            style={styles.letterH1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/a1.png"
            alt="Letter a"
            style={styles.letterA1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/n1.png"
            alt="Letter n"
            style={styles.letterN1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/n2.png"
            alt="Letter n"
            style={styles.letterN2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/a2.png"
            alt="Letter a"
            style={styles.letterA2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/h2.png"
            alt="Letter h"
            style={styles.letterH2}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/l1.png"
            alt="Letter L"
            style={styles.letterL1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/e1.png"
            alt="Letter e"
            style={styles.letterE1}
            whileHover={{ scale: 1.4, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />

          <motion.img
            src="/images/aboutMe/e2.png"
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
          style={{ ...styles.polaroid, transformOrigin: "center center" }}
          whileHover={{ scale: 1.05, rotate: -4, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <img
            src="/images/aboutMe/pink-ribbon.png"
            alt="Pink ribbon"
            style={styles.ribbon}
          />

          <img
            src="/images/aboutMe/headshot.jpg"
            alt="Hannah Lee"
            style={styles.picture}
          />

          <h3 style={styles.h31}>meee!</h3>
        </motion.div>

        <motion.img
          src="/images/aboutMe/heart.png"
          alt="Red heart with lace"
          style={styles.heart}
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <div style={styles.introContainer}>
          <motion.div
            style={styles.introGroup}
            whileHover={{ rotate: 3, scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img
              src="/images/aboutMe/beige-paper.png"
              alt="Background paper for introduction"
              style={styles.introPaper}
            />

            <div style={styles.introText}>
              <p style={styles.introParagraph}>
                Hi! I'm Hannah Lee, an undergraduate at the University of Southern California studying Computer Science with a minor in Psychology. Ever since I was young, I've loved solving problems whether through math or spending hours figuring out Rubik's Cubes. That curiosity eventually led me to computer science in junior year of high school, where experiences like AP Computer Science A and Columbia University's Pre-College Program introduced me to the world of coding. Since then, I've continued exploring software development through coursework, projects, and experience. 
              </p>
            </div>

            <img
              src="/images/aboutMe/pink-tape.png"
              alt="Pink picnic blanket pattern tape"
              style={styles.pinkTape}
            />
          </motion.div>

          <motion.div
            style={styles.oceanGroup}
            whileHover={{ scale: 1.05, rotate: -4, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <img
              src="/images/aboutMe/ocean.JPG"
              alt="Hannah with the ocean view"
              style={styles.ocean}
            />

            <h3 style={styles.h36}>@rockaway beach</h3>
          </motion.div>

          <motion.img
            src="/images/aboutMe/sushi.png"
            alt="Bowl of sushi"
            style={styles.sushi}
            whileHover={{ rotate: 4, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/aboutMe/balloon.png"
            alt="Flower balloon"
            style={styles.balloon}
            whileHover={{ rotate: -4, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/aboutMe/usc-logo.png"
            alt="USC felt logo"
            style={styles.usc}
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/aboutMe/blue-flower.png"
            alt="Blue flower"
            style={styles.flower}
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/aboutMe/green-star.png"
            alt="Green star"
            style={styles.star}
            initial={{ rotate: -14 }}
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/aboutMe/rubiks-cube.png"
            alt="Rubik's Cube stamp"
            style={styles.rubiksCube}
            // initial={{rotate: 18}}
            whileHover={{ rotate: -10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
        </div>
      </div>

      {/* Continue */}
      <div style={styles.continueContainer}>
        <motion.div
          style={styles.moreGroup}
          whileHover={{ rotate: -4, scale: 1.03, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/aboutMe/continue-paper.png"
            alt="Binder paper for more info"
            style={styles.continuePaper}
          />

          <div style={styles.continueText}>
            <p style={styles.continueParagraph}>
              Alongside Computer Science, I chose to minor in Psychology because I want to better understand how people think, behave, and interact with the world around them. I believe that understanding the human experience is essential to creating technology that is intuitive, meaningful, and genuinely improves people's lives.
            </p>
          </div>
        </motion.div>

        <motion.img
          src="/images/aboutMe/warriors-wax.png"
          alt="Golden state warriors wax stamp"
          style={styles.warriors}
          initial={{ rotate: 14 }}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/aboutMe/record.png"
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
      </div>

      {/* Fun Section */}
      <div style={styles.moreContainer}>
        <motion.img
          src="/images/aboutMe/blue-flower-2.png"
          alt="Blue flower patch with green center"
          style={styles.flower2}
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/aboutMe/music-receipt.png"
          alt="Receipt with favorites songs"
          style={styles.receipt}
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.div
          style={styles.moreGroup}
          whileHover={{ rotate: -4, scale: 1.03, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/aboutMe/binder-paper.png"
            alt="Binder paper for more info"
            style={styles.morePaper}
          />

          <img
            src="/images/aboutMe/purple-tape.png"
            alt="Purple tape"
            style={styles.purpleTape}
          />

          <div style={styles.moreText}>
            <p style={styles.moreParagraph}>
              Outside of academics and tech, I'm a Bay Area native who enjoys discovering new cafés and visiting art museums like SFMOMA and the Legion of Honor. My mom introduced me to art from a young age, and that appreciation for creativity and design has stayed with me ever since.
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
              src="/images/aboutMe/moma2.jpg"
              alt="Hannah at SFMOMA"
              style={styles.picture}
            />
            <h3 style={styles.h32}>@SFMOMA</h3>
          </motion.div>

          <motion.img
            src="/images/aboutMe/mango.png"
            alt="Mango sticker"
            style={styles.mango}
            initial={{rotate: 18}}
            whileHover={{ rotate: -10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.img
            src="/images/aboutMe/sonny-angels.png"
            alt="2 Sonny Angels"
            style={styles.sonnyAngels}
            whileHover={{ rotate: 4, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />

          <motion.div
            style={{ ...styles.polaroid, ...styles.polaroid3 }}
            whileHover={{ rotate: -5, scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img
              src="/images/aboutMe/mango-shaved-ice.png"
              alt="Mango shaved ice with Jellycats"
              style={styles.picture}
            />
            <h3 style={styles.h33}>mangooo</h3>
          </motion.div>

          <motion.img
            src="/images/aboutMe/matcha.png"
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
              src="/images/aboutMe/baby.jpg"
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
            src="/images/aboutMe/pink-paper.png"
            alt="Background paper for ending paragraph"
            style={styles.lastPaper}
          />

          <div style={styles.lastText}>
            <p style={styles.lastParagraph}>
              {"Thanks for stopping by! Feel free to connect with me below :)"}
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ ...styles.polaroid, ...styles.polaroid5 }}
          whileHover={{ rotate: -5, scale: 1.05, y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img
            src="/images/aboutMe/fair.jpg"
            alt="Picture at the fair"
            style={styles.picture}
          />
          <h3 style={styles.h35}>@alameda fair</h3>
        </motion.div>

        <motion.img
          src="/images/aboutMe/cotton-candy.png"
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
            src="/images/aboutMe/orange-clip.png"
            alt="Orange clip"
            style={styles.orangeClip}
          />

          <img
            src="/images/aboutMe/photo-strip.jpg"
            alt="Photo strip with friend"
            style={styles.photoStrip}
          />
        </motion.div>

        <motion.img
          src="/images/aboutMe/baby2.png"
          alt="Hannah as a baby"
          style={styles.baby}
          whileHover={{ rotate: 4, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <motion.img
          src="/images/aboutMe/resume.png"
          alt="I love resume stamp"
          style={styles.resume}
          whileHover={{ rotate: 8, scale: 1.08, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />

        <a
          href="https://www.linkedin.com/in/hannah-lee1107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src="/images/aboutMe/linkedin.png"
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
            src="/images/aboutMe/github.png"
            alt="Github bottle cap"
            style={styles.github}
            whileHover={{ rotate: 5, scale: 1.4, zIndex: 50, y: -4, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </a>

        <a href="mailto:hlee4786@usc.edu">
          <motion.img
            src="/images/aboutMe/gmail.png"
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