import React from 'react'
import howitworks from './../data/howitworks';

function HowItWorks() {
    return (
        <div className="how__it__works">
            <div className="container">
                <h1 className="name">How it works</h1>
                <div className="box__card">
                    {howitworks.map((item) => (
                        <div className="card" key={item.id}>
                            <img className="card__logo" src={item.logo} />
                            <h3 className="card__name">{item.name}</h3>
                            <h6 className="card__title">{item.title}</h6>
                        </div>
                    ))}
                </div>
                <button className="btn">Shop pastry kits</button>
            </div>
        </div>
    )
}

export default HowItWorks