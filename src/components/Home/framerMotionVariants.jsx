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

export const whyComeAnimation = {
  start: {y: -100, opacity: 0},
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const airplaneAnimations = {
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

export const travelingAnimations = {
  start: {opacity: 0},
  end: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};
