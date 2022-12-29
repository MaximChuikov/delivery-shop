import React, {useEffect} from "react";
import './ModalWindow.css'
import exitButton from '@Assets/images/icons/exit.svg'
import ButtonComponent from "@Components/ButtonComponent/ButtonComponent";


const ModalWindow = ({isVisible = false, onClose}) => {
    const keydownHandler = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <form>
                    <img className="modal-close"
                         onClick={onClose}
                         src={exitButton}
                         alt={'Х'}/>

                    <div className={'title-auth'}>
                        Авторизация
                    </div>
                    <div className={'title-description'}>
                        Введите логин и пароль, чтобы войти в личный кабинет
                    </div>
                    <div className={'input-container'}>
                        <input className={'input-login'}
                               // взял паттерн из интернета
                               pattern={'(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'}
                               type={'email'}
                               placeholder={'Логин'}
                               required/>
                        <input className={'input-password'}
                               type={'password'}
                               placeholder={'Пароль'}
                               required/>
                    </div>
                    <ButtonComponent className={'button-auth'} style={{width: '100%'}}>
                        Войти
                    </ButtonComponent>
                </form>
            </div>
        </div>
    );
};

export default ModalWindow