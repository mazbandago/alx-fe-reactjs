import { createBrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import AboutPage from "./components/AboutPage";



const router = createBrowserRouter([
    {
        path:"/",
        Component: Search
    },
    {
        path:"/About",
        Component: AboutPage
    }
]);
export default router;