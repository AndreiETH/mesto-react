import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';



function App() {
const [isEditProfilePopupOpen, setlIsEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

function handleEditProfileClick () {
  setlIsEditProfilePopupOpen(true);
  console.log('hi');
}

function handleAddPlaceClick () {
  setIsAddPlacePopupOpen(true);
}

function handleEditAvatarClick () {
  setIsEditAvatarPopupOpen(true);
}

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
      />
      <Footer />

      <PopupWithForm
        name='edit-popup'
        isOpen={isEditProfilePopupOpen}
        title='Редактировать профиль'
        onClose=''
        saveText='Сохранить'
      >
        <input
          required
          minlength="2"
          maxlength="40"
          className="popup__popup-form popup__popup-form_text_name"
          id="form-name"
          name="name"
          type="text"
          placeholder="Имя" />
        <span className="popup__error" id="form-name-error"></span>
        <input
          required
          minlength="2"
          maxlength="200"
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
        onClose=''
        saveText='Создать'
      >
        <input
          required
          minlength="2"
          maxlength="30"
          className="popup__popup-form popup__popup-form_text_place"
          id="form-place"
          name="name"
          type="text"
          placeholder="Название"
          value="" />
        <span className="popup__error" id="form-place-error"></span>
        <input
          required
          className="popup__popup-form popup__popup-form_text_image"
          id="form-image"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          value="" />
        <span className="popup__error" id="form-image-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name='avatar-popup'
        isOpen={isEditAvatarPopupOpen}
        title='Обновить аватар'
        onClose=''
        saveText='Сохранить'
      >
        <input
          required
          className="popup__popup-form popup__popup-form_text_image"
          id="form-avatar"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          value="" />
        <span className="popup__error" id="form-avatar-error"></span>

      </PopupWithForm>

      <PopupWithForm
        name='bin-popup'
        isOpen=''
        title='Вы уверены?'
        onClose=''
        saveText='Да'
      >

      </PopupWithForm>

      <div className="popup" id="imagepopup">
        <div className="popup__image-container">
          <button className="popup__close-button" type="button" id="closeimagebutton"></button>
          <img className="popup__image-zoom" src="#" alt="" />
          <h2 className="popup__image-name"></h2>
        </div>
      </div>

      <template className="cardTemplate">
        <div className="element">
          <button className="element__bin" type="button"></button>
          <img className="element__image" src="#" alt="" />
          <div className="element__info">
            <h2 className="element__text">Карачаевск</h2>
            <div className="element__likes">
              <button className="element__heart" type="button" id="likebutton"></button>
              <span className="element__like-count">0</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
