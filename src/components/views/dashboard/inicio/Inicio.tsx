import LayoutDB from "../layout/LayoutDB";
import Image from "next/image";

interface InicioProps {

}

const Inicio: React.FC<InicioProps> = () => {
    return (
        <LayoutDB where="inicio">

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Image
                    alt="Mountains"
                    // Importing an image will
                    // automatically set the width and height
                    src="/dboard/logo.png"
                    sizes="70vw"
                    // Make the image display full width
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={500}
                />
            </div>
        </LayoutDB>
    );
}

export default Inicio;