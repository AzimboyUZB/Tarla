import React from 'react'

function MainButtom() {
    return (
        <div className="main__buttom">
            <div className="container">
                <div className="top">
                    <img className="top__img" src="https://i.ibb.co/DYJZqVm/Rectangle-20.png" />
                    <div className="top__title">
                        <h5 className="title__name">Amazing Ingredients</h5>
                        <h3 className="title__text">
                            We like to keep things simple and authentic. We’ve sourced the very best from
                            the very best, from our Poitou-Charentes butter to our Valrhona chocolate
                            batons.
                        </h3>
                        <button className="title__btn">Read more</button>
                    </div>
                </div>
                <div className="buttom">
                    <div className="buttom__title">
                        <h5 className="title__name">Legendary Bakes</h5>
                        <h3 className="title__text">
                            The inspiration for our brand and our guiding principles is the Legend of El Tarlà. 
                            A young man who brought joy to the isolated citizens of Girona during an outbreak of 
                            the plague.
                        </h3>
                        <button className="title__btn">Read more</button>
                    </div>
                    <img className="buttom__img" src="https://i.ibb.co/18Gqk23/Rectangle-21.png" />
                </div>
            </div>
        </div>
    )
}

export default MainButtom