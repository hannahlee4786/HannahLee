const styles = {
  main: {
    width: "fit-content",
    margin: "0 auto",
  },

  mainHeader: {
    height: 180,
    marginTop: 40,
    marginBottom: 50,
    position: "relative" as const,
    left: -44,
    // backgroundColor: "aliceblue"
  },

  polaroidContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
    // backgroundColor: "pink"
  },

  polaroid: {
    position: "relative" as const,
    backgroundColor: "white",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "inline-block",
    borderRadius: 2,
  },

  polaroid1: {
    transform: "rotate(-12deg)",
  },
  
  ribbon: {
    position: "absolute" as const,
    top: -24,
    left: -36,
    width: 130,
    zIndex: 10,
    transform: "rotate(-18deg)",
  },
  
  picture: {
    width: "180px",
    display: "block",
  },

  introContainer: {
    position: "relative" as const,
    display: "inline-block",
    marginLeft: 30,
    marginBottom: 30
  },
  
  introPaper: {
    width: 700,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
    transform: "rotate(5deg)",
  },

  introText: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 116,
    left: 68,
    width: 570,
    marginTop: 30,
    transform: "rotate(5deg)",
  },
  
  introHeading: {
    margin: 0,
    marginBottom: 16,
    fontSize: "2rem",
  },
  
  introParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.1rem",
  },
  
  star: {
    position: "absolute" as const,
    bottom: -25,
    right: -25,
    width: 120,
    zIndex: 10,
    transform: "rotate(-14deg)",
  },

  heartContainer: {
    position: "relative" as const,
    width: 600,
    height: 700,
    // backgroundColor: "white"
  },

  heart: {
    position: "absolute" as const,
    top: 30,
    left: -130,
    width: 600,
    transform: "rotate(-14deg)",
  },
  
  moreText: {
    position: "absolute" as const,
    top: 198,
    left: -10,
    width: 340,
    transform: "rotate(-14deg)",
    fontFamily: "Special Elite",
    textAlign: 'center' as const,
  },

  moreParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1rem",
    color: "white"
  },

  polaroid2: {
    right: -500,
    top: 36,
    transform: "rotate(10deg)",
  },

  polaroid3: {
    right: -540,
    top: 150,
    transform: "rotate(-10deg)",
  },

  matcha: {
    position: "absolute" as const,
    top: -80,
    left: -140,
    width: 130,
    zIndex: 10,
    transform: "rotate(-4deg)",
  },

  polaroid4: {
    right: -600,
    top: 60,
    transform: "rotate(-3deg)",
  },

  experienceContainer: {
    position: "relative" as const,
    width: 600,
    height: 700,
    marginTop: 30
  },

  paper1Container: {
    position: "relative" as const,
    marginTop: 30,
    left: -100,
    top: 60
  }, 

  paper1: {
    width: 894,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
    transform: "rotate(-3deg)",
  },

  paper1Text: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 98,
    left: 46,
    width: 820,
    marginTop: 30,
    transform: "rotate(-3deg)",
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.05rem",
  },

  illoominate: {
    position: "absolute" as const,
    top: -170,
    left: -90,
    width: 300,
    zIndex: 10,
    transform: "rotate(-8deg)",
  },

  aws: {
    position: "absolute" as const,
    top: 220,
    right: -330,
    width: 130,
    zIndex: 10,
    transform: "rotate(-3deg)",
  },

  typescript: {
    position: "absolute" as const,
    top: 240,
    right: -220,
    width: 130,
    zIndex: 10,
    transform: "rotate(5deg)",
  }
};

export default styles;