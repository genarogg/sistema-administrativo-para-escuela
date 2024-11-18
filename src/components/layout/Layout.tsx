import HeaderLandingLeft from "./headers/HeaderLandingLeft";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const TextLogo = () => {
        return (
            <h2>e.t. ademar <br /> vasquez chavez</h2>
        );
    }

    return (<>
        <HeaderLandingLeft logoText={<TextLogo />} />
        {children}
    </>
    );
}

export default Layout;