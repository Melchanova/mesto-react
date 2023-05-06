import React from "react";

function PopupWithForm(props) {
    const className = `popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`;

    return (
        <section className={className} id="popup_add">
            <div className="popup__container popup__container_add">
                <h2 className="popup__title popup__title_add">{props.title}</h2>
                <button className={`popup__close popup__close_${props.name}`} type="button" onClick={props.onClose}></button>

                <form className={`popup__form popup__form_${props.name}`} id="formadd" name="popup" action="#" method="post" noValidate>
                    {props.children}
                    <button className="popup__button popup__add-button" type="submit">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </section>
    );
}
export default PopupWithForm;
