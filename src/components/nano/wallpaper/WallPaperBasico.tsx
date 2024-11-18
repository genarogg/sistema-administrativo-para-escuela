import { useEffect } from "react";

import { Icono } from "@nano";

interface EnlaceRedSocial {
    href: string;
    className: string;
    icono: JSX.Element;

}

interface WallpaperBasicoProps {
    img: string;
    redesSociales?: EnlaceRedSocial[];
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
}

const WallpaperBasico: React.FC<WallpaperBasicoProps> = ({ children, img, redesSociales, title, subTitle }) => {
    useEffect(() => {
        const imgBgElement = document.querySelector(
            ".wallpaper-basico"
        ) as HTMLImageElement;

        imgBgElement.style.backgroundImage = `url(${img})`;
    }, []);



    return (
        <div className="wallpaper-basico">
            {
                title && (
                    <div className="text">
                        <h1>{title}</h1>
                        <p>{subTitle}</p>
                    </div>
                )
            }

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

            {children && <>{children}</>}
        </div>
    );
};

export default WallpaperBasico;
