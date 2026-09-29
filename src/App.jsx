import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Cursor from "./components/Cursor";
import Content from "./pages/Home"; 
import Who from "./pages/Who";
import What from "./pages/What";
import Where from "./pages/Where";

function App() {
    return (
        <BrowserRouter>
            <Cursor />

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Content />} />
                    <Route path="/who" element={<Who />} />
                    <Route path="/what" element={<What />} />
                    <Route path="/where" element={<Where />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;