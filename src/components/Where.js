import React from 'react';
import where1 from '../assets/images/ceremony.jpg';

function Where() {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Ceremonia</span>
            <h2 className='oliven-title'>Cuándo & Dónde?</h2>
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              <img src={where1} alt='save-date' />
            </div>
            <div className='content'>
              <h5>Ceremonia Civil & Fiesta</h5>
              <p>
                <i className='ti-location-pin'></i> Calle Juan Manuel Ruvalcaba
                1038 Nextipac, 45220 Zapopan, Jal.
              </p>
              <p>
                <i className='ti-time'></i> <span>7:00pm – 2:00am</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-8'>
            <iframe
              title='location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.5782217793926!2d-103.52370408431054!3d20.767882702007032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a7eaa3565d45%3A0xc781ff0e460b4c62!2sHACIENDA%20NEXTIPAC%20Eventos!5e0!3m2!1ses!2smx!4v1667595381955!5m2!1ses!2smx'
              width='100%'
              height={450}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-12'>
            <div className='content-rules'>
              <h5>
                CONSIDERACIONES IMPORTANTES
                <p style={{ marginTop: 15 }}>
                  <li>CODIGO DE VESTIMENTA FORMAL</li>
                  <li>NO NIÑOS</li>
                </p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
