import React, { useState } from 'react';

import { Link } from 'react-router-dom';





const Products: React.FC = () => {
    return (
        <div className='card-container'>
            <div className="card">
                <img src='https://lescerisesvertes.be/imgs/196528-5-%D0%94%D0%B0%D0%BC%D1%81%D0%BA%D0%B8-%D0%B4%D1%80%D0%B5%D1%85%D0%B8-%D1%81%D0%BA%D1%8A%D1%81%D1%8F%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D0%B2%D1%8A%D0%B7%D0%BB%D0%B8.jpeg' alt="Card" className="card-image" />
                <Link to={'/catalog-knitting'} className="card-link">
                    Плетива <span className="arrow">→</span>
                </Link>
            </div>
            <div className="card">
                <img src='https://s13emagst.akamaized.net/products/36418/36417282/images/res_17583755ebd05ccb86a1a49acae18d63.jpg' alt="Card" className="card-image" />
                <Link to={'/catalog-yarn'} className="card-link">
                    Прежди <span className="arrow">→</span>
                </Link>
            </div>
        </div>

    )
};

export default Products;