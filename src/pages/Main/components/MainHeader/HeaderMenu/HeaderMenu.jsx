import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';
import React, {useState} from 'react';

import phoneIcon from '@Assets/images/icons/phoneIcon.svg';
import logoIcon from '@Assets/images/icons/logoIcon.svg';

import './HeaderMenu.css';
import ModalWindow from "@Components/ModalWindow/ModalWindow";

const HeaderMenu = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
            <div className="header-menu">

                <div className="header-menu--column-left">
                    <img className="menu-logo" src={logoIcon} alt={'logo'} />
                    <div className="menu-separator" />
                    <div className="menu-name">Курьерская служба доставки</div>
                </div>
                <div className="header-menu--column-right">
                    <div className="header-menu--number">
                        <img className="number-icon" src={phoneIcon} alt={'phone'} />
                        <div className="number-value">8 (909) 023-12-51</div>
                    </div>
                    <ButtonComponent value="Вход"
                                     styleColor="color-in"
                                     onClick={() => {setModalOpen(true)}}/>
                </div>
                <ModalWindow isVisible={modalOpen}
                             onClose={() => setModalOpen(false)}
                             title={'ФЫВыфвфыв'}
                             footer={'asdasd'}
                             content={'asdsad'}/>
            </div>

    )
}

export default HeaderMenu;
