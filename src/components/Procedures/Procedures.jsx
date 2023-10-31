import "./Procedures.css";
import narda from "/narda.avif";
import sahid from "/sahid.avif";
import hans from "/hans.avif";
import bata from "/bata.avif";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Procedures() {
  // Framer Motion //
  const cardAnimation = {
    start: { opacity: 0, x: 100, y: -100 },
    end: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="procedures">
      <h2 className="procedures__tittle">Choose your Doctor</h2>
      <motion.div
        className="cards__container"
        variants={cardAnimation}
        initial="start"
        animate="end"
      >
        <NavLink className="card__link" to="/bariatric">
          <motion.div
            className="card"
            variants={cardAnimation}
            whileHover={{ scale: 1.02 }}
          >
            <img className="card__img" src={narda} />
            <h3 className="speciality__tittle">Bariatric</h3>
            <span className="doctor__name">Dr. Narda Carrera</span>
            <p className="card__p">
              Specialist in the treatment and management of obesity. Helps
              patients achieve and maintain a healthy weight through medical,
              dietary and surgical approaches.
            </p>
          </motion.div>
        </NavLink>
        <NavLink className="card__link" to="/otolaryngologist">
          <motion.div
            className="card"
            variants={cardAnimation}
            whileHover={{ scale: 1.02 }}
          >
            <img className="card__img" src={sahid} />
            <h3 className="speciality__tittle">Otolaryngologist</h3>
            <span className="doctor__name">Dr. Sahid Singh</span>
            <p className="card__p">
              Specialist in disorders of the ear, nose, throat and related areas
              of the head and neck. Diagnoses and treats conditions such as
              hearing loss, sinusitis, tonsillitis, and voice problems.
            </p>
          </motion.div>
        </NavLink>
        <NavLink className="card__link" to="/plasticsurgery">
          <motion.div
            className="card"
            variants={cardAnimation}
            whileHover={{ scale: 1.02 }}
          >
            <img className="card__img--bata" src={bata} />
            <h3 className="speciality__tittle">Plastic Surgery</h3>
            <span className="doctor__name">Dr.</span>
            <p className="card__p">
              Improves the aesthetic appearance of patients through
              reconstructive or aesthetic surgeries. Performs procedures to
              modify facial and body structures, providing aesthetic and natural
              results.
            </p>
          </motion.div>
        </NavLink>
        <NavLink className="card__link" to="/traumatology">
          <motion.div
            className="card"
            variants={cardAnimation}
            whileHover={{ scale: 1.02 }}
          >
            <img className="card__img" src={hans} />
            <h3 className="speciality__tittle">Traumatology</h3>
            <span className="doctor__name">Dr. Hans Ruiz</span>
            <p className="card__p">
              Injuries and disorders of the musculoskeletal system. Diagnosis,
              treatment and rehabilitation of injuries such as fractures,
              sprains, dislocations and bone and joint problems.
            </p>
          </motion.div>
        </NavLink>
      </motion.div>
    </div>
  );
}

export default Procedures;
