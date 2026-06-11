const styles = {
  main: {
    width: "fit-content",
    margin: "0 auto",
  },

  mainHeader: {
    width: 800,
    marginTop: 40,
    marginBottom: 40
  },

  polaroidContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "20px",
  },

  polaroid: {
    position: "relative" as const,
    backgroundColor: "white",
    padding: "16px 16px 50px 16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "inline-block",
    transform: "rotate(-3deg)",
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
  
  headshot: {
    width: "180px",
    display: "block",
  },

  introContainer: {
    position: "relative" as const,
    display: "inline-block",
    marginLeft: 30,
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
    top: 98,
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
};

export default styles;