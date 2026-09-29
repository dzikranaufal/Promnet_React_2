import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { pages } from "../data/pages";

function Layout() {
    const { pathname } = useLocation();
    const index = Math.max(0, pages.findIndex((p) => p.path === pathname));
    const page = pages[index];

    return (
        <div className={`layout page-${page.id}`} data-theme={page.theme}>
            <Header words={page.header} />
            <Outlet />
            <Footer current={index + 1} total={pages.length} />
        </div>
    );
}

export default Layout;