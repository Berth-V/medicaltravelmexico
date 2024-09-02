import bonus2 from '/bonus2.avif';
import {motion} from 'framer-motion';

function Benefits() {
    return(
<div className='destinations__section3'>
        <div className='destinations__section3__container'>
          <h2 className='destinations__section3__h2'>
            Benefits of Medical Tourism
            <br />
          </h2>
          <p className='destinations__section3__p'>
            -Affordability and Cost-Effectiveness
            <br />
            -Immediate Service
            <br />
            -Ease of Programming
            <br />
            -Opportunity to Travel
            <br />
            <br />
            Medical tourism is an attractive option for those seeking quality
            medical care at lower prices. It offers significant savings, often
            between 30% and 80%, compared to costs in developed countries.
            Additionally, it provides immediate access to medical services, the
            convenience of scheduling appointments online, and the opportunity
            to combine healthcare with travel. Procedures are performed by
            highly trained professionals, and lower administration and insurance
            costs contribute to lower prices in medical tourism destinations.
            <br />
          </p>
        </div>
        <div className='deestinations__section3__img__container'>
          <motion.img
            className='deestinations__section3__img'
            src={bonus2}
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 1}}
            transition={{duration: 0.5}}
          />
        </div>
      </div>
  );
}

export default Benefits;