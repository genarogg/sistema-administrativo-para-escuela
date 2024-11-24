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
            <h2>E.T.C ademar <br /> vasquez chavez</h2>
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
            mensaje="Con ❤️ para e.t.c ademar vasquez chavez"
        />
    </>
    );
}

export default Layout;