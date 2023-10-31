import '../Footer/Footer.css';
import {NavLink} from 'react-router-dom';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {

  return (
    <div className='footer'>
        <div className='footer__icons__container'>
          <a className='footer__link'
            href='mailto:travelmedicalmx@gmail.com'
            target='_blank'
          >
            <IoIosMail className='footer__icon'/>
          </a>
          <a className='footer__link'
            href='https://wa.me/526981032939'
            target='_blank'
          >
            <IoLogoWhatsapp className='footer__icon'/>
          </a>
          <a className='footer__link'
            href='https://www.instagram.com/medical.travel.mx/'
            target='_blank'
          >
            <AiFillInstagram className='footer__icon'/>
          </a>
      </div>
    </div>
  )
}


export default Footer;