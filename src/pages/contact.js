import React from 'react';
import WrapperApp from '../components/WrapperApp'

const ContactPage = () => (
    <article className="container">
        <div className="row justify-content-center">
            <div className="col-10">
                <h1>Contact</h1>
                <p>
                    Contact Details
                </p>
            </div>
        </div>
    </article>
);

const ContactPageComponent = () => <WrapperApp><ContactPage /></WrapperApp>;
export default ContactPageComponent;