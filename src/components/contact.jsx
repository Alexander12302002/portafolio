import React, { useState } from 'react';
import '../styles/contact.css';
import Navegacion from './navegacion';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e187f71e-0e46-4024-9e6f-9172c4128195");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return (
        <>
            <Navegacion />
            <section className='contact'>
                <div className='container-contact'> 
                <h2>Hablemos!</h2>
                <p>Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme!</p>
                <form onSubmit={onSubmit}>
                    <div className='input-box'>
                        <label>Tu Nombre</label>
                        <input type="text" name='name' className='field' placeholder='Nombre' required/>
                    </div>
                    <div className='input-box'>
                        <label>Tu Email</label>
                        <input type="email" name='email' className='field' placeholder='ejemplo@email.com' required/>
                    </div>
                    <div className='input-box'>
                        <label>Tu mensaje</label>
                        <input name='message' className='field-mess' placeholder='Escribe tu mensaje' required/>
                    </div>
                    <button type='submit'>Enviar Mensaje</button>
                </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
