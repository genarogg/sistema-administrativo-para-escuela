
interface BoxProps {

}

const Box: React.FC<BoxProps> = () => {
    return (
        <>
            <div className="box">
                <div className="aside">
                    <div className="aside-content">
                        <div className="aside-header">
                            <h3>hola2</h3>
                        </div>
                        <div className="aside-body">
                            <p>hola</p>
                        </div>
                    </div>
                </div>
                <div className="contenido">
                    <div className="contenido-header">
                        <h3>hola</h3>
                    </div>
                    <div className="contenido-body">
                        <p>hola</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Box;