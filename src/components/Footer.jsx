import React from 'react'
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="nav">
                    <h1 className="name">Join our community</h1>
                    <h2 className="name__two">and let's get baked</h2>
                    <button className="nav__btn">oven@180degrees.com</button>
                </div>
                <div className="buttom">
                    <div className="box__logo">
                        <img className="logo" src="https://i.ibb.co/hR5SKSB/Frame.png" />
                        <h5>©2021 Tarla</h5>
                    </div>
                    <div className="box">
                        <h3 className="box__name">Account</h3>
                        <div className="box__title">
                            <a href='' className="box__list">Sign Up</a>
                            <a href='' className="box__list">Log In</a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="box__name">Our company</h3>
                        <div className="box__title">
                            <a href='' className="box__list">Shop</a>
                            <a href='' className="box__list">Our Story</a>
                            <a href='' className="box__list">Who is Tarla?</a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="box__name">Resources</h3>
                        <div className="box__title">
                            <a href='' className="box__list">FAQ</a>
                            <a href='' className="box__list">Contact</a>
                            <a href='' className="box__list">Become an Influencer</a>
                            <a href='' className="box__list">Privacy Policy</a>
                            <a href='' className="box__list">Terms of Service</a>
                            <a href='' className="box__list">Refund Policy</a>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="box__name">@tarlabakes</h3>
                        <div className="box__icons">
                            <a href=""><TwitterOutlined /></a>
                            <a href=""><FacebookOutlined /></a>
                            <a href=""><InstagramOutlined /></a>
                            <a href=""><WhatsAppOutlined /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer