const styles = {
  main: {
    width: "fit-content",
    margin: "0 auto",
  },

  mainHeader: {
    height: 180,
    width: 1000,
    marginTop: 40,
    marginBottom: 50,
    position: "relative" as const,
    left: -48,
    overflow: "visible",
  },

  letterH1: {
    height: 150,
    position: "absolute" as const,
    top: 10,
    left: -10,
  },

  letterA1: {
    height: 150,
    position: "absolute" as const,
    top: 14,
    left: 105,
  },

  letterN1: {
    height: 110,
    position: "absolute" as const,
    top: 30,
    left: 224,
  },

  letterN2: {
    height: 120,
    position: "absolute" as const,
    top: 24,
    left: 304,
  },

  letterA2: {
    height: 110,
    position: "absolute" as const,
    top: 30,
    left: 410,
  },

  letterH2: {
    height: 130,
    position: "absolute" as const,
    top: 22,
    left: 506,
  },

  letterL1: {
    height: 120,
    position: "absolute" as const,
    top: 30,
    left: 650,
  },

  letterE1: {
    height: 110,
    position: "absolute" as const,
    top: 40,
    left: 750,
  },

  letterE2: {
    height: 110,
    position: "absolute" as const,
    top: 40,
    left: 850,
  },

  polaroidContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
  },

  polaroid: {
    position: "relative" as const,
    backgroundColor: "#F0F0F0",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
    display: "inline-block",
    borderRadius: 2,
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

  h31: {
    position: "absolute" as const,
    top: 220,
    left: 60,
    fontFamily: "Sophie Comic",
    fontSize: 40
  },

  h32: {
    position: "absolute" as const,
    top: 240,
    left: 64,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  h33: {
    position: "absolute" as const,
    top: 230,
    left: 70,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  h34: {
    position: "absolute" as const,
    top: 238,
    left: 54,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  h35: {
    position: "absolute" as const,
    top: 230,
    left: 24,
    fontFamily: "Sophie Comic",
    fontSize: 32
  },

  h36: {
    position: "absolute" as const,
    top: 150,
    left: 40,
    fontFamily: "Sophie Comic",
    fontSize: 36
  },

  usc: {
    zIndex: 30,
    position: "absolute" as const,
    top: -60,
    left: -40,
    width: 160,
  },

  flower: {
    zIndex: 30,
    position: "absolute" as const,
    top: 50,
    left: 640,
    width: 160,
  }, 

  flower2: {
    zIndex: 30,
    position: "absolute" as const,
    top: 90,
    left: -160,
    width: 160,
  }, 

  oceanGroup: {
    position: "absolute" as const,
    top: 520,
    left: 180,
    width: 280,
    transformOrigin: "center center",
  },

  ocean: {
    width: 280,
    backgroundColor: "#F0F0F0",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.45)",
    display: "block",
  },

  sonnyAngels: {
    position: "absolute" as const,
    top: 610,
    left: 850,
    width: 100
  },

  sushi: {
    position: "absolute" as const,
    top: 610,
    left: 34,
    width: 120
  },

  balloon: {
    position: "absolute" as const,
    top: 610,
    left: 470,
    width: 120
  },

  receipt: {
    position: "absolute" as const,
    left: -90,
    top: 170,
    height: 480,
    zIndex: 20,
    padding: 8,
    backgroundColor: "#b13c67",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  introContainer: {
    position: "relative" as const,
    display: "inline-block",
    marginLeft: 30,
    marginBottom: 130
  },

  introGroup: {
    position: "relative" as const,
    display: "inline-block",
    transformOrigin: "center center",
  },
  
  introPaper: {
    width: 720,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  introText: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 76,
    left: 120,
    width: 510,
    marginTop: 30,
    textAlign: "center" as const,
  },
  
  introParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.05rem",
  },
  
  star: {
    position: "absolute" as const,
    bottom: -10,
    right: 50,
    width: 120,
    zIndex: 10,
    transform: "rotate(-14deg)",
  },

  warriors: {
    position: "absolute" as const,
    top: 310,
    left: -70,
    width: 250,
    zIndex: 10,
    transform: "rotate(14deg)",
  },

  pinkTape: {
    position: "absolute" as const,
    top: -36,
    left: 200,
    width: 300,
    zIndex: 10,
  },

  heart: {
    zIndex: 20,
    position: "absolute" as const,
    left: 200,
    top: 620,
    width: 430,
  },

  rubiksCube: {
    position: "absolute" as const,
    bottom: -280,
    right: -100,
    width: 230,
    // transform: "rotate(18deg)",
    zIndex: 20
  },

  continueContainer: {
    position: "relative" as const,
    height: 450,
    // backgroundColor: "white"
  },

  continuePaper: {
    position: "absolute" as const,
    left: -200,
    top: 80,
    height: 300,
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  continueText: {
    position: "absolute" as const,
    top: 164,
    left: -120,
    width: 660,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
  },

  continueParagraph: {
    margin: 0,
    lineHeight: 1.8,
    fontSize: "1.1rem",
    color: "black"
  },

  moreContainer: {
    position: "relative" as const,
    height: 700,
    // backgroundColor: "white"
  },

  moreGroup: {
    position: "absolute" as const,
    top: 10,
    left: 130,
    width: 400,
    height: 250,
  },

  purpleTape: {
    position: "absolute" as const,
    top: -10,
    left: 134,
    width: 200,
    zIndex: 10,
  },

  morePaper: {
    width: 400,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },
  
  moreText: {
    position: "absolute" as const,
    top: 56,
    left: 88,
    width: 250,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
  },

  moreParagraph: {
    margin: 0,
    lineHeight: 2.55,
    fontSize: "1rem",
    color: "black"
  },

  polaroidsContainer: {
    position: "relative" as const,
    top: -50,
    left: 40
  }, 

  polaroid2: {
    right: -500,
    top: 36,
  },

  mango: {
    position: "absolute" as const,
    bottom: -290,
    right: -110,
    width: 130,
    transform: "rotate(18deg)",
    zIndex: 20
  },

  polaroid3: {
    right: -540,
    top: 150,
  },

  matcha: {
    position: "absolute" as const,
    top: 298,
    right: 286,
    width: 130,
    zIndex: 20,
  },

  polaroid4: {
    left: 175,
    top: 390,
  },

  record: {
    position: "absolute" as const,
    width: 260,
    bottom: -60,
    left: 650,
    zIndex: 10,
    transform: "rotate(-18deg)",
  },

  lastContainer: {
    position: "relative" as const,
    height: 400,
  },

  lastGroup: {
    position: "absolute" as const,
    top: -20,
    right: -120,
    width: 600,
    height: 260,
  },

  lastPaper: {
    width: 600,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  lastText: {
    position: "absolute" as const,
    top: 76,
    right: 160,
    width: 280,
    fontFamily: "Special Elite",
    textAlign: "right" as const,
  },

  lastParagraph: {
    margin: 0,
    lineHeight: 2.15,
    fontSize: "1.4rem",
    color: "black"
  },

  polaroid5: {
    position: "absolute" as const,
    top: 10,
    left: -30
  },

  stripGroup: {
    position: "absolute" as const,
    top: -160,
    left: 220,
    width: 260,
    height: 220,
  },

  orangeClip: {
    position: "absolute" as const,
    top: -10,
    left: 12,
    width: 120,
    zIndex: 10,
  },

  photoStrip: {
    width: 140,
    position: "absolute" as const,
    top: 54,
  },

  cottonCandy: {
    position: "absolute" as const,
    top: 110,
    left: -110,
    width: 120,
    zIndex: 10,
  },

  baby: {
    position: "absolute" as const,
    top: 20,
    left: 840,
    width: 120,
    zIndex: 10
  },

  resume: {
    position: "absolute" as const,
    top: -230,
    left: 380,
    width: 250,
    zIndex: 10,
  },

  linkedin: {
    position: "absolute" as const,
    bottom: 40,
    right: 330,
    width: 120,
    zIndex: 30,
  },

  github: {
    position: "absolute" as const,
    bottom: 50,
    right: 198,
    width: 120,
    zIndex: 30,
  },

  gmail: {
    position: "absolute" as const,
    bottom: 20,
    right: 70,
    width: 120,
    zIndex: 30,
  },

  footerContainer: {
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    marginTop: 10,
    fontFamily: "Special Elite",
    fontSize: 24,
    color: "#1e0a44",
    fontWeight: "bold",
  },
};

export default styles;