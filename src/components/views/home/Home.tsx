import { WallPaperBasico } from "@wallpaper";
import Layout from "@layout";
import { TitleSection } from "@section";
import { Simple2Grid } from "@section";
import { redesSociales } from "../../../const/redesSociales";
import Image from "next/image";

interface HomeProps { }

const sections = [
    {
        titleSection: "nosotros",
        titleId: "nosotros",
        titleClassName: "nosotros",
        textImgSrc: "/home/undraw_elements_re_25t9.svg",
        textImgAlt: "/home/undraw_elements_re_25t9.svg",
        textSizeImg: 300,
        textContent: `Consolidar la Escuela Técnica “Ademar Vásquez Chávez” como unidad socio
                    productiva mediante el fortalecimiento de la práctica técnica – académica, en
                    cuanto a la actividad comercial, ejecutando todo el proceso administrativo
                    comercial en aras del acondicionamiento favorable del ambiente escolar.`,
        imgSrc: "/home/undraw_project_completed_re_jr7u.svg",
        imgAlt: "Imagen de prueba",
        sizeImg: 800,
    },
    {
        titleSection: "misión",
        titleId: "mision",
        titleClassName: "mision",
        textImgSrc: "/home/undraw_visionary_technology_re_jfp7.svg",
        textImgAlt: "/home/undraw_visionary_technology_re_jfp7.svg",
        textSizeImg: 300,
        textContent: `Fortalecer la formación administrativa comercial mediante la ejecución
productiva – social, en función de la conservación, mantenimiento y
condicionamiento de los ambientes escolares, de forma protagónica y
corresponsable, del colectivo de la Escuela Técnica “Ademar Vásquez Chávez”.`,
        imgSrc: "/home/undraw_target_re_fi8j.svg",
        imgAlt: "Imagen de prueba",
        sizeImg: 800,
        reorder: true,
    },
    {
        titleSection: "visión",
        titleId: "vision",
        titleClassName: "vision",
        textImgSrc: "/home/undraw_shared_goals_re_jvqd.svg",
        textImgAlt: "/home/undraw_shared_goals_re_jvqd.svg",
        textSizeImg: 300,
        textContent: `Direccionar la escuela Técnica en función de maximizar los estándares de calidad, excelencia e innovación, orientada hacia el desarrollo y consolidación de los procesos de aprendizaje significativo, concibiendo la integración y participación de la comunidad, entes especializados, y demás instituciones educativas, productivas, ambientales y sociales en el quehacer cotidiano de la escuela, dirigiendo al estudiante a proyectar sus competencias profesionales en el desarrollo productivo del país.`,
        imgSrc: "/home/undraw_spread_love_re_v3cl.svg",
        imgAlt: "Imagen de prueba",
        sizeImg: 800,
    },
];

const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            <WallPaperBasico
                img={"/home/download.jpg"}
                redesSociales={redesSociales}
                title="e.t. ademar vasquez chavez"
                subTitle="Escuela Técnica Comercial"
            />

            {sections.map((section, index) => (
                <Simple2Grid
                    key={index}
                    titleSection={section.titleSection}
                    titleId={section.titleId}
                    titleClassName={section.titleClassName}
                    textImgSrc={section.textImgSrc}
                    textImgAlt={section.textImgAlt}
                    textSizeImg={section.textSizeImg}
                    textContent={section.textContent}
                    imgSrc={section.imgSrc}
                    imgAlt={section.imgAlt}
                    sizeImg={section.sizeImg}
                    reorder={section.reorder}
                />
            ))}

            <TitleSection titulo="Información de la institución" className="footer-up-titulo" />
            <div className="footer-up">
                <div className="institucion">
                    <Image
                        alt="Mountains"

                        src="/dboard/logo.png"
                        sizes="100vw"
                        // Make the image display full width
                        style={{
                            width: '120px',
                            height: 'auto',
                        }}
                        width={120}
                        height={120}
                    />
                    <h2>ET Ademár <br /> Vasquez Chávez</h2>
                </div>
                <div className="contacto">
                    <p><strong>Dirección:</strong> Avenida Rómulo Gallegos con Paseo Metropolitano Calle 30B Sector El Algarrobo</p>
                    <p><strong>Dependencia:</strong> Nacional</p>
                    <p><strong>Nombre del Circuito:</strong> Carlos Lanza</p>
                    <p><strong>Consejo Comunal:</strong> El Algarrobo</p>
                    <p><strong>Modalidad:</strong> Media Técnica</p>
                </div>
                <div className="informacion">
                    <p><strong>Código Circuital:</strong> 180801001</p>
                    <p><strong>Comuna:</strong> Chávez. Esperanza y Paz</p>
                    <p><strong>Código de Plantel:</strong> TO122D1808</p>
                    <p><strong>Código de Dependencia:</strong> 005782000</p>
                    <p><strong>Código Estadístico:</strong> 00180538</p>
                </div>

            </div>

        </Layout>
    );
};

export default Home;