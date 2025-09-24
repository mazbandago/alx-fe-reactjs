import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import App from "./App";


const router = createBrowserRouter([
    {
        path:"/",
        Component: App
    },
    {
        path:"/About",
        Component: AboutPage
    }
]);
export default router;