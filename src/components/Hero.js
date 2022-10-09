import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import About from "./About";

function Hero() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Hero;