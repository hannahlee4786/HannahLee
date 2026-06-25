import styles from "../styles/experienceStyles";

export default function ExperienceSection() {
  return (
    <div
      style={{
        width: 850,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/experience-header.png"
          alt="Experience bead header"
          style={styles.experienceHeader}
        />
      </div>

      {/* Experience */}
      <div style={styles.experienceContainer}>
        <div style={styles.paper1Container}>
          <img
            src="/images/paper-1.png"
            alt="Background paper for experience 1"
            style={styles.paper1}
          />

          {/* <img
            src="/images/illoominate-stamp.png"
            alt="illoominate stamp"
            style={styles.illoominate}
          /> */}

          <p style={styles.paper1Text}>
            Last fall, I had the opportunity to work as a Software Engineer Intern at{" "}
            <a
              href="https://www.illoominate.net/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "black" }}
            >
              illoominate (Bright-Start Ed Tech)
            </a>
            , where I focused on the backend of a mobile application that helps parents engage with their children through educational activities, lessons, and affirmations. Throughout the internship, I built scalable microservices using TypeScript and AWS, designed APIs that connected backend services with the mobile app, and collaborated closely with a team of engineers to deliver new features and improve system reliability. Working on a product used by real families gave me valuable experience building production-level software and taught me the importance of designing systems that are both reliable and scalable.
          </p>

          <img
            src="/images/typescript-wax.png"
            alt="Typescript wax stamp"
            style={styles.typescript}
          />

          <img
            src="/images/aws-wax.png"
            alt="AWS wax stamp"
            style={styles.aws}
          />
        </div>

        {/* <div style={styles.introContainer}>
          <img
            src="/images/paper-1.png"
            alt="Background paper for introduction"
            style={styles.introPaper}
          />

          <div style={styles.introText}>
            <p style={styles.introParagraph}>
              Hi, I'm Hannah Lee, a current undergraduate at the University of Southern California studying Computer Science and minoring in Psychology! Since elementary school, I've always found myself drawn to math and the way numbers logically piece together with a single solution. Naturally, I picked up Computer Science in my junior year of high school after taking AP Computer Science A, and I decided to pursue a career in the field of software engineering. 
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}