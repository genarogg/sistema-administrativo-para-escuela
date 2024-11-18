import { WallPaperBasico } from "@wallpaper";
import Layout from "@layout";
import { Simple2Grid } from "@section";
import { redesSociales } from "../../../const/redesSociales";

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
            
        </Layout>
    );
};

export default Home;