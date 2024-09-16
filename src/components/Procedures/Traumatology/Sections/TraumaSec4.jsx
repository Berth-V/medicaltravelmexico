import regMedicine from '/regmedicine.avif';
import {motion} from 'framer-motion';

function TraumaSec4() {
  // Framer Motion Variants //
  const otherAnimation = {
    start: {opacity: 0, x: 50},
    end: {opacity: 1, x: 0, transition: {delay: 0.5, delayChildren: 0.2}},
  };
  return (
    <div
      className='trauma__section4'
      style={{
        background: `url(${regMedicine}) no-repeat bottom/var(--trauma4--backgronund-size) `,
      }}
    >
      <motion.h2
        className='trauma__other__h2'
        // Framer Motion Attributes //
        variants={otherAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      >
        Regenerative Medicine
      </motion.h2>
      <motion.p
        className='trauma__other__p'
        // Framer Motion Attributes //
        variants={otherAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true}}
      >
        Regenerative medicine is a broad field that includes tissue engineering,
        but also incorporates research into self-healing where the body uses its
        own systems, sometimes with the help of foreign biological material, to
        recreate cells and rebuild tissues and organs.
      </motion.p>
    </div>
  );
}

export default TraumaSec4;
