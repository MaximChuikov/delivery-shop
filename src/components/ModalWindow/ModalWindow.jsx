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
                <div>
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
                        <input className={'input-login'} type={'text'} placeholder={'Логин'}/>
                        <input className={'input-password'} type={'password'} placeholder={'Пароль'}/>
                    </div>
                    <ButtonComponent className={'button-auth'} style={{width: '100%'}}>
                        Войти
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow