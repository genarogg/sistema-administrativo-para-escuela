import { A } from "@nano";
import LogoMarca from "../../../imgSVG/Logo";

interface LogoProps {}

const home = { href: "#", logo: "/marca/logo.svg", alt: "Logo" };

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="container-logo">
      <A href={home.href}>
        <LogoMarca />
      </A>
    </div>
  );
};

export default Logo;
