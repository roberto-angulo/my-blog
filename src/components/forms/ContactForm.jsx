import React from "react"
import CSS from "./ContactForm.module.scss"
import cx from "classnames"

const { contactText, buttonText } = {
  contactText: "Contactame",
  buttonText: "Enviar",
}

const ContactForm = () => (
  <form>
    <h4 className="mb-3 font-weight-light text-white">{contactText}</h4>
    <p>
      <input
        type="text"
        id="nameInput"
        className="form-control"
        placeholder="Nombre"
      />
    </p>

    <p>
      <input
        type="email"
        id="emailInput"
        className="form-control"
        placeholder="Email"
      />
    </p>

    <button className={cx("btn", CSS.ButtonContact)}>{buttonText}</button>
  </form>
)
export default ContactForm
