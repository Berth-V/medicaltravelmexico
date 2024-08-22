//Destinations Descriptions
import {ensenadaText} from './Texts/ensenadaText';
import {rosaritoText} from './Texts/rosaritoText';
import {sandiegoText} from './Texts/sandiegoText';
import {tijuanaText} from './Texts/tijuanaText';
import {laText} from './Texts/laText';
//Imgs
import ensenada from '/ensenada.avif';
import rosarito from '/rosarito.avif';
import sanDiego from '/sandiego.avif';
import losAngeles from '/losangeles.avif';
import tijuana from '/tijuana.avif';
import beverly from '/beverly.avif';

export const citys = [
  {
    name: 'Ensenada',
    classname: 'ensenada',
    img: ensenada,
    btnText: 'Read More',
    destInfo: ensenadaText,
  },
  {
    name: 'Rosarito',
    classname: 'rosarito',
    img: rosarito,
    btnText: 'Read More',
    destInfo: rosaritoText,
  },
  {
    name: 'San Diego',
    classname: 'sandiego',
    img: sanDiego,
    btnText: 'Read More',
    destInfo: sandiegoText,
  },
  {
    name: 'Tijuana',
    classname: 'tijuana',
    img: tijuana,
    btnText: 'Read More',
    destInfo: tijuanaText,
  },
  {
    name: 'Los Angeles',
    classname: 'la',
    img: losAngeles,
    btnText: 'Read More',
    destInfo: laText,
  },
  {
    name: 'Beverly Hills & Rodeo Drive',
    classname: 'none',
    img: beverly,
    btnText: 'L.A Include',
    destInfo: 'none',
  },
];
