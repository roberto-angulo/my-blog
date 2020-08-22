import React from "react"
import dataPosts from "../../data"
import { connect } from "react-redux"
import componentStyles from "./bioComponent.module.scss"
import generalStyles from "../../styles/_generalStyles.scss"

const BioComponent = ({ descriptionColor, dataBio = {}, card }) => (
  <div className="d-none d-xl-block">
    <div
      className={
        card
          ? `bg-dark rounded BoxShadow ${componentStyles.bioComponentCard}`
          : ``
      }
    >
      <img src={dataBio.thumbnail} className="mw-100" alt="My image here" />
      <p className={`text-${descriptionColor} p-4 pt-3`}>{dataBio.content}</p>
    </div>
  </div>
)

const mapStoreToprops = state => {
  return {
    dataBio: dataPosts.personalBio,
  }
}
export default connect(mapStoreToprops)(BioComponent)
