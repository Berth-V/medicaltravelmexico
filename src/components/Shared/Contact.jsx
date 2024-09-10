import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';

function Contact(pathclass) {
  const {newPath} = pathclass;
  // newPath = className of section
  return (
    <div className={`${newPath}__contact`}>
      <h2 className={`${newPath}__contact__h2`}>Contact Us</h2>
      <div className={`${newPath}__contact__container`}>
        <a
          className={`${newPath}__contact__item`}
          href='mailto:travelmedicalmx@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <IoIosMail className={`${newPath}__contact__icon`} />
          <span className={`${newPath}__contact__span`}>E-Mail</span>
        </a>
        <a
          className={`${newPath}__contact__item`}
          href='https://wa.me/526981032939'
          target='_blank'
          rel='noreferrer'
        >
          <IoLogoWhatsapp className={`${newPath}__contact__icon`} />
          <span className={`${newPath}__contact__span`}>WhatsApp</span>
        </a>
        <a
          className={`${newPath}__contact__item`}
          href='https://www.instagram.com/medical.travel.mx/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillInstagram className={`${newPath}__contact__icon`} />
          <span className={`${newPath}__contact__span`}>Instagram</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
