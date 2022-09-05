import React, { useState } from 'react';

function RSVP() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    guests: '',
    message: '',
  });
  const [hasGuests, setHasGuests] = useState(false);

  const { name, phone, guests, message } = formState;

  const handleChange = (evt) => {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  };

  const toggleGuestsCheck = () => {
    setHasGuests(!hasGuests);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    alert(JSON.stringify({ ...formState, hasGuests }));
  };

  return (
    <div id='rsvp' className='section-padding bg-img bg-fixed'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            <span className='oliven-title-meta text-center'>
              ¿Nos acompañarás?
            </span>
            <h2 className='oliven-title text-center'>Registro</h2>
            <br />
            <form className='row' onSubmit={onSubmit}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nombre completo *'
                    name='name'
                    required
                    onChange={handleChange}
                    value={name}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Número de telefono'
                    name='phone'
                    onChange={handleChange}
                    value={phone}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                    onChange={toggleGuestsCheck}
                    checked={hasGuests}
                  />
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckDefault'
                  >
                    Llevas acompañantes?
                  </label>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Cuántos acompañantes?'
                    min={0}
                    max={5}
                    name='guests'
                    onChange={handleChange}
                    value={guests}
                    disabled={!hasGuests}
                  />
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Algún mensajito?'
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
