import React from 'react'
import { UserOutlined, ShoppingOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Menu from './Menu';

function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="header">
      <div className="container">
        <div className="nav">
          <img className="logo" src="https://i.ibb.co/hR5SKSB/Frame.png" />
          <a className="nav__list" href=''>Shop</a>
          <a className="nav__list" href=''>Our Story</a>
          <a className="nav__list" href=''>Who is Tarla?</a>
        </div>
        <div className="box__btns">
          <a className="btn" href=''><UserOutlined />Login</a>
          <a className="btn" href=''><ShoppingOutlined />Cart</a>
          <button className="btn__menu" onClick={() => setMenu(true)}> <MenuOutlined />Menu</button>
          <Menu menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </div>
  )
}

export default Header