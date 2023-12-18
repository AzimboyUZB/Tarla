import React from 'react'
import products from './../data/products';

function Products() {
    return (
        <div className="products">
            <div className="container">
                <h1 className="name">Shop pastry kits</h1>
                <div className="box__card">
                    {products.map((item) => (
                        <div className="card" key={item.id}>
                            <img className="card__img" src={item.img} />
                            <h2 className="card__name">{item.name}</h2>
                            <h4 className="card__title">{item.title}</h4>
                            <button className="card__btn">Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
