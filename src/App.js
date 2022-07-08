import {Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AutoParksPage from "./pages/AutoParksPage/AutoParksPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'auto_parks'}/>}/>
                <Route path={'auto_parks'} element={<AutoParksPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
