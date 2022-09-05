import React from 'react';
import Bride from '../assets/images/bride.jpg';
import Groom from '../assets/images/groom.jpg';

function Bridegroom() {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                <img src={Bride} alt='bride' />
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Ana Belén García Aranda<i className='ti-heart'></i>
                  </h6>
                  <span>La Novia</span>
                  <p>
                    Olivia fringilla dui at elit finibus viverra nec a lacus
                    seda themo the miss druane semper sollicitudin non the
                    fermen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                <img src={Groom} alt='groom' />
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Jorge Andrés Hernández Jara<i className='ti-heart'></i>
                  </h6>
                  <span>El Novio</span>
                  <p>
                    Enrico fringilla dui at elit finibus viverra nec a lacus
                    seda themo the miss druane semper sollicitudin non the
                    fermen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Nos vamos a casar!</h3>
            <h4 className='oliven-couple-subtitle'>
              19 de Marzo, 2023 — Zapopan, Jalisco
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
