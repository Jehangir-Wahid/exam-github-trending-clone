import { Routes, Route } from "react-router-dom";
import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Repositories />} />
            <Route path="/developers" element={<Developers />} />
        </Routes>
    );
}

export default AppRoutes;
