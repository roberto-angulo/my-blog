import React from "react"
import CSS from "./ContactForm.module.scss"
import cx from "classnames"

const { contactText, buttonText } = {
  contactText: "Contactame",
  buttonText: "Enviar",
}

const ContactForm = () => (
  <form method="POST" name="contactForm" data-netlify="true">
    <h4 className="mb-3 font-weight-light text-white">{contactText}</h4>
    <p>
      <input
        type="text"
        id="nameInput"
        className="form-control"
        placeholder="Nombre"
        name="nameInput"
      />
    </p>

    <p>
      <input
        type="email"
        id="emailInput"
        className="form-control"
        placeholder="Email"
        name="emailInput"
      />
    </p>

    <p>
      <textarea
        placeholder="Mensaje"
        name="textareaInput"
        id="textareaInput"
        className="form-control"
        rows="3"
      ></textarea>
    </p>

    <button type="submit" className={cx("btn", CSS.ButtonContact)}>
      {buttonText}
    </button>
    <input type="hidden" name="form-name" value="contact" />
  </form>
)
export default ContactForm
