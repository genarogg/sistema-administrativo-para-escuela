import LayoutDB from "../layout/LayoutDB";
import Image from "next/image";

interface InicioProps {

}

const Inicio: React.FC<InicioProps> = () => {
    return (
        <LayoutDB where="personal" titulo="Personal">
        <p></p>
          
        </LayoutDB>
    );
}

export default Inicio;