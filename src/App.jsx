import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <body>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </body>
        </Router>
    );
}

export default App;
