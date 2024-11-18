import { TitleSection } from "../index";
import Image from "next/image";

interface Simple2GridProps {
    titleSection?: string;
    titleId?: string;
    titleClassName?: string;
    textContent: React.ReactNode;
    imgSrc: string;
    imgAlt?: string;
    reorder?: boolean;
    sizeImg?: number;
}

const Simple2Grid: React.FC<Simple2GridProps> = ({
    titleSection,
    titleId,
    titleClassName,
    textContent,
    imgSrc,
    imgAlt = "Imagen",
    reorder = false,
    sizeImg = 500
}) => {
    return (
        <div className="simple-grid2">
            {titleSection && <TitleSection titulo={titleSection} id={titleId} className={titleClassName} />}

            <div className="grid">
                <div className={`box ${reorder ? "order-1" : ""}`}>
                    {textContent}
                </div>
                <div className={`box ${reorder ? "order-2" : ""}`}>
                    <Image src={imgSrc} alt={imgAlt} layout="responsive" width={sizeImg} height={sizeImg} className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Simple2Grid;