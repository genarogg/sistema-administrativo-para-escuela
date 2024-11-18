import { WallPaperBasico } from "@wallpaper";
import Layout from "@layout"
import { Simple2Grid } from "@section"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    const redesSociales = [
        {
            href: "#",
            className: "instagram",
            icono: <FaInstagram />,
        },
        {
            href: "#",
            className: "facebook",
            icono: <FaFacebookF />,
        },
        {
            href: "#",
            className: "twitter",
            icono: <FaTwitter />,
        },
    ];

    return (
        <Layout>
            <WallPaperBasico
                img={"/home/download.jpg"}
                redesSociales={redesSociales}
                title="e.t. ademar vasquez chavez"
                subTitle="Escuela Técnica Comercial" />

            <Simple2Grid
                titleSection="Noticias"
                titleId="noticias"
                titleClassName="noticias"
                textContent={<p>Texto de prueba</p>}
                imgSrc="/home/download.jpg"
                imgAlt="Imagen de prueba"
                
            />
        </Layout>);
}

export default Home;