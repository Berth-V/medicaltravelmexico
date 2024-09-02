import './Destinations.css';
import FrontPage from './Sections/FrontPage';
import TravelBox from './Sections/TravelBox';
import Benefits from './Benefits';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';

function Destinations() {
  return (
    <div className='destinations'>
      {/* Section 1 */}
      <FrontPage />
      {/* Section 2 */}
      <TravelBox />
      {/* Section 3 */}
      <Benefits />
      {/* Contact Section */}
      <div className='destinations__contact'>
        <h2 className='destinations__contact__h2'>Contact Us</h2>
        <div className='destinations__contact__container'>
          <a
            className='destinations__contact__item'
            href='mailto:travelmedicalmx@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <IoIosMail className='destinations__contact__icon' />
            <span className='destinations__contact__span'>E-Mail</span>
          </a>
          <a
            className='destinations__contact__item'
            href='https://wa.me/526981032939'
            target='_blank'
            rel='noreferrer'
          >
            <IoLogoWhatsapp className='destinations__contact__icon' />
            <span className='destinations__contact__span'>WhatsApp</span>
          </a>
          <a
            className='destinations__contact__item'
            href='https://www.instagram.com/medical.travel.mx/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram className='destinations__contact__icon' />
            <span className='destinations__contact__span'>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
