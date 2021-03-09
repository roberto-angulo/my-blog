import React from "react"
import PostThumbSmall from "./postsComponents/postThumb"
//import { useStaticQuery, graphql } from "gatsby"
import SocialIconsFollow from "./socialIconFollow/SocialIconsFollow"
import ContactForm from "./forms/ContactForm"
import BioComponent from "./bioComponent/BioComponent"
import CopyrightComponent from "../components/copyrightComponent/CopyrightComponent"

const Footer = () => (
  <div className="bg-dark pt-5 mt-5 justify-content-center">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-8 col-sm-7 col-md-5 col-xl-2 mr-auto ml-auto pt-xl-3">
          <ContactForm />
          <SocialIconsFollow />
        </div>
        <div className="col-8 col-sm-7 col-md-5 col-xl-3 pt-xl-3">
          <PostThumbSmall />
        </div>

        <div className="col-8 col-sm-7 col-md-6 col-xl-2 ml-auto mr-auto pt-xl-3">
          <BioComponent descriptionColor="white" />
        </div>
      </div>
      <div className="row pt-5">
        <CopyrightComponent />
      </div>
    </div>
  </div>
)

export default Footer
