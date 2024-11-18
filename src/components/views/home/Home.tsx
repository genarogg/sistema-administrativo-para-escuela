import { WallPaperBasico } from "@wallpaper";
import Layout from "@layout"
import { Simple2Grid } from "@section"
import { redesSociales } from "../../../const/redesSociales";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {





    return (
        <Layout>
            <WallPaperBasico
                img={"/home/download.jpg"}
                redesSociales={redesSociales}
                title="e.t. ademar vasquez chavez"
                subTitle="Escuela Técnica Comercial" />

            <Simple2Grid
                titleSection="Propósito"
                titleId="proposito"
                titleClassName="proposito"
                textImgSrc="/home/undraw_elements_re_25t9.svg"
                textImgAlt="/home/undraw_elements_re_25t9.svg"
                textSizeImg={300}
                textContent={`Consolidar la Escuela Técnica “Ademar Vásquez Chávez” como unidad socio
                    productiva mediante el fortalecimiento de la práctica técnica – académica, en
                    cuanto a la actividad comercial, ejecutando todo el proceso administrativo
                    comercial en aras del acondicionamiento favorable del ambiente escolar.`}
                imgSrc="/home/undraw_project_completed_re_jr7u.svg"
                imgAlt="Imagen de prueba"
                sizeImg={800}

            />
        </Layout>);
}

export default Home;