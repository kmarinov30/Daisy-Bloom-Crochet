import React from 'react';
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section footer__section--about">
                    <h2 className="footer__title">За Нас</h2>
                    <p className="footer__text">Създаваме уникални ръчно плетени изделия с висококачествени материали и внимание към детайла. Благодарим ви, че споделяте нашата страст!</p>
                </div>
                {/* <div className="footer__section footer__section--links">
                    <h2 className="footer__title">Бързи Линкове</h2>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a href="#" className="footer__link">Начало</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Продукти</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Контакти</a></li>
                    </ul>
                </div> */}
                <div className="footer__section footer__section--links">
                    <h2 className="footer__title">За Клиенти</h2>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a href="#" className="footer__link">Условия за ползване</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Защита на личните данни</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Право на отказ от поръчка</a></li>
                    </ul>
                </div>
                <div className="footer__section footer__section--social">
                    <h2 className="footer__title">Последвайте ни</h2>
                    <div className="footer__social-icons">
                        <a href="https://www.instagram.com/kokicha23/" target='_blank' className="footer__social-icon"><img src={facebook} /></a>
                        <a href="https://www.instagram.com/kokicha23/" target='_blank'><img src={instagram} /></a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__copy">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;