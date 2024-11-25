import LayoutDB from "../layout/LayoutDB";
import { Input } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import { Documento } from "@/pages/pdf/pasantias";
import { MakePDF } from "@pdf"
import React, { useState } from "react";
import {
    FaUser,
    FaIdCard,
    FaBriefcase,
    FaBuilding,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaArrowRight,
    FaArrowLeft
} from "react-icons/fa";

interface Pasantias_AceptadoProps { }

const Pasantias_Aceptado: React.FC<Pasantias_AceptadoProps> = () => {
    const [formData, setFormData] = useState({
        nombresJefe: "",
        cedulaJefe: "",
        nombresEstudiante: "",
        cedulaEstudiante: "",
        cargo: "",
        empresa: "",
        direccion: "",
        fecha: "",
        de: "",
        para: "",
        presentacion: "",
        carta: "",
        anoEscolar: ""
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== "");
    };

    return (
        <LayoutDB where="pasantias_pceptado">
            <div className="container-form">
                <form
                    className="form-basic grid-2"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(e);
                    }}
                >
                    <div className="title grid-span-2">
                        <h4>Carta de Aceptación de Pasantías</h4>
                    </div>

                    <Input
                        type="text"
                        icono={<FaUser />}
                        placeholder="Nombres del Jefe"
                        name="nombresJefe"
                        value={formData.nombresJefe}
                        valueChange={(e) =>
                            setFormData({ ...formData, nombresJefe: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaIdCard />}
                        placeholder="Cédula del Jefe"
                        name="cedulaJefe"
                        value={formData.cedulaJefe}
                        valueChange={(e) =>
                            setFormData({ ...formData, cedulaJefe: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaUser />}
                        placeholder="Nombres del Estudiante"
                        name="nombresEstudiante"
                        value={formData.nombresEstudiante}
                        valueChange={(e) =>
                            setFormData({ ...formData, nombresEstudiante: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaIdCard />}
                        placeholder="Cédula del Estudiante"
                        name="cedulaEstudiante"
                        value={formData.cedulaEstudiante}
                        valueChange={(e) =>
                            setFormData({ ...formData, cedulaEstudiante: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaBriefcase />}
                        placeholder="Cargo"
                        name="cargo"
                        value={formData.cargo}
                        valueChange={(e) =>
                            setFormData({ ...formData, cargo: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaBuilding />}
                        placeholder="Empresa"
                        name="empresa"
                        value={formData.empresa}
                        valueChange={(e) =>
                            setFormData({ ...formData, empresa: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaMapMarkerAlt />}
                        placeholder="Dirección"
                        name="direccion"
                        value={formData.direccion}
                        valueChange={(e) =>
                            setFormData({ ...formData, direccion: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaCalendarAlt />}
                        placeholder="Fecha"
                        name="fecha"
                        value={formData.fecha}
                        valueChange={(e) =>
                            setFormData({ ...formData, fecha: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaArrowLeft />}
                        placeholder="De"
                        name="de"
                        value={formData.de}
                        valueChange={(e) =>
                            setFormData({ ...formData, de: e.target.value })
                        }
                    />
                    <Input
                        type="text"
                        icono={<FaArrowRight />}
                        placeholder="Para"
                        name="para"
                        value={formData.para}
                        valueChange={(e) =>
                            setFormData({ ...formData, para: e.target.value })
                        }
                    />

                    <Input
                        type="text"
                        icono={<FaArrowRight />}
                        placeholder="Año Escolar"
                        name="anoEscolar"
                        value={formData.anoEscolar}
                        valueChange={(e) =>
                            setFormData({ ...formData, anoEscolar: e.target.value })
                        }
                    />

                    <BtnSubmitBasic className="grid-span-2" >
                        <MakePDF
                            document={<Documento state={formData} />}
                            namePDF="Carta de Aceptación de Pasantías"
                        >
                            Generar PDF
                        </MakePDF>
                    </BtnSubmitBasic>

                </form>
            </div>
        </LayoutDB>
    );
}

export default Pasantias_Aceptado;