import React from 'react'
import productsmin from '../data/productsMin'

function Middle() {
    return (
        <div className="middle">
            <img className="photo" src="https://i.ibb.co/qWtwDrG/Rectangle-15.png" />
            <div className="box__crad">
                {productsmin.map((item) => (
                    <div className="card" key={item.id}>
                        <img className="card__img" src={item.img} />
                        <h1 className="card__name">{item.name}</h1>
                        <h6 className="card__title">{item.title}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Middle