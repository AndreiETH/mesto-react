import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isBinPopupOpen, setIsBinPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
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
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onBinClick={handleBinPopupClick}
      />
      <Footer />

      <PopupWithForm
        name='edit-popup'
        isOpen={isEditProfilePopupOpen}
        title='Редактировать профиль'
        onClose={closeAllPopups}
        saveText='Сохранить'
      >
        <input
          required
          minLength="2"
          maxLength="40"
          className="popup__popup-form popup__popup-form_text_name"
          id="form-name"
          name="name"
          type="text"
          placeholder="Имя" />
        <span className="popup__error" id="form-name-error"></span>
        <input
          required
          minLength="2"
          maxLength="200"
          className="popup__popup-form popup__popup-form_text_job"
          id="form-job"
          name="about"
          type="text"
          placeholder="О себе" />
        <span className="popup__error" id="form-job-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='add-popup'
        isOpen={isAddPlacePopupOpen}
        title='Новое место'
        onClose={closeAllPopups}
        saveText='Создать'
      >
        <input
          required
          minLength="2"
          maxLength="30"
          className="popup__popup-form popup__popup-form_text_place"
          id="form-place"
          name="name"
          type="text"
          placeholder="Название" />
        <span className="popup__error" id="form-place-error"></span>
        <input
          required
          className="popup__popup-form popup__popup-form_text_image"
          id="form-image"
          name="link"
          type="url"
          placeholder="Ссылка на картинку" />
        <span className="popup__error" id="form-image-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name='avatar-popup'
        isOpen={isEditAvatarPopupOpen}
        title='Обновить аватар'
        onClose={closeAllPopups}
        saveText='Сохранить'
      >
        <input
          required
          className="popup__popup-form popup__popup-form_text_image"
          id="form-avatar"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error" id="form-avatar-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name='bin-popup'
        isOpen={isBinPopupOpen}
        title='Вы уверены?'
        onClose={closeAllPopups}
        saveText='Да'
      />

      <ImagePopup
        isOpen={selectedCard}
        onClose={closeAllPopups}
        card={selectedCard}
      />

    </div>
  );
}

export default App;
