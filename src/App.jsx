import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <div className="bg-[#0c0c14] min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* يمكنك لاحقًا إضافة صفحات أخرى */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
