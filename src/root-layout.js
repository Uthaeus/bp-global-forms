import { Outlet } from "react-router";

import MainNavigation from "./components/navigation/main-navigation";

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}