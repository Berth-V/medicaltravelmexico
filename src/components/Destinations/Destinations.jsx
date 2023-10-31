import './Destinations.css';
import frontpage from '/frontpage.avif';
import ensenada from '/ensenada.avif';
import rosarito from '/rosarito.avif';
import sanDiego from '/sandiego.avif';
import tijuana from '/tijuana.avif';
import losAngeles from '/losangeles.avif';
import beverly from '/beverly.avif';
import bonus2 from '/bonus2.avif';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import {motion} from 'framer-motion';
import {IoLogoWhatsapp, IoIosMail} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
//import travelInfo from '/travelinfo.avif';

function Destinations() {
  //Framer Motion//
  const itemsAnimation={
    start:{opacity:0 ,y:-50},
    end:{
      opacity:1, y:0, delay:0.5,
      transition:{
        staggerChildren:0.2,
        duration:0.6
      }
    }
  }
  const [isEnsenada,setIsEnsenada] = useState(false);
  const [isRosarito,setIsRosarito] = useState(false);
  const [isSandiego,setIsSandiego] = useState(false);
  const [isTijuana,setIsTijuana] = useState(false);
  const [isLa,setIsLa] = useState(false);

  return (
    <div className='destinations'>
      <div className='destination__section1'
        style={{background:`url(${frontpage}) no-repeat var(--frontpage-pos)/var(--frontpage-size) ` }}
      >
        <motion.div className='destination__description'
          initial={{opacity:0, x:300}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5}}
          viewport={{once:true}}
        >
          <h3 className='destination__h3'>
            Come to visit our mexico most touristic places
          </h3>
          <p className='destination__text'>
            Medical Travel Mexico is an organization that facilitates the 
            planning of medical tourism trips to Tijuana, Baja California. 
            It offers support in finding medical specialists and provides 
            essential information for medical procedures. In addition, 
            it provides assistance in booking flights, accommodation and 
            tourist activities, making the travel experience more 
            comfortable and enjoyable.
          </p>
        </motion.div>
      </div>
      <motion.div className='travel__box'
        variants={itemsAnimation}
        initial='start'
        whileInView='end'
        viewport={{amount:0.5, once:true}}
      >
        <motion.div className='box__item'
          variants={itemsAnimation}
          style={{background:`url(${ensenada})  no-repeat right/var(--travel-box-size1)`}}
        >
          <h3 className='item__h3'>Ensenada</h3>
          <span className='know__btn'
            onClick={()=>setIsEnsenada(!isEnsenada)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div className='box__item'
          variants={itemsAnimation}
          style={{background:`url(${rosarito})  no-repeat bottom/var(--travel-box-size1)`}}
        >
          <h3 className='item__h3'>Rosarito</h3>
          <span className='know__btn'
            onClick={()=>setIsRosarito(!isRosarito)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div className='box__item'
          variants={itemsAnimation}
          style={{background:`url(${sanDiego})  no-repeat right/var(--travel-box-size2)`}}
        >
          <h3 className='item__h3'>San Diego</h3>
          <span className='know__btn'
            onClick={()=>setIsSandiego(!isSandiego)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div className='box__item'
          variants={itemsAnimation}
          style={{background:`url(${tijuana})  no-repeat center/var(--travel-box-size1)`}}
        >
          <h3 className='item__h3'>Tijuana</h3>
          <span className='know__btn'
            onClick={()=>setIsTijuana(!isTijuana)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div className='box__item'
          variants={itemsAnimation}
          style={{background:`url(${losAngeles})  no-repeat center/var(--travel-box-size1)`}}
        >
          <h3 className='item__h3'>Los Angeles</h3>
          <span className='know__btn' 
            onClick={()=>setIsLa(!isLa)}
          >
            Read More
          </span>
        </motion.div>
        <motion.div className='box__item'
          variants={itemsAnimation}
          style={{background:`url(${beverly}) no-repeat center/var(--travel-box-size1)`}}
        >
          <h3 className='item__h3'>Beverly Hills & Rodeo Drive</h3>
          <span className='know__btn'>
            L.A Include
          </span>
        </motion.div>
      </motion.div>
      <div className='ensenada__info' 
          style={{display: isEnsenada ? 'flex' : 'none'}}
        >
            <div className='ensenada__info__container'>
              <span className='ensenada__close__btn'
                onClick={()=>setIsEnsenada(!isEnsenada)}
              >
                X
              </span>
              <h2 className='ensenada__info__h2'>Ensenada</h2><br/>
              <p className='ensenada__info__p'>
                "It is the capital of Mexican wine." Surrounded by the Pacific Ocean and the Sea of ​​Cortez, the municipality of Ensenada is the largest in Mexico. Its vast physiography, flora and fauna, both terrestrial and marine, make Ensenada an attractive destination for lovers of nature and outdoor activities.
                It has two National Parks: Constitución de 1857 and Sierra de San Pedro Mártir. In the latter is located the National Astronomical Observatory and the “Picacho del Diablo”, the highest mountain on the peninsula. It also has protected natural areas such as the Valley of the Cirios, the Gulf Islands, the Biosphere of Guadalupe Island, among others.<br/><br/>

                90% of Mexican wine is produced here. It has more than 150 wineries, in addition to landscapes surrounded by nature, in the Valle de Guadalupe you can find an excellent and varied gastronomic offer.
                It is the most visited tourist port in the Pacific, with more than 700 thousand cruise passengers a year.
                Named UNESCO Creative City in 2015 for its gastronomy.
                Sixth World Surfing Reserve.<br/>

                Ensenada is a land full of activities, where you can do: hiking, rappelling, surfing, skydiving, offroading, sport fishing, diving, kayaking, cycling, hot air balloons, among others. It has sea, valleys and forests, everything is perfect for spending time with the family or for practicing extreme sports. Visit the 2nd largest marine geyser in the world or one of the most surprising national parks in Mexico<br/><br/>
                https://www.ensenada.travel/aventura-y-naturaleza/ <br/><br/>

                Options<br/><br/>

                From a boutique hotel in the city center to a bubble hotel in Valle de Guadalupe, Ensenada has it all when it comes to lodging, whether you prefer a modern one or a colonial one, you have several options to choose from.<br/><br/>

                -Attractions<br/>
                -Valle de Guadalupe and its 184 wineries<br/>
                -Pai Pai Ecotourism Park<br/>
                -La bufadora<br/>
                -Parque Bandera<br/>
                -Calle Primera<br/>
                -La lobera<br/>
                -Civic Square<br/>
                -National Astronomical Observatory of the Sierra de San Pedro Mártir<br/>
              </p>
            </div>
      </div>
      <div className='rosarito__info'
        style={{display: isRosarito ? 'flex' : 'none'}}
      >
        <div className='rosarito__info__container'>
          <span className='rosarito__close__btn'
            onClick={()=>setIsRosarito(!isRosarito)}
          >
            X
          </span>
          <h2 className='rosarito__info__h2'>Rosarito</h2><br/>
          <p className='rosarito__info__p'>
            "The sun and beach destination by tradition." The ideal destination for water activities such as surfing and diving. Here you will find some of the best waves in the region and the only artificial reef in the state, in addition to the Metropolitan Convention Center, and the Baja Studios, where some of the most famous films in the history of cinema have been filmed, such as “Titanic.” or “Planet of the Apes” and internationally known series such as “Fear The Walking Dead”. Home of traditional Puerto Nuevo style lobster, served with beans, rice and flour tortillas.
            Thousands of surfers gather on its beaches annually.<br/>
            It has 22 hotels with more than 1,600 rooms available to serve tourists.<br/>
            In the lobster village of Puerto Nuevo, nearly 100,000 lobsters are served a year.<br/>
            Lobster in Puerto Nuevo is one of the authentic dishes of Baja California and Mexico. In addition to the classic flavors of tacos with flank steak and restaurants with traditional Mexican cuisine. They are currently betting on signature cuisine and international fusions.<br/>
            Nights in Rosarito are famous for the great atmosphere near the beach. A must in the summer and spring break season.<br/><br/>

            Live experiences full of adrenaline and adventure in this municipality; most of them related to water sports, hiking and surfing.<br/>
            Due to its location between Tijuana and Ensenada, it is a privileged place where you find unique experiences, inspiring flavors and incredible places facing the sea.<br/>
            The Mediterranean climate is ideal for visiting the city at any time of the year, in addition to having incredible hotels just a few steps from the beach and majestic views of the Pacific Ocean.<br/>
          </p>
        </div>
      </div>
      <div className='sandiego__info'
        style={{display: isSandiego ? 'flex' : 'none'}}
      >
        <div className='sandiego__info__container'>
          <span className='sandiego__close__btn'
            onClick={()=>setIsSandiego(!isSandiego)}
          >
            X
          </span>
          <h2 className='sandiego__info__h2'>San Diego</h2><br/>
          <p className='sandiego__info__p'>
            In case all that sun isn't enough, San Diego is a coastal city with world-class restaurants, beautiful ocean views, neighborhoods steeped in history and culture, and a centrally located urban park. . Whether you're spending a few days enjoying the many beaches and surf breaks, visiting the water attractions SeaWorld San Diego and Mission Bay Aquatic Park, or exploring what the city has to offer inland, San Diego won't disappoint.<br/><br/>
            Perhaps the best place to start is Balboa Park, 485 hectares of pristine emerald green in the heart of the city, home to 17 museums, the largest colony of koalas outside Australia and the largest outdoor instrument in the world. world. To get a sense of the many wonders of this oasis, start your day at the San Diego Zoo. Then, stop for a photo at the stunning Botanical Building, which overlooks a lily pond, and venture to the Timken Museum, which is located next door and is free to enter. Enjoy a leisurely sushi lunch at the Japanese Friendship Garden before strolling to the Spreckels Organ Pavilion (on Sunday afternoons, you can hear the organ's 5,017 pipes come to life). You can also visit one of the various exceptional museums, such as the Fleet Science Center or the Museum of Us (formerly known as the Museum of Man).<br/><br/>
            Explore must-see shops and locations in key neighborhoods, including the Gaslamp Quarter, East Village, North Park, Old Town, and more, and learn how you can leave your car (and parking worries) out of your daily plans thanks to the extensive system trams, light rail, trains, buses and water taxis.<br/>
            When eating in San Diego, seafood, as well as Mexican food (sometimes thrown together, as in the famous fish tacos) often take center stage. From food carts to extremely casual restaurants to top-notch eateries that will be on your bucket list, the city offers dozens of delicious options. When you're craving fresh seafood served dockside, head to Coasterra, Mitch's Seafood, or Royal Rooster. For the best views of La Jolla surfing, along with top-notch California food, reserve a table on the terrace at George’s on the Cove. If you can't stop eating tacos, you can't go wrong in this city; But if you want to try elevated and creative options, head to Sitio (multiple branches) or Lola 55 (downtown). (You can explore more about the taco's origins on the Southern California Taco Tour.)<br/>
            Of course, not every culinary experience San Diego offers is a restaurant. For an overview, head to the annual Latin Food Fest and foodie extravaganza that is Liberty Public Market, a former naval complex now home to 30 premium food and drink vendors. And don't forget to visit nearby La Jolla, the Maritime Museum, San Diego County's many famous craft breweries, and Torrey Pines Gliderport.<br/>
          </p>
        </div>
      </div>
      <div className='tijuana__info'
        style={{display: isTijuana ? 'flex' : 'none'}}
      >
        <div className='tijuana__info__container'>
          <span className='tijuana__close__btn'
            onClick={()=>setIsTijuana(!isTijuana)}
          >
            X
          </span>
          <h2 className='tijuana__info__h2'>Tijuana</h2><br/>
          <p className='tijuana__info__p'>
            Tijuana is a young, innovative and irreverent city. It is the most visited border in the world, its gastronomic, cultural and artistic boom has positioned it as one of the best cities to visit with family, partner or friends.<br/>
            In addition, its strategic location and international quality services make Tijuana the ideal place for Business and Health Tourism.<br/>
            It has a direct air connection to the 32 states of the country and international destinations.<br/>
            Attractions:<br/>
            The spinning top museum<br/>
            Tonalá Cinema<br/>
            Frontier Line<br/>
            Caliente Xolos Stadium in Tijuana<br/>
            Gasmart Toros de Tijuana Stadium<br/>
            Minicity Casino<br/><br/>
            The city has excellent hotels, ideal for making you live an unforgettable experience.<br/>
            The main air gateway to the State is the Tijuana International Airport, B.C. where there is service from the main national airlines to all points of the country. An average of 120 flights are carried out daily, the airport has two runways with lengths of 9 and 12 thousand feet that cover the different needs of commercial flights and
            Another important air gateway for Baja California is the San Diego Airports, Lindebergh Field Airport is located 30 minutes from Tijuana City. It has service from 14 airlines that operate 250 daily flights to the most important points in the United States as well as connections with various international destinations. Brown Field Airport is only 4 minutes from the Otay Mesa border. Most of its flights are private and cargo flights.<br/><br/>

            Options:<br/><br/>

            Transfers from airport to hotel in comfortable units.<br/>
            Lodging.<br/>
            City tour visiting the most emblematic places.<br/>
            Visit to gastronomic groups.<br/>
          </p>
        </div>
      </div>
      <div className='la__info'
        style={{display: isLa ? 'flex' : 'none'}}
      >
        <div className='la__info__container'>
          <span className='la__close__btn'
            onClick={()=>setIsLa(!isLa)}
          >
            X
          </span>
          <h2 className='la__info__h2'>Los Angeles</h2><br/>
          <div className='la__info__text'>
            <p className='la__info__p'>
              Los Angeles is a city that shows you many distinctive faces and neighborhoods, and each one offers something exciting. The city has so much to offer that you will need plenty of time to explore it. If you are looking for glamour, parties and excitement, Los Angeles is the ideal place for you.<br/>
              Popular culture in Los Angeles.<br/>
              Start with Hollywood's historic attractions, such as the Walk of Fame and the TCL Chinese Theatre, before strolling along the stretch of Sunset Boulevard known as The Strip, with its vibrant billboards, restaurants, and restaurants. and famous nightclubs.<br/><br/>

              Music lovers will feel at home at the L.A. complex. Live, located downtown, home to the Grammy Museum, which features exhibits and memorabilia that trace Los Angeles' important role in popular music. Families won't want to miss Universal Studios Hollywood and its exciting theme parks, movie attractions like The Wizarding World of Harry Potter™, and the famous Studio Tour.<br/><br/>

              Coastal cities.<br/>
              Everyone in Los Angeles has a favorite beach, and each beach has its own vibe, from famous Malibu to lively Manhattan Beach.<br/><br/>

              Santa Monica has an area of 5.6 kilometers of sand and is famous worldwide for its pier. The pier with its amusement park, arcade and aquarium  is a short walk from Santa Monica's Third Street Promenade, an open-air shopping center that offers shopping options in a festive setting.<br/><br/>

              Venice Beach, which is located next door, is just as charming, but at the same time, it is totally different. The beach is spacious and the streets offer an extravagant mix of people, ideal for a film set.<br/><br/>

              Beverly Hills and Rodeo Drive<br/>
              Synonymous with high fashion shopping and world-class dining, in Beverly Hills you can visit and window shop one-name stores such as Chanel, Dior, Gucci, Lanvin, Tiffany's and Valentino.<br/><br/>

              This is also a place for people-watching: grab a latte outside the cafes on the palm-lined sidewalks and watch the luxury cars drive by, or see if you can spot one of the many under-the-radar celebrities who reside here like ordinary people.<br/>
            </p>
            <p className='la__info__p2'>
              Cultural institutions:<br/><br/>
              Another wonderful place for stargazing and panoramic views of the city – is the Griffith Observatory, which sits on a hill in Griffith Park, northwest of the city center. This is just one of the city's many must-see stops for culture fans.<br/>

              There's also the Getty Center, with its striking architecture and welcoming museums filled with popular permanent and temporary art exhibits. The Los Angeles County Museum of Art features more than 120,000 works representing ancient and modern culture. Nearby, you can complement your museum visit at the Craft & Folk Art Museum, the Page Museum (home to the La Brea Tar Pits), the Architecture & Design Museum (Museum of Design and Architecture) and the Petersen Automotive Museum (Petersen Automobile Museum).<br/><br/>
            </p>
          </div>
        </div>
      </div>
      <div className='travel__bonus'>
        <div className='travel__bonus__container'>
          <h2 className='travel__bonus__h2'>Benefits of Medical Tourism<br/></h2>
          <p className='travel__bonus__p'>
            -Affordability and Cost-Effectiveness<br/>
            -Immediate Service<br/>
            -Ease of Programming<br/>
            -Opportunity to Travel<br/><br/>
            
            Medical tourism is an attractive option for those seeking quality medical 
            care at lower prices. It offers significant savings, often between 30% and 
            80%, compared to costs in developed countries. Additionally, it provides 
            immediate access to medical services, the convenience of scheduling 
            appointments online, and the opportunity to combine healthcare with 
            travel. Procedures are performed by highly trained professionals, 
            and lower administration and insurance costs contribute to lower prices 
            in medical tourism destinations.<br/>
          </p>
        </div>
        <div className='travel__img__container'>
          <motion.img className='travel__img' src={bonus2}
            initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:1}}
            transition={{duration:0.5}}
          />
        </div>
      </div>
      <div className='travel__contact'>
        <h2 className='travel__contact__h2'>Contact Us</h2>
        <div className='travel__contact__container'>
            <a className='travel__contact__item'
              href='mailto:travelmedicalmx@gmail.com'
              target='_blank'
            >
              <IoIosMail className='travel__contact__icon'/>
              <span className='travel__contact__span'>
                E-Mail
              </span>
            </a>
            <a className='travel__contact__item'
              href='https://wa.me/526981032939'
              target='_blank'
            >
              <IoLogoWhatsapp className='travel__contact__icon'/>
              <span className='travel__contact__span'>
                WhatsApp
              </span>
            </a>
            <a className='travel__contact__item'
              href='https://www.instagram.com/medical.travel.mx/'
              target='_blank'
            >
              <AiFillInstagram className='travel__contact__icon'/>
              <span className='travel__contact__span'>
                Instagram
              </span>
            </a>
        </div>
      </div>
      {/*<div className='travel__information'
        style={{background:`url(${travelInfo}) no-repeat center/var(--travel-info-size)`}}
      >
        <div className='info__box'>
          <div className='info__item'>
            <h3 className='info__h3'>How to reserve</h3>
            <hr className='info__hr'/>
            <p className='info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!</p>
            <NavLink className='readmore__btn'>
              <span className='readmore__span'>Read More</span>
            </NavLink>
          </div>
          <div className='info__item'>
            <h3 className='info__h3'>Hotel information</h3>
            <hr className='info__hr'/>
            <p className='info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!</p>
            <NavLink className='readmore__btn'>
              <span className='readmore__span'>Read More</span>
            </NavLink>
          </div>
          <div className='info__item'>
            <h3 className='info__h3'>Services</h3>
            <hr className='info__hr'/>
            <p className='info__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem!</p>
            <NavLink className='readmore__btn'>
              <span className='readmore__span'>Read More</span>
            </NavLink>
          </div>
        </div>
      </div>*/}
    </div>
  )   
}

export default Destinations;