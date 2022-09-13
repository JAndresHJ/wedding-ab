import React from 'react';
import Liverpool from '../assets/images/liverpool-logo.jpg';

function Gifts() {
  return (
    <div id='gifts' className='bridegroom clear section-padding-gift bg-pink'>
      <div className='row'>
        <div
          className='col-md-12 text-center animate-box'
          data-animate-effect='fadeInUp'
        >
          <h3 className='oliven-couple-title'>Mesa de regalos</h3>
        </div>
      </div>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='info valign gift'>
                <div className='full-width'>
                  <img
                    style={{ marginBottom: 10 }}
                    src={Liverpool}
                    alt='liverpool'
                  />
                  <h4>Numero de evento: 51015474</h4>
                  <a href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51015474'>
                    <button className='buttono'>Ir a mesa de regalos</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box toright'
              data-animate-effect='fadeInRight'
            >
              <div className='info valign gift'>
                <div className='full-width'>
                  <h6>
                    Citibanamex<i className='ti-heart'></i>
                  </h6>
                  <h4>Nombre: Jorge Andrés Hernández Jara</h4>
                  <h4>Tarjeta:</h4>
                  <h4>CLABE:</h4>
                  <p>
                    En caso de hacer una transferencia o depósito, por favor
                    háznolo saber para poder darte las gracias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
