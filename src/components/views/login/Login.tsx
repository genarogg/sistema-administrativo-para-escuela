import { WallPaperBasico } from "@wallpaper";
import Layout from "@layout";

import Form from "./form/Form";

import { redesSociales } from "../../../const/redesSociales";

interface LoginProps { }



const Login: React.FC<LoginProps> = () => {
    return (
        <Layout>
            <WallPaperBasico img={"/home/download.jpg"} redesSociales={redesSociales}>
                <div className="login-page">
                    <div className="constiner-all-contacto">
                        <div className="container-contacto">
                            <Form />
                        </div>
                    </div>
                </div>

            </WallPaperBasico>
        </Layout>
    );
};

export default Login;