import Layout from "@layout";
import React, { useEffect, useState } from "react";
import scrollHeader from "../../../layout/headers/HeaderFn/scrollHeader";
import LogoMarca from "@imgSVG/Logo";
import { TiHome } from "react-icons/ti";
import Nav from "../../../layout/headers/Navs/Nav";
import { Btn3Hamburgues } from "@btn";
import { A } from "@nano";
import { FaInfoCircle, FaBullseye, FaEye, FaSignInAlt } from "react-icons/fa";
import { WallPaperBasico } from "@wallpaper";
import Box from "./box/Box";
interface LayoutDBProps {
    children: React.ReactNode;
    logoText?: React.ReactNode;
    where?: string;
}

const LayoutDB: React.FC<LayoutDBProps> = ({ where = "", children, logoText = "" }) => {

    const Header = () => {
        const menuItems = [
            { href: "/plantel", label: "plantel", icon: <TiHome /> },
            { href: "#nosotros", label: "nosotros", icon: <FaInfoCircle /> },
            { href: "#mision", label: "misión", icon: <FaBullseye /> },
            { href: "#vision", label: "visión", icon: <FaEye /> },
            // { href: "#contacto", label: "contacto", icon: <FaHandHoldingDollar /> },
            { href: "/login", label: "login", icon: <FaSignInAlt /> },
        ];

        const [isActive, setIsActive] = useState(false);
        const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };

        const Logo = () => {
            return (
                <div className="container-logo">
                    <A href={home.href}>
                        {logoText !== "" ? logoText : <LogoMarca />}
                    </A>
                </div>
            );
        };

        return (
            <header className="header landing-left">
                <div className="desktop" id="desktopHeader">
                    <Logo />

                    <Nav menuItems={menuItems} />
                    <Btn3Hamburgues
                        className={"btn-desktop"}
                        isActive={isActive}
                        setIsActive={setIsActive}
                    />
                </div>
                <Nav
                    menuItems={menuItems}
                    className="nav-xs"
                    isActive={isActive}
                    setIsActive={setIsActive}
                />
            </header>

        );
    }

    return (
        <Layout header={<Header />}>
            <main className={`maindb ${where}`}>
                <WallPaperBasico img={"/home/download.jpg"}>
                    <Box titulo="">
                        {children}
                    </Box>
                </WallPaperBasico>
            </main>
        </Layout>
    );
}

export default LayoutDB;