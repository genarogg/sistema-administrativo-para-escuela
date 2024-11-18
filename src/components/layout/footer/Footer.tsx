
interface EnlaceRedSocial {
  href: string;
  className: string;
  icono: JSX.Element;
}

interface FooterProps {
  redesSociales?: EnlaceRedSocial[];
  mensaje: string;
}

import { Icono } from "@nano";


const Footer: React.FC<FooterProps> = ({ redesSociales, mensaje }) => {


  return (
    <footer>
      <p>{mensaje}</p>
      {
        redesSociales && (<div className="redes-sociales">
          <ul>
            {redesSociales.map((enlace, index) => (
              <li key={index}>
                <a href={enlace.href} className={enlace.className}>
                  <Icono icono={enlace.icono} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        )
      }
    </footer>
  );
};

export default Footer;
