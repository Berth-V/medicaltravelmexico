function TravelInfo({infoOpen, setInfoOpen, destInfo}) {
  const {citytittle, cityclassname, citytext} = destInfo;
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
            <p className={`${cityclassname}__info__p`}>{citytext}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TravelInfo;
