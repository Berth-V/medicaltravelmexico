import intestine1 from '/intestine1.avif';
import intestine2 from '/intestine2.avif';
import estomach1 from '/stomach1.avif';
import estomach2 from '/stomach2.avif';
import hernia1 from '/hernia1.avif';
import hernia2 from '/hernia2.avif';

function BariatricSec3() {
  return (
    <div className='bariatric__section3'>
      <div className='bariatric__approaches'>
        <div className='bariatric__approaches__item'>
          <img className='bariatric__approaches__img' src={intestine1} />
        </div>
        <div className='bariatric__approaches__item'>
          <h2 className='bariatric__approaches__tittle'>
            SMALL AND LARGE INTESTINE
          </h2>
          <p className='bariatric__approaches__p'>
            Acute Abdomen, Intestinal Obstruction, irritable Bowel Syndrome
          </p>
        </div>
        <div className='bariatric__approaches__item'>
          <img className='bariatric__approaches__img' src={intestine2} />
        </div>
        <div className='bariatric__approaches__item'>
          <img className='bariatric__approaches__img' src={estomach1} />
        </div>
        <div className='bariatric__approaches__item'>
          <h2 className='bariatric__approaches__tittle'>STOMACH</h2>
          <p className='bariatric__approaches__p'>Reflux Esophagitis</p>
        </div>
        <div className='bariatric__approaches__item'>
          <img className='bariatric__approaches__img' src={estomach2} />
        </div>
        <div className='bariatric__approaches__item'>
          <img className='bariatric__approaches__img' src={hernia1} />
        </div>
        <div className='bariatric__approaches__item'>
          <h2 className='bariatric__approaches__tittle'>HERNIAS</h2>
          <p className='bariatric__approaches__p'>Inguinal, Umbilical</p>
        </div>
        <div className='bariatric__approaches__item'>
          <img className='bariatric__approaches__img' src={hernia2} />
        </div>
      </div>
    </div>
  );
}

export default BariatricSec3;
