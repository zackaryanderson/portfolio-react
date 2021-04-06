import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import img from "../../assets/images/zackaryanderson.jpg";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="about">
            <div className="container">
                <div className="row center">
                    <img className="round" src={img} alt="Zack Anderson" />
                    <div >
                        <div className="card-body">
                            <div className="card-title">Professionally:</div>
                            <p>
                                I am an engineer and a developer, and I look to keep life
                                interesting through learning and exploring. I strive to push myself and those around me
                                to
                                achieve more and to grow as we
                                do. I look to leave projects better than I found them and to perform at the highest
                                standard
                                possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
            <h1 className="mx-2">Contact Me</h1>
            <form id="contact-form"onSubmit={handleSubmit} >
                <div className="my-1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="my-1">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            </div>
        </section>
    )
}

export default ContactForm;