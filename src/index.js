import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App/App"
import { Provider } from "react-redux/es/exports"
import {store} from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
