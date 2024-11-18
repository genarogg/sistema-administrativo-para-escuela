import HeaderLandingLeft from "./headers/HeaderLandingLeft";
import Footer from "./footer/Footer";
import { redesSociales } from "../../const/redesSociales";


interface LayoutProps {
    children: React.ReactNode;
    header?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, header }) => {
    const TextLogo = () => {
        return (
            <h2>e.t. ademar <br /> vasquez chavez</h2>
        );
    }

    return (<>
        {
            header
                ? header
                : <HeaderLandingLeft logoText={<TextLogo />} />
        }
        {children}
        <Footer
            redesSociales={redesSociales}
            mensaje="Con ❤️ para e.t. ademar vasquez chavez"
        />
    </>
    );
}

export default Layout;