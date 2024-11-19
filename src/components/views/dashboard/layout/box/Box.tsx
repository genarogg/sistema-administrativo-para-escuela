
interface BoxProps {
    titulo: string;
    children: React.ReactNode;
    btns?: React.ReactNode;
    search?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ titulo, children, btns, search }) => {
    return (
        <>
            <div className="box-container">
                <div className="contenido">
                    <div className="contenido-header">
                        {btns && <div className="btns">{btns}</div>}
                        <h3>{titulo}</h3>
                        {search && <div className="search">{search}</div>}
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