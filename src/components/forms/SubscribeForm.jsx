import React from "react"
import formStyles from "../styling/forms/subscribeForm.module.scss"
import cx from "classnames"

const { subscribeText, buttonText } = {
  subscribeText: "Subscribete a mi boletin",
  buttonText: "Enviar",
}

const SubscribeForm = ({ font }) => (
  <form className={formStyles.form_pannel}>
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-9">
        <div className="">
          <h3 className={cx(font, "pb-1", formStyles.SubscribeHeading)}>
            {subscribeText}
          </h3>
        </div>
      </div>
      <div className="col-md-9">
        <form className="form-row">
          <div className="col-12 col-md-6 pl-0">
            <input
              type="text"
              required="required"
              className="form-control mb-1"
              placeholder="Your name"
            />
          </div>
          <div className="col-12 col-md-6 pl-0 pr-md-0">
            <input
              name="dzEmail"
              required="required"
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <button
            className={cx(
              formStyles.BtnSubscribe,
              "btn",
              "BtnPrimary",
              "w-100",
              "mt-2"
            )}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  </form>
)
export default SubscribeForm
