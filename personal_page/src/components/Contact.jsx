import React from 'react';
import {storage} from "../shared/firebase";
import ContactForm from "../shared/ContactForm";
import plane from "../assets/plane.png";
import Download from "../shared/Download";

const Contact = () => {
    return (
        <div className="contact">
            <img src={plane} alt="plane icon" />
            <br />
            <h1 className="contact__heading"> Contact </h1>

            <div className="contact__form">
                <div className="contact__form__container">
                <ContactForm />
                </div>
                <div className="cv_download">
                    <Download />
                </div>
            </div>
        </div>
    )
}

export default Contact;