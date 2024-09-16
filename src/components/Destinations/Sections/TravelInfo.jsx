import {Fragment} from 'react';

function TravelInfo({infoOpen, setInfoOpen, destInfo}) {
  const {citytittle, cityclassname, citytext} = destInfo;
  // This is for add line breaks to text getted from "destinationsData.jsx" file //
  const textWithLineBreaks =
    citytext &&
    citytext.split('\n').map((line, index) => (
      <Fragment key={index}>
        {line}
        <br />
      </Fragment>
    ));

  return (
    <>
      {infoOpen && (
        <div className={`${cityclassname}__info`}>
          <div className={`${cityclassname}__info__container`}>
            <span
              className={`${cityclassname}__close__btn`}
              onClick={() => setInfoOpen(false)}
            >
              X
            </span>
            <h2 className={`${cityclassname}__info__h2`}>{citytittle}</h2>
            <br />
            <p className={`${cityclassname}__info__p`}>{textWithLineBreaks}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TravelInfo;
