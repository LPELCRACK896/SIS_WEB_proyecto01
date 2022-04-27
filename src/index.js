import React from "react"
import {createRoot} from "react-dom/client"
import NavigationBar from "./components/navigation-bar/NavigationBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationItem from "./components/navigation-bar/NavigationItem";
import banner from "./components/main-banner-full-horizontal.png"
import "./index.scss"

const container = document.getElementById('root')
const root = createRoot(container)
const App = () =>{
    return <div>
        <Router>    
            <Routes>
                <Route exact path="/" element = {/* Pagina principal */
                    <div>
  
                        <div className="first-section">
                            <div className="after-first-section">
                                <h1>otras secciones</h1>
                            </div>
                        </div>
                        <NavigationBar>
                                <NavigationItem title="Who we are" drop="true"/>
                                <NavigationItem title="Work with us" drop="true"/>
                                <NavigationItem title="News"/>

                        </NavigationBar>
         
                  
                    </div>
                }/>
            </Routes>    
        </Router>

    </div>;
}
root.render(<App/>)