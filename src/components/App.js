import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import BinPopup from './BinPopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isBinPopupOpen, setIsBinPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [removeCard, setRemoveCard] = useState(null);

  // delete card 
  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setRemoveCard(card);
        setCards((newArray) => newArray.filter((item) => card._id !== item._id));
        closeAllPopups();
      })
      .catch()
  }


  // add & delete like on card
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked) {
      api.dislike(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    } else {
      api.like(card._id).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
    }
  }
  useEffect(() => {
    api.getMe()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch()
  }, []);

  useEffect(() => {
    api.getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch()
  }, []);

  // profile popup
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser(data) {
    api.setMe(data)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch()
  }

  // new card popup
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlaceSubmit(data) {
    api.createCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch()
  }

  // avatar profile
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleUpdateAvatar(avatar) {
    api.setAvatar(avatar)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch()
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsBinPopupOpen(false);
    setSelectedCard(null);
  }

  function handleBinPopupClick(card) {
    setIsBinPopupOpen(true);
    setRemoveCard(card);
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onBinClick={handleBinPopupClick}
          cards={cards}
          onCardLike={handleCardLike}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleAddPlaceSubmit}
        />

        <BinPopup
          isOpen={isBinPopupOpen}
          onClose={closeAllPopups}
          onRemoveCard={handleCardDelete}
          card={removeCard}
        />

        <ImagePopup
          isOpen={selectedCard}
          onClose={closeAllPopups}
          card={selectedCard}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
