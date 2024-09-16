import hans from '/hans.avif';
import {motion} from 'framer-motion';

function TraumaSec1() {
  //Framer Motion Variants //
  const introductionAnimation = {
    start: {opacity: 0, x: 100},
    end: {
      opacity: 1,
      x: 0,
      transition: {staggerChildren: 0.2},
    },
  };
  return (
    <motion.div
      className='trauma__section1'
      // Framer Motion Attributes //
      variants={introductionAnimation}
      initial='start'
      animate='end'
    >
      <motion.div className='trauma__card' variants={introductionAnimation}>
        <motion.img
          className='trauma__img'
          src={hans}
          // Framer Motion Attributes //
          variants={introductionAnimation}
        />
        <div className='trauma__text'>
          <motion.h2
            className='trauma__procedure'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Traumatology
          </motion.h2>
          <motion.h2
            className='trauma__doctor__name'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Dr. Hans Ruiz
          </motion.h2>
          <motion.p
            className='trauma__description'
            // Framer Motion Attributes //
            variants={introductionAnimation}
          >
            Our surgerys changes lives.
            <br />
            I specialize in pain management of all kinds to give people a better
            quality of life and thus improve their days.
            <br />
            From surgical procedures to relieve spinal pain to prosthetic hip
            and knee replacement.
            <br />
            I also perform non-surgical procedures for pain relief such as the
            application of PRP, hyaluronic acid and radiofrequency pain
            reduction to nerves.
            <br />
            I have 9 years of experience in the field of orthopedics and have
            performed thousands of surgeries with a very low percentage of
            complications.
            <br />
            &quot;You can always get better, you just have to find the right
            doctor.&quot;
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TraumaSec1;
