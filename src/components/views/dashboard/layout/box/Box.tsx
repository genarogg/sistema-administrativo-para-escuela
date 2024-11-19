
interface BoxProps {
    titulo: string;
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ titulo, children }) => {
    return (
        <>
            <div className="box-container">
                <div className="contenido">
                    <div className="contenido-header">
                        <h3>{titulo}</h3>
                    </div>
                    <div className="contenido-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Box;