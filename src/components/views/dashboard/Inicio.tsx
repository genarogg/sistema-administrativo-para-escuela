import LayoutDB from "./layout/LayoutDB";

interface InicioProps {

}

const Inicio: React.FC<InicioProps> = () => {
    return (
        <LayoutDB>
            <p>hola</p>
        </LayoutDB>
    );
}

export default Inicio;