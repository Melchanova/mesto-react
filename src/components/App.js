/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }
    return (
        <>
            <div className="root">
                <div className="page">
                    <Header />

                    <Main onEditProfile={handleEditProfileClick} 
                    onAddPlace={handleAddPlaceClick} 
                    onEditAvatar={handleEditAvatarClick} 
                    onCardClick={handleCardClick} />

                    <Footer />
                </div>

                <PopupWithForm name="profile" 
                buttonText="Сохранить" 
                title="Редактировать профиль" 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups}>

                    <label htmlFor="name" className="popup__label">
                        <input id="name" required 
                        className="popup__input popup__input_value_name" 
                        type="text" name="name" placeholder="Ваше имя" 
                        minLength="2" maxLength="40" />
                        <span className="error" id="name-error"></span>
                    </label>
                    <label htmlFor="position" className="popup__label">
                        <input id="position" required 
                        className="popup__input popup__input_value_about" 
                        type="text" name="position" placeholder="О себе" 
                        minLength="2" maxLength="200" />
                        <span className="error" id="position-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="place" 
                buttonText="Создать" 
                title="Новое место" 
                isOpen={isAddPlacePopupOpen} 
                onClose={closeAllPopups}>

                    <label htmlFor="title" className="popup__label">
                        <input id="title" required 
                        className="popup__input popup__input_value_place" 
                        type="text" name="title" placeholder="Название" 
                        minLength="2" maxLength="30" />
                        <span className="error" id="title-error"></span>
                    </label>
                    <label htmlFor="link" className="popup__label">
                        <input id="link" required 
                        className="popup__input popup__input_value_link" 
                        type="url" name="link" placeholder="Ссылка на картинку" />
                        <span className="error" id="link-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="avatar" 
                buttonText="Сохранить" 
                title="Обновить аватар" 
                isOpen={isEditAvatarPopupOpen} 
                onClose={closeAllPopups}>
                    <label htmlFor="avatar" className="popup__label">
                        <input id="avatar" required 
                        className="popup__input popup__input_value_avatar" 
                        type="url" name="avatar" placeholder="Ссылка на аватар" />
                        <span className="error" id="avatar-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="confirm" buttonText="Да" title="Вы уверены?" onClose={closeAllPopups} />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            
        </div>
        </>
    );
}

export default App;

