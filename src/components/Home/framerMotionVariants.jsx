//Framer Motion Variants//
export const frontPageAnimations = {
  start: {y: -100, opacity: 0},
  end: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

export const proceduresCardsAnimation = {
  start: {y: -100, opacity: 0},
  end: {
    y: 0,
    opacity: 1,
    rotateY: [0, 360, 0],
    transition: {
      staggerChildren: 0.4,
      duration: 0.6,
    },
  },
};

export const travelAnimations = {
  start: {y: 100, opacity: 0},
  end: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};
