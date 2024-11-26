import Layout from "@layout";
import React, { useEffect, useState } from "react";
import scrollHeader from "../../../layout/headers/HeaderFn/scrollHeader";

import Nav from "../../../layout/headers/Navs/Nav";
import { Btn3Hamburgues } from "@btn";
import { A } from "@nano";

import { WallPaperBasico } from "@wallpaper";
import Box from "./box/Box";
import { RiNewspaperFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { PiShareNetworkBold } from "react-icons/pi";
interface LayoutDBProps {
    children: React.ReactNode;
    logoText?: React.ReactNode;
    where?: string;
    titulo?: string;
    btns?: React.ReactNode;
    search?: React.ReactNode;
}

const LayoutDB: React.FC<LayoutDBProps> = ({ where = "", children, logoText = "", titulo = "", btns, search }) => {

    useEffect(() => {
        window.onscroll = () => {
            scrollHeader();
        };
    }, []);


    const Header = () => {
        const menuItems = [

            // { href: "/dashboard/estudiante", label: "estudiante", icon: <FaUserGraduate /> },
            { href: "/dashboard/personal", label: "personal", icon: <GrUserWorker /> },
            { href: "/dashboard/asistencia", label: "asistencia", icon: <MdChecklistRtl /> },
            { href: "/dashboard/pasantes", label: "pasantes", icon: <PiShareNetworkBold /> },

            // { href: "/dashboard/pasantia-aceptado", label: "Carta Pasantias", icon: <RiNewspaperFill /> },

            // { href: "/dashboard/usuario", label: "usuario", icon: <FaUsersGear /> },
            // { href: "/dashboard/bitacora", label: "bitacora", icon: <MdOutlineWatchLater /> },
            // { href: "/", label: "salir", icon: <AiOutlineLogout /> },
        ];

        const [isActive, setIsActive] = useState(false);
        const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };

        const TextLogo = () => {
            return (
                <h2>E.T.C ademar <br /> vasquez chavez</h2>
            );
        }

        const Logo = () => {
            return (
                <div className="container-logo">
                    <A href={home.href}>
                        <TextLogo />
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
                    <Box titulo={titulo} btns={btns} search={search}>
                        {children}
                    </Box>
                </WallPaperBasico>
            </main>
        </Layout>
    );
}

export default LayoutDB;