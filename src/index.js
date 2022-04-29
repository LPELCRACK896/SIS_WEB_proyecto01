import React from "react"
import {createRoot} from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import banner from "./media/main-banner-full-horizontal.png"
import "./style/main.scss"

import NavigationBar from "./components/navigation-bar/NavigationBar"
import SecondSection from "./components/second-section/SecondSection";
import ThirdSection from "./components/third_section/ThirdSection";
import FourthSection from "./components/zFourth-section/FourthSection";
import Footer from "./components/zzFooter/Footer";

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
                                <SecondSection/>
                                <ThirdSection/>
                                <FourthSection/>
                                <Footer/>

                            </div>
                        </div>
                        <NavigationBar/>
         
                  
                    </div>
                }/>
            </Routes>    
        </HashRouter>

    </div>;
}
root.render(<App/>)