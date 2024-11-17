import HeaderLandingLeft from "./headers/HeaderLandingLeft";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (<>
        <HeaderLandingLeft />
        {children}
    </>);
}

export default Layout;