const styles = {
  main: {
    width: "fit-content",
    margin: "0 auto",
  },

  mainHeader: {
    height: 220,
    marginTop: 40,
    marginBottom: 40,
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
    transform: "rotate(-3deg)",
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
    width: 600,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
    transform: "rotate(5deg)",
  },

  introText: {
    position: "absolute" as const,
    fontFamily: "Cormorant, serif",
    top: 90,
    left: 70,
    width: 480,
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
    left: 80,
    width: 600,
    transform: "rotate(-14deg)",
  },
  
  moreText: {
    position: "absolute" as const,
    top: 210,
    left: 190,
    width: 360,
    transform: "rotate(-14deg)",
    fontFamily: "Cormorant, serif",
    textAlign: 'center' as const,
  },

  moreParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.1rem",
    color: "white"
  },

  polaroid2: {
    right: -1000,
    top: 36,
    transform: "rotate(-6deg)",
  },

  polaroid3: {
    right: -510,
    top: 150,
    transform: "rotate(10deg)",
  },

  matcha: {
    position: "absolute" as const,
    top: -10,
    left: -340,
    width: 130,
    zIndex: 10,
    transform: "rotate(-4deg)",
  },

  polaroid4: {
    right: -1200,
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
    left: 100,
    top: 120
  }, 

  paper1: {
    width: 894,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
    transform: "rotate(-3deg)",
  },

  paper1Text: {
    position: "absolute" as const,
    fontFamily: "Cormorant, serif",
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