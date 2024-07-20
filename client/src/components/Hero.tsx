import React, { useState } from 'react';
import hero from '../images/hero.png'


const Hero: React.FC = () => {

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Уникални Плетива за Вашия Дом и Гардероб</h1>
                <p>Добре дошли в нашия онлайн магазин, където традицията и стилът се преплитат! Открийте изяществото на ръчно изработените плетени изделия, създадени с любов и внимание към детайла. Разгледайте нашата колекция от стилни плетени дрехи, аксесоари и декорации за дома.</p>
                <button className="hero-button">Продукти</button>
            </div>
            <div className="hero-image">
                <img src={hero} alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;