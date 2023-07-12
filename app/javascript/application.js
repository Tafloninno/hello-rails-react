// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react"
import  ReactDOM  from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
    return <h2>Hello</h2>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <App/>
)
