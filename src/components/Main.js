import {useState, useEffect} from 'react';


function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  

    return(
        <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="#" alt="Аватар" />
            <button type="button" onClick={onEditAvatar} className="profile__avatar-edit-button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__user-name"></h1>
            <p className="profile__user-about"></p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>

        <section className="elements">

        </section>
      </main>
    )
}

export default Main