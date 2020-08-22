import React, { createContext } from "react"
const general = { baseUrl: `https://jolly-montalcini-add915.netlify.app` }
const appContext = createContext({ appState: { general } })
export default appContext
