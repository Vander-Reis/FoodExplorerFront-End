import { Routes, Route} from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export function AppRoutes() {

    const { user } = useAuth();

    console.log(user);

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            { user.is_admin === 0 ?(
            <>
            <Route path="/new" element={<Home/>}/>
            </>) : 
            <>
            <Route path="/new" element={<New/>}/>
            </>}
            <Route path="/Details/:id" element={<Details/>}/>
        </Routes>
    );
}