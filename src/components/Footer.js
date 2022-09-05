import React from 'react';
import Logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <div>
                <img src={Logo} alt='leafs' />
                <span>
                  Ana <small>&</small> Andrés
                </span>
              </div>
            </h2>
            <p className='copyright'>Marzo 19, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
