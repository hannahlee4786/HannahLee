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

  usc: {
    zIndex: 30,
    position: "absolute" as const,
    top: -50,
    left: -30,
    width: 160,
  },

  flower: {
    zIndex: 30,
    position: "absolute" as const,
    top: 50,
    left: 590,
    width: 160,
  }, 

  flower2: {
    zIndex: 30,
    position: "absolute" as const,
    top: 150,
    left: -160,
    width: 160,
  }, 

  receipt: {
    position: "absolute" as const,
    left: -90,
    top: 240,
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
    marginBottom: 30
  },

  introGroup: {
    position: "relative" as const,
    display: "inline-block",
    transformOrigin: "center center",
  },
  
  introPaper: {
    width: 700,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  introText: {
    position: "absolute" as const,
    fontFamily: "Special Elite",
    top: 76,
    left: 76,
    width: 560,
    marginTop: 30,
    textAlign: "center" as const,
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
    bottom: -10,
    right: 50,
    width: 120,
    zIndex: 10,
    transform: "rotate(-14deg)",
  },

  warriors: {
    position: "absolute" as const,
    bottom: -115,
    left: 90,
    width: 250,
    zIndex: 10,
    transform: "rotate(-14deg)",
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

  moreContainer: {
    position: "relative" as const,
    height: 700,
    // backgroundColor: "white"
  },

  moreGroup: {
    position: "absolute" as const,
    top: 70,
    left: 126,
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
    top: 76,
    left: 94,
    width: 240,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
  },

  moreParagraph: {
    margin: 0,
    lineHeight: 2.35,
    fontSize: "1.1rem",
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
    bottom: -70,
    left: 360,
    zIndex: 10,
    transform: "rotate(-18deg)",
  },

  lastContainer: {
    position: "relative" as const,
    height: 400,
  },

  lastGroup: {
    position: "absolute" as const,
    top: 44,
    right: -120,
    width: 600,
    height: 260,
    cursor: "pointer",
  },

  lastPaper: {
    width: 600,
    display: "block",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },

  lastText: {
    position: "absolute" as const,
    top: 96,
    right: 170,
    width: 250,
    fontFamily: "Special Elite",
    textAlign: "center" as const,
  },

  lastParagraph: {
    margin: 0,
    lineHeight: 2.15,
    fontSize: "1.5rem",
    color: "black"
  },

  polaroid5: {
    position: "absolute" as const,
    top: 60,
    left: -50
  },

  stripGroup: {
    position: "absolute" as const,
    top: -124,
    left: 200,
    width: 260,
    height: 220,
    cursor: "pointer",
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

  bottleCap: {
    position: "absolute" as const,
    top: 110,
    left: -100,
    width: 120,
    zIndex: 10,
  },
};

export default styles;