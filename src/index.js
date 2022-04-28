import React from "react"
import {createRoot} from "react-dom/client"
import NavigationBar from "./components/navigation-bar/NavigationBar"
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import banner from "./media/main-banner-full-horizontal.png"
import "./style/main.scss"

const container = document.getElementById('root')
const root = createRoot(container)
const App = () =>{
    return <div>
        <HashRouter>    
            <Routes>
                <Route exact path="/" element = {/* Pagina principal */
                    <div>
  
                        <div className="first-section">
                            <div className="after-first-section">
                                <h1>otras secciones</h1>
                            </div>
                        </div>
                        <NavigationBar>
                      
                        </NavigationBar>
         
                  
                    </div>
                }/>
            </Routes>    
        </HashRouter>

    </div>;
}
root.render(<App/>)