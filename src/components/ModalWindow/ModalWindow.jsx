import React, {useEffect} from "react";
import './ModalWindow.css'
import exitButton from '@Assets/images/icons/exit.svg'


const ModalWindow = ({isVisible = false, title, content, footer, onClose}) => {
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
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                    <img className="modal-close"
                         onClick={onClose}
                         src={exitButton}
                         alt={'Х'}/>
                </div>
                <div className="modal-body">
                    <div className="modal-content">{content}</div>
                </div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
};

export default ModalWindow