import React, { useEffect, useState, useContext } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
//import "../styling/index.scss"
import {
  SubscribeForm,
  WrapperApp,
  PostCard,
  MessageSubscribe,
  Jumbotron,
  BioComponent,
} from "../components"
import { Provider, connect } from "react-redux"
import blogStore, { postsReducer } from "../storeReducers/postsReducer"
import BioComponentStyle from "../components/bioComponent/bioComponent.module.scss"
import cx from "classnames"
import PostsEntries from "../components/postsComponents/PostsEntries"

const storeBlog = blogStore()
const IndexPage = () => {
  return (
    <>
      <Jumbotron />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <section className="row justify-content-center justify-content-xl-start">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-8 col-xl-6 ml-auto mr-auto text-center">
                    <div className={cx(BioComponentStyle.bioIntro, "mt-5")}>
                      <img
                        src="https://images.pexels.com/photos/2146042/pexels-photo-2146042.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                        className={cx(
                          BioComponentStyle.bioThumb,
                          "ObjectFitCover",
                          "bioThumb",
                          "rounded-circle"
                        )}
                      />
                      <h2
                        className={cx(
                          "w-100",
                          "pb-4",
                          "pt-4",
                          "text-center",
                          BioComponentStyle.bioDescription
                        )}
                      >
                        Hola, me llamo{" "}
                        <Link to="/about" className="text-dark">
                          Kairine
                        </Link>
                        , estos son mis ultimos articulos
                      </h2>
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
              </div>

              <PostsEntries showBio={true} />
            </section>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-8">
            <section className="row justify-content-center">
              <div className="col-10 col-xl-5">
                <div className="d-flex h-100 align-items-center">
                  <MessageSubscribe />
                </div>
              </div>
              <div className="col-10 col-xl-7">
                <SubscribeForm font="font-weight-bolder text-dark" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

const HomepageComponent = () => {
  return (
    <Provider store={storeBlog}>
      <WrapperApp>
        <IndexPage />
      </WrapperApp>
    </Provider>
  )
}
export default HomepageComponent
