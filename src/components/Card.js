function Card({ card, onCardClick, showBin, onBinClick }) {
  return (
    <div className="element">
      <button
        className={`element__bin ${showBin ? `element__bin_visible` : ``}`}
        type="button"
        onClick={() => onBinClick(card)}
      ></button>
      <img onClick={() => onCardClick(card)} className="element__image" src={card.link} alt={card.name} />
      <div className="element__info">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__likes">
          <button className="element__heart" type="button" id="likebutton"></button>
          <span className="element__like-count">{(card.likes || []).length}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;