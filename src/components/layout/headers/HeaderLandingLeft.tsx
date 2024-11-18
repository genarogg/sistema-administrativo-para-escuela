import React, { useEffect, useState } from "react";

import { FaInfoCircle, FaBullseye, FaEye, FaSignInAlt } from "react-icons/fa";


import { TiHome } from "react-icons/ti";

import { Btn3Hamburgues } from "@btn";
import { A } from "@nano";

import Nav from "./Navs/Nav";

import LogoMarca from "@imgSVG/Logo";

import scrollHeader from "./HeaderFn/scrollHeader";

interface HeaderLandingLeftProps {
  logoText?: React.ReactNode;
}

// Definir los elementos del header
const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };
const menuItems = [
  { href: "/", label: "Inicio", icon: <TiHome /> },
  { href: "#nosotros", label: "nosotros", icon: <FaInfoCircle /> },
  { href: "#mision", label: "misión", icon: <FaBullseye /> },
  { href: "#vision", label: "visión", icon: <FaEye /> },
  // { href: "#contacto", label: "contacto", icon: <FaHandHoldingDollar /> },
  { href: "/login", label: "login", icon: <FaSignInAlt /> },
];

/* const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
]; */

const HeaderLandingLeft: React.FC<HeaderLandingLeftProps> = ({ logoText = "" }) => {
  const [isActive, setIsActive] = useState(false);

  const Logo = () => {
    return (
      <div className="container-logo">
        <A href={home.href}>
          {logoText !== "" ? logoText : <LogoMarca />}
        </A>
      </div>
    );
  };

  useEffect(() => {
    window.onscroll = () => {
      scrollHeader();
    };
  }, []);

  return (
    <>
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
    </>
  );
};

export default HeaderLandingLeft;
