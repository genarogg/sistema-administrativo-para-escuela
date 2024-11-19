import LayoutDB from "../layout/LayoutDB";
import Image from "next/image";
import { Input } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import React, { useState, useEffect } from "react";
import {
    FaSchool,
    FaMapMarkerAlt,
    FaCodeBranch,
    FaBuilding,
    FaAddressCard,
} from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";


interface PlantelProps {

}

const Plantel: React.FC<PlantelProps> = () => {

    const initialPlantelState = {
        id: 1,
        cod_cir: "",
        nombre_circuito: "",
        comuna: "",
        consejo_comunal: "",
        codigo_plantel: "",
        codigo_estadistico: "",
        codigo_dependencia: "",
        nombre_plantel: "",
        direccion_institucion: "",
        nivel_modalidad: "",
        dependencia_administrativa: "",
    };

    const [formData, setFormData] = useState(initialPlantelState);

    useEffect(() => {

    }, []);


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <LayoutDB where="plantel" titulo="Información del Plantel" >
            <div className="container-form">
                <form
                    className="form-basic"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(e);
                    }}
                >

                    <Input
                        type="text"
                        icono={<FaCodeBranch />}
                        placeholder="Código CIR"
                        name="cod_cir"
                        value={formData.cod_cir}
                        valueChange={(e) =>
                            setFormData({ ...formData, cod_cir: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaSchool />}
                        placeholder="Nombre del Circuito"
                        name="nombre_circuito"
                        value={formData.nombre_circuito}
                        valueChange={(e) =>
                            setFormData({ ...formData, nombre_circuito: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaMapMarkerAlt />}
                        placeholder="Comuna"
                        name="comuna"
                        value={formData.comuna}
                        valueChange={(e) =>
                            setFormData({ ...formData, comuna: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaMapMarkerAlt />}
                        placeholder="Consejo Comunal"
                        name="consejo_comunal"
                        value={formData.consejo_comunal}
                        valueChange={(e) =>
                            setFormData({ ...formData, consejo_comunal: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaBuilding />}
                        placeholder="Código del Plantel"
                        name="codigo_plantel"
                        value={formData.codigo_plantel}
                        valueChange={(e) =>
                            setFormData({ ...formData, codigo_plantel: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaBuilding />}
                        placeholder="Código Estadístico"
                        name="codigo_estadistico"
                        value={formData.codigo_estadistico}
                        valueChange={(e) =>
                            setFormData({ ...formData, codigo_estadistico: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaBuilding />}
                        placeholder="Código de Dependencia"
                        name="codigo_dependencia"
                        value={formData.codigo_dependencia}
                        valueChange={(e) =>
                            setFormData({ ...formData, codigo_dependencia: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaSchool />}
                        placeholder="Nombre del Plantel"
                        name="nombre_plantel"
                        value={formData.nombre_plantel}
                        valueChange={(e) =>
                            setFormData({ ...formData, nombre_plantel: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<FaAddressCard />}
                        placeholder="Dirección de la Institución"
                        name="direccion_institucion"
                        value={formData.direccion_institucion}
                        valueChange={(e) =>
                            setFormData({
                                ...formData,
                                direccion_institucion: e.target.value,
                            })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<MdOutlineAdminPanelSettings />}
                        placeholder="Nivel Modalidad"
                        name="nivel_modalidad"
                        value={formData.nivel_modalidad}
                        valueChange={(e) =>
                            setFormData({ ...formData, nivel_modalidad: e.target.value })
                        }
                        hasContentState={true}
                    />
                    <Input
                        type="text"
                        icono={<MdOutlineAdminPanelSettings />}
                        placeholder="Dependencia Administrativa"
                        name="dependencia_administrativa"
                        value={formData.dependencia_administrativa}
                        valueChange={(e) =>
                            setFormData({
                                ...formData,
                                dependencia_administrativa: e.target.value,
                            })
                        }
                        hasContentState={true}
                    />

                    
                    <BtnSubmitBasic text="Actualizar info" />
                </form>
            </div>

        </LayoutDB>
    );
}

export default Plantel;