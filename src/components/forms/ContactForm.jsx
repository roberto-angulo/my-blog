import React from "react"
import CSS from "./ContactForm.module.scss"
import cx from "classnames"

const { contactText, buttonText } = {
  contactText: "Contactame",
  buttonText: "Enviar",
}

const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = formState

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  const handleChange = e => setFormState({ [e.target.name]: e.target.value })

  return (
    <form
      method="POST"
      name="contactForm"
      data-netlify="true"
      action="/blog"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contactForm" />
      <h4 className="mb-3 font-weight-light text-white">{contactText}</h4>
      <p>
        <input
          type="text"
          id="nameInput"
          className="form-control"
          placeholder="Nombre"
          name="nameInput"
          value={name}
          onChange={handleChange}
        />
      </p>

      <p>
        <input
          type="email"
          id="emailInput"
          className="form-control"
          placeholder="Email"
          name="emailInput"
          value={email}
          onChange={handleChange}
        />
      </p>

      <p>
        <textarea
          placeholder="Mensaje"
          name="textareaInput"
          id="textareaInput"
          className="form-control"
          value={message}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </p>

      <button type="submit" className={cx("btn", CSS.ButtonContact)}>
        {buttonText}
      </button>
    </form>
  )
}
export default ContactForm
