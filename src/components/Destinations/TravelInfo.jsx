function TravelInfo({destTittle, destName, destText, infoOpen, setInfoOpen}) {
  return (
    <>
      {infoOpen && (
        <div className={`${destName}__info`}>
          <div className={`${destName}__info__container`}>
            <span
              className={`${destName}__close__btn`}
              onClick={() => setInfoOpen(false)}
            >
              X
            </span>
            <h2 className={`${destName}__info__h2`}>{destTittle}</h2>
            <br />
            <p className={`${destName}__info__p`}>{destText}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default TravelInfo;
