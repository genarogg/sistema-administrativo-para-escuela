import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { LayoutPDF, Img, Center, P, H1, H2, H3, H4, H5, H6, Strong, Em, U, Small, Blockquote, Mark } from '@pdf';
import { View } from '@react-pdf/renderer';
import { text } from 'stream/consumers';
// Importar PDFViewer dinámicamente solo en el lado del cliente
const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), { ssr: false });

const Documento = () => {
    const [formData, setFormData] = useState({
        nombresJefe: "Genaro1",
        cedulaJefe: "Genaro1",
        nombresEstudiante: "Genaro1",
        cedulaEstudiante: "Genaro1",
        cargo: "Genaro1",
        empresa: "Genaro1",
        direccion: "Genaro1",

        de: "Genaro1",
        para: "Genaro1",
        presentacion: "Genaro1",
        carta: "Genaro1",
        anoEscolar: "Genaro1",
    });

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const currentDate = formatDate(new Date());

    return (
        <LayoutPDF>
            <Img src="/header-pdf.jpg" alt="Imagen" />
            <H6 style={{ textAlign: "left" }}>FECHA: {currentDate}</H6>
            <H6 style={{ textAlign: "left" }}>DE: {formData.nombresEstudiante}</H6>
            <H6 style={{ textAlign: "left" }}>PARA: {formData.nombresJefe}</H6>

            <H2 style={{
                marginTop: 15,
                marginBottom: 18
            }}
            >Carta De Aceptacion De Pasantias</H2>

            <P>
                Reciba un caluroso saludo Fraterno, Socialista, Humanista y deseándoles a usted y a su equipo de trabajo el mayor bienestar posible que les permita continuar impulsando con trabajo comprometido el país que todos los venezolanos merecemos.
            </P>

            <P>
                Sr. <Strong>{formData.para}</Strong>, Titular de la cedula de Identidad: <Strong>{formData.cedulaJefe}</Strong>, que ocupa el cargo de: <Strong>{formData.cargo}</Strong>, en la prestigiosa empresa: <Strong>{formData.empresa}</Strong>, ubicada: <Strong>{formData.direccion}</Strong>, Por medio de la presente se notifica que el estudiante: <Strong>{formData.nombresEstudiante}</Strong>, titular de la cedula de Identidad: <Strong>{formData.cedulaEstudiante}</Strong>, perteneciente a nuestra casa de estudio: Ademar Vásquez Chávez, realizara las pasantías correspondiente al <Strong>año escolar: {formData.anoEscolar}</Strong>.
            </P>

            <P>
                Por lo que agradezco de antemano el apoyo y colaboración que puedan prestarle y así contribuir directamente a la formación de la nueva y el nuevo republicano que demanda la República Bolivariana de Venezuela.
            </P>

            <P>
                Sin más a que hacer referencia y segura de contar con toda la colaboración requerida, me despido.
            </P>

            <Center>
                <H6>PROFESORA VIRGINIA CONTRERAS</H6>
                <H6>COORDINADORA DE PASANTÍAS</H6>
                <P style={{ fontSize: "8px", textAlign: "center", margin: "2px" }}>E.T.C.R. - Av. Romulo Gallegos, Acarigua, Portuguesa
                </P>
                <P style={{ fontSize: "8px", textAlign: "center", margin: "2px" }}>Zona Postal : 3301 - Teléfono: 0255 6642385
                </P>
            </Center>
        </LayoutPDF>
    );
}

const PDFPage: React.FC = () => {
    return (
        <div>

            <PDFViewer width="100%" height="1500">
                <Documento />
            </PDFViewer>

        </div>
    );
}

export default PDFPage;