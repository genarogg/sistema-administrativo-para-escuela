import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn"
import { notify } from "@nano";
import LayoutDB from "../../layout/LayoutDB";

//iconos
import {
    FaBuilding,
    FaUser,
    FaPhone,
    FaClipboard,
    FaFileAlt,
    FaCheck,
    FaTimes,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaIdCard,
} from "react-icons/fa";
interface AddProps {

}

const Add: React.FC<AddProps> = () => {
    const [formData, setFormData] = useState({
        nombreEmpresa: "",
        direccionEmpresa: "",
        puntoDeReferencia: "",
        nombreYApellidoAquienDirigir: "",
        cargoAquienDirigir: "",
        telefonoEmpresa: "",
        asignatura: "",
        docenteTutor: "",
        fecha: "",
        evaluacion: "",
        nombre: "",
        apellido: "",
        cedula: "",
        telefono: "",
        fotoTipoDeCarnet: false,
        copiaDeCedula: false,
        copiaRIF: false,
        copiaDePartidaDeNacimiento: false,
        constanciaDeResidencia: false,
        carnetMilitar: false,
        certificadoDeSalud: false,
        examenMedico: false,
        cartaDePostulacion: false,
        sintesisCurricular: false,
        aprobado: false,
        motivo: "",
    });

    const booleanOptions = [
        { value: true, label: "Sí" },
        { value: false, label: "No" },
    ];

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <LayoutDB where="add-estudiante">
                <div className="container-form">
                    <form
                        className="form-basic"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit(e);
                        }}
                    >
                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Información de la Empresa</h4>
                            </div>
                            <Input
                                type="text"
                                icono={<FaBuilding />}
                                placeholder="Nombre Empresa"
                                name="nombreEmpresa"
                                value={formData.nombreEmpresa}
                                valueChange={(e) =>
                                    setFormData({ ...formData, nombreEmpresa: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaBuilding />}
                                placeholder="Dirección Empresa"
                                name="direccionEmpresa"
                                value={formData.direccionEmpresa}
                                valueChange={(e) =>
                                    setFormData({ ...formData, direccionEmpresa: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Punto de Referencia"
                                name="puntoDeReferencia"
                                value={formData.puntoDeReferencia}
                                valueChange={(e) =>
                                    setFormData({ ...formData, puntoDeReferencia: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Nombre y Apellido a Quien Dirigir"
                                name="nombreYApellidoAquienDirigir"
                                value={formData.nombreYApellidoAquienDirigir}
                                valueChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nombreYApellidoAquienDirigir: e.target.value,
                                    })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Cargo a Quien Dirigir"
                                name="cargoAquienDirigir"
                                value={formData.cargoAquienDirigir}
                                valueChange={(e) =>
                                    setFormData({ ...formData, cargoAquienDirigir: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaPhone />}
                                placeholder="Teléfono Empresa"
                                name="telefonoEmpresa"
                                value={formData.telefonoEmpresa}
                                valueChange={(e) =>
                                    setFormData({ ...formData, telefonoEmpresa: e.target.value })
                                }
                                hasContentState={true}
                            />
                        </div>

                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Información de las Materias Pendientes</h4>
                            </div>
                            <Input
                                type="text"
                                icono={<FaClipboard />}
                                placeholder="Asignatura"
                                name="asignatura"
                                value={formData.asignatura}
                                valueChange={(e) =>
                                    setFormData({ ...formData, asignatura: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Docente Tutor"
                                name="docenteTutor"
                                value={formData.docenteTutor}
                                valueChange={(e) =>
                                    setFormData({ ...formData, docenteTutor: e.target.value })
                                }
                                hasContentState={true}
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
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaClipboard />}
                                placeholder="Evaluación"
                                name="evaluacion"
                                value={formData.evaluacion}
                                valueChange={(e) =>
                                    setFormData({ ...formData, evaluacion: e.target.value })
                                }
                                hasContentState={true}
                            />
                        </div>


                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Información del Pasante</h4>
                            </div>
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Nombre"
                                name="nombre"
                                value={formData.nombre}
                                valueChange={(e) =>
                                    setFormData({ ...formData, nombre: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Apellido"
                                name="apellido"
                                value={formData.apellido}
                                valueChange={(e) =>
                                    setFormData({ ...formData, apellido: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaIdCard />}
                                placeholder="Cédula"
                                name="cedula"
                                value={formData.cedula}
                                valueChange={(e) =>
                                    setFormData({ ...formData, cedula: e.target.value })
                                }
                                hasContentState={true}
                            />
                            <Input
                                type="text"
                                icono={<FaPhone />}
                                placeholder="Teléfono"
                                name="telefono"
                                value={formData.telefono}
                                valueChange={(e) =>
                                    setFormData({ ...formData, telefono: e.target.value })
                                }
                                hasContentState={true}
                            />
                        </div>

                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Documentación</h4>
                            </div>
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Foto Tipo de Carnet"
                                name="fotoTipoDeCarnet"
                                value={formData.fotoTipoDeCarnet}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, fotoTipoDeCarnet: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Copia de Cédula"
                                name="copiaDeCedula"
                                value={formData.copiaDeCedula}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, copiaDeCedula: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Copia RIF"
                                name="copiaRIF"
                                value={formData.copiaRIF}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, copiaRIF: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Copia de Partida de Nacimiento"
                                name="copiaDePartidaDeNacimiento"
                                value={formData.copiaDePartidaDeNacimiento}
                                valueChange={(e: any) =>
                                    setFormData({
                                        ...formData,
                                        copiaDePartidaDeNacimiento: e.value,
                                    })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Constancia de Residencia"
                                name="constanciaDeResidencia"
                                value={formData.constanciaDeResidencia}
                                valueChange={(e: any) =>
                                    setFormData({
                                        ...formData,
                                        constanciaDeResidencia: e.value,
                                    })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Carnet Militar"
                                name="carnetMilitar"
                                value={formData.carnetMilitar}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, carnetMilitar: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Certificado de Salud"
                                name="certificadoDeSalud"
                                value={formData.certificadoDeSalud}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, certificadoDeSalud: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Examen Médico"
                                name="examenMedico"
                                value={formData.examenMedico}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, examenMedico: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Carta de Postulación"
                                name="cartaDePostulacion"
                                value={formData.cartaDePostulacion}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, cartaDePostulacion: e.value })
                                }
                                options={booleanOptions}
                            />
                            <SelectInput
                                icono={<FaFileAlt />}
                                placeholder="Síntesis Curricular"
                                name="sintesisCurricular"
                                value={formData.sintesisCurricular}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, sintesisCurricular: e.value })
                                }
                                options={booleanOptions}
                            />
                        </div>

                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Status</h4>
                            </div>
                            <SelectInput
                                icono={<FaCheck />}
                                placeholder="Aprobado"
                                name="aprobado"
                                value={formData.aprobado}
                                valueChange={(e: any) =>
                                    setFormData({ ...formData, aprobado: e.value })
                                }
                                options={booleanOptions}
                            />
                            <Input
                                type="text"
                                icono={<FaTimes />}
                                placeholder="Motivo"
                                name="motivo"
                                value={formData.motivo}
                                valueChange={(e) =>
                                    setFormData({ ...formData, motivo: e.target.value })
                                }
                                hasContentState={true}
                            />
                        </div>
                        <div className="container-footer">
                            <BtnSubmitBasic text="Procesar solicitud" />
                        </div>
                    </form>
                </div>

            </LayoutDB>
        </>
    );
}

export default Add;