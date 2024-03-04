import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, CustomerPage, UpdatePage } from "./pages";

const RouterRoots = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/items" element={<CustomerPage />} />
                    <Route path="/update/:id" element={<UpdatePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterRoots;