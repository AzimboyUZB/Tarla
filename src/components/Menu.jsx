import React from 'react'

function Menu({menu, setMenu}) {
    return (
        <div className={menu ? "menu open" : "menu"}>
            <div className="container">
                <div className="box__btn">
                    <button className="btn" onClick={() => setMenu(false)}>X</button>
                </div>
                <div className="list" onClick={() => setMenu(false)}>Shop</div>
                <div className="list" onClick={() => setMenu(false)}>Our Story</div>
                <div className="list" onClick={() => setMenu(false)}>Who is Tarla?</div>
            </div>
        </div>
    )
}

export default Menu