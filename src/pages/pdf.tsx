import React from 'react';
import dynamic from 'next/dynamic';
import { LayoutPDF, Img, P, H1, H2, H3, H4, H5, H6, Strong, Em, U, Small, Blockquote, Mark } from '@pdf';

// Importar PDFViewer dinámicamente solo en el lado del cliente
const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), { ssr: false });

const Documento = () => {
    return (
        <LayoutPDF>
            <H1>Titulo</H1>
            <H2>Subtitulo</H2>
            <H3>Subtitulo</H3>
            <H4>Subtitulo</H4>
            <H5>Subtitulso</H5>
            <H6>Subtituldo2</H6>

            <P>
                <Strong >Lorem ipsum dolor</Strong> sit, amet consectetur adipisicing elit. Dolores, hic? <Em>Pariatur</Em>  modi dolores praesentium aperiam, ex, dolor soluta iure voluptatum quis sint ullam, fuga cumque ea nisi laborum? Sint, voluptatem.
            </P>
            <P>
                <Mark>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,</Mark> hic? Pariatur modi dolores praesentium <U>aperiam</U> , ex, dolor soluta iure voluptatum quis sint ullam, fuga <Small>cumque</Small>  ea nisi laborum? Sint, <Blockquote>voluptatem.</Blockquote>
            </P>

            <Img src="/home/bgHome.jpg" alt="Imagen" />

            <H1>Titulo</H1>
            <H2>Subtitulo</H2>
            <H3>Subtitulo</H3>
            <H4>Subtitulo</H4>
            <H5>Subtitulso</H5>
            <H6>Subtituldo2</H6>

            <P>
                <Strong >Lorem ipsum dolor</Strong> sit, amet consectetur adipisicing elit. Dolores, hic? <Em>Pariatur</Em>  modi dolores praesentium aperiam, ex, dolor soluta iure voluptatum quis sint ullam, fuga cumque ea nisi laborum? Sint, voluptatem.
            </P>
            <P>
                <Mark>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,</Mark> hic? Pariatur modi dolores praesentium <U>aperiam</U> , ex, dolor soluta iure voluptatum quis sint ullam, fuga <Small>cumque</Small>  ea nisi laborum? Sint, <Blockquote>voluptatem.</Blockquote>
            </P>

            <Img src="/home/bgHome.jpg" alt="Imagen" />
        </LayoutPDF>
    );
}

const PDFPage: React.FC = () => {
    return (
        <div>
            {typeof window !== 'undefined' && (
                <PDFViewer width="100%" height="1500">
                    <Documento />
                </PDFViewer>
            )}
        </div>
    );
}

export default PDFPage;