import React from 'react';
import storyImage from '../assets/images/story.jpg';

function Story() {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                <img src={storyImage} className='img-fluid' alt='our-story' />
              </div>
              <div className='story-img-2'></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Nuestro amor.</h4>
            <h3 className='oliven-story-title'>Nuestra Historia</h3>
            <p>
              Nos conocimos mientras estudiábamos la carrera de Ingeniería
              Biomédica en la Universidad de Guadalajara por allá del año 2013…
              Sin embargo coincidimos más durante el 2014 y fue en el 2015
              cuando iniciamos nuestra relación de novios.
            </p>
            <p>
              En el 2016, gracias a nuestro esfuerzo (y el de nuestros padres)
              tuvimos la oportunidad de realizar un semestre de intercambio
              durante el cual tuvimos la oportunidad de aprender de otras
              culturas y visitar lugares que jamás hubiéramos imaginado.
            </p>
            <p>
              El 2017 fue un año importante ya que concluimos nuestra carrera
              universitaria y empezamos a trabajar como practicantes. Después de
              este año empezamos ambos nuestra vida laboral, y como tal, nuestra
              vida de adultos independientes y responsables.
            </p>
            <p>
              Durante el 2019, debido al trabajo, yo (Belén) me tuve que mudar a
              la hermosa ciudad de Querétaro, por lo que tuvimos ahora el gran
              reto de superar la distancia. No fue fácil, pero esta etapa estuvo
              llena de bonitos recuerdos, ya que pudimos conocer un estado que
              muy bello y rico en historia y cultura.
            </p>
            <p>
              Poco tiempo después, la Nación del Fuego atacó y tuvimos que
              encerrarnos en nuestras casas durante unos meses. Fue en ese
              momento cuando decidí regresarme a la ciudad de Guadalajara.
              Gracias al trabajo remoto se me abrió esa posibilidad y pude
              regresar a la Perla Tapatía con tráfico y choques en López Mateos,
              pero dónde vive la gente a la que me siento más cercana,
              incluyendo obviamente al amor de mi vida.
            </p>
            <p>
              Total, después de ir y venir, después de 7 años de relación y 9
              años de conocernos:
            </p>
            <h4>El 5 de Marzo del 2022, nos comprometimos!</h4>
            <p>
              Estamos muy emocionados por empezar esta nueva etapa de nuestra
              vida juntos, como una familia formal, rodeados de las personas que
              amamos y que nos han apoyado y nos han visto crecer desde que
              éramos pequeños, así como con las personas que estos últimos meses
              se han integrado a nuestras vidas para hacerla mejor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
