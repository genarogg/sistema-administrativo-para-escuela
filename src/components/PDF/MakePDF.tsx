import React from "react";
import dynamic from 'next/dynamic';
import { BlobProvider } from "@react-pdf/renderer";
import { BtnNormalBasic} from "@btn";

interface MakePDFProps {
    namePDF?: string;
    document: React.ReactElement;
    children?: React.ReactNode;
}

const MakePDF: React.FC<MakePDFProps> = ({ namePDF = "documento.pdf", document, children = "Descargar PDF" }) => {
    // Verifica si estamos en un entorno de navegador
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <BlobProvider document={document}>
            {({ blob, url, loading, error }) => {
                // Si el PDF aún se está generando, muestra un texto de carga
                if (loading) {
                    return "Cargando documento...";
                }

                // Si hay un error, muéstralo
                if (error) {
                    return `Error: ${error.message}`;
                }

                // Crea una URL para el blob
                let pdfURL = "";
                if (blob !== null) {
                    pdfURL = URL.createObjectURL(blob);
                }

                // Cuando el PDF esté listo, muestra un enlace para descargarlo
                return (
                    <div className="containerDownload">
                        <a href={pdfURL} download={namePDF}>
                            {children}
                        </a>
                    </div>
                );
            }}
        </BlobProvider>
    );
};

export default dynamic(() => Promise.resolve(MakePDF), { ssr: false });