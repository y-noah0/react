import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/login";
import List from "./List/list";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/list" element={<List />} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
export default AppRoutes;