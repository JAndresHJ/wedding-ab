import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';

function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  };

  return (
    <>
      <a
        href='/'
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? ' active' : ''
        }`}
      >
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='leafs' />
            <span>
              Ana <small>&</small> Andrés
            </span>
            <h6>19.03.2023</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Inicio</a>
            </li>
            <li>
              <a href='#couple'>Nosotros</a>
            </li>
            <li>
              <a href='#story'>Nuestra Historia</a>
            </li>
            <li>
              <a href='#organization'>Organization</a>
            </li>
            <li>
              <a href='#gifts'>Mesa de regalos</a>
            </li>
            <li>
              <a href='#gallery'>Galería</a>
            </li>
            <li>
              <a href='#whenwhere'>Cuándo & Dónde?</a>
            </li>
            <li>
              <a href='#rsvp'>Registro</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          <span className='separator'></span>
          <p>
            Boda Ana & Andrés
            <br />
            19 de Marzo 2023
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
