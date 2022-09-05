import React, { useEffect, useState } from 'react';

function Countdown() {
  const [dateReached, setDateReached] = useState(false);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const weddingDate = 'Mar 19, 2023 00:00:00';
    const countDown = new Date(weddingDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      if (!dateReached) {
        document.getElementById('days').innerText = Math.floor(distance / day);
        document.getElementById('hours').innerText = Math.floor(
          (distance % day) / hour
        );
        document.getElementById('minutes').innerText = Math.floor(
          (distance % hour) / minute
        );
        document.getElementById('seconds').innerText = Math.floor(
          (distance % minute) / second
        );
      }

      //do something later when date is reached
      if (distance < 0) {
        setDateReached(true);

        clearInterval(interval);
      }
    }, 0);

    return () => {
      clearInterval(interval);
    };
  }, [dateReached]);

  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg'
    >
      {!dateReached ? (
        <div className='container'>
          <div className='row'>
            <div className='section-head col-md-12'>
              <h4>Seremos una familia en:</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <ul>
                <li>
                  <span id='days'></span>Días
                </li>
                <li>
                  <span id='hours'></span>Horas
                </li>
                <li>
                  <span id='minutes'></span>Minutos
                </li>
                <li>
                  <span id='seconds'></span>Segundos
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='row'>
            <div className='section-head col-md-12'>
              <h4>Hoy es nuestra boda!! Acompañanos</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Countdown;
