import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onBinClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userId, setUserId] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getMe()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setUserId(userInfo._id);
      })
  }, []);

  useEffect(() => {
    api.getCards()
      .then((cards) => {
        setCards(cards);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img src={userAvatar} className="profile__avatar" alt="Аватар" />
          <button type="button" onClick={onEditAvatar} className="profile__avatar-edit-button"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__user-name">{userName}</h1>
          <p className="profile__user-about">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            showBin={card.owner === userId}
            onCardClick={onCardClick}
            onBinClick={onBinClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main