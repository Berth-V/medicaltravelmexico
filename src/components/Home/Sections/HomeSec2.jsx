import bariatric from '/bariatric icon.avif';
import oto from '/oto icon.avif';
import plastic from '/plastic icon.avif';
import trauma from '/trauma icon.avif';
import {motion} from 'framer-motion';
import {proceduresCardsAnimation} from '../framerMotionVariants';

function HomeSec2() {
  return (
    <section className='home__section2'>
      <motion.div
        className='section2__cards__box'
        // Framer Motion Attributes //
        variants={proceduresCardsAnimation}
        initial='start'
        whileInView='end'
        viewport={{once: true, amount: 0.7}}
      >
        <motion.div
          className='section2__card'
          variants={proceduresCardsAnimation}
        >
          <img className='section2__icon' src={bariatric} />
          <h3 className='section2__h3'>BARIATRIC</h3>
          <p className='section2__parraph'>
            Bariatric Surgery is the set of surgical procedures performed with
            the aim of helping you lose weight and improve obesity-related
            diseases. And it is currently the treatment against obesity with the
            best results in weight loss and long-term weight maintenance.
          </p>
        </motion.div>
        <motion.div
          className='section2__card'
          variants={proceduresCardsAnimation}
        >
          <img className='section2__icon' src={trauma} />
          <h3 className='section2__h3'>TRAUMATOLOGY</h3>
          <p className='section2__parraph'>
            Traumatology is used to the study and treatment of traumatic
            injuries that affect the musculoskeletal system, which includes the
            bones, spinal dorsal, joints, ligaments, tendons and muscles, it
            also deals with injuries to the joints, which may include
            dislocations and ligament and cartilage injuries.
          </p>
        </motion.div>
        <motion.div
          className='section2__card'
          variants={proceduresCardsAnimation}
        >
          <img className='section2__icon' src={plastic} />
          <h3 className='section2__h3'>PLASTIC SURGERY</h3>
          <p className='section2__parraph'>
            Plastic Surgery is a medical specialty that, through various
            surgical techniques and also non-surgical procedures, corrects
            functional or anatomical alterations of the body, caused by defects
            -congenital or acquired- and by changes of age or physical texture.
            The foregoing, in order to improve or restore functionality and also
            personal appearance.
          </p>
        </motion.div>
        <motion.div
          className='section2__card'
          variants={proceduresCardsAnimation}
        >
          <img className='section2__icon' src={oto} />
          <h3 className='section2__h3'>OTOLARYNGOLOGIST</h3>
          <p className='section2__parraph'>
            Otorhinolaryngology is the medical specialty that is responsible for
            the prevention, diagnosis and treatment, both medical and surgical,
            of diseases that affect the upper respiratory tract (nasal cavities,
            mouth, pharynx, larynx), the ear and the proximal structures of the
            face and neck.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeSec2;
