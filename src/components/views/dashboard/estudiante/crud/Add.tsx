import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn"
import { notify } from "@nano";
import LayoutDB from "../../layout/LayoutDB";

//iconos
import {
    FaUser,
    FaIdCard,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaGraduationCap,
    FaBriefcase,
    FaBuilding,
    FaBirthdayCake,
    FaShoePrints,
    FaSchool,
    FaRulerVertical,
    FaWeight,
    FaRulerCombined,
    FaHandPaper,
    FaChild,
    FaTshirt,
    FaRoad,
    FaWheelchair,
    FaHome,
    FaNotesMedical,
    FaPills,
    FaUserTie,
    FaCalendarAlt,
} from "react-icons/fa";

interface AddProps {

}

const Add: React.FC<AddProps> = () => {

    const [estudianteData, setEstudianteData] = useState({
        // informacion del usuario
        apellidos: "",
        nombres: "",
        sex: "",
        nacionalidad: "",

        ci: "",
        fecha_nacimiento: "",
        lugar_nacimiento: "",
        entd_federativa: "",

        plantel_de_procedencia: "",
        talla: "",
        peso: "",
        medidas: "",

        edad: "",
        lateralidad: "",
        talla_camisa: "",
        talla_pantalon: "",
        talla_zapato: "",
    });

    const [viaDeAccesoData, setViaDeAccesoData] = useState({
        via_de_acceso_al_lugar_donde_vive: "",
        reprecentante_legal: "",
        con_quien_vive: "",

        condicion_especial: "",
        observacion_de_condicion: "",

        el_estudiante_consume_medicamento: "",
        observacion_de_medicamento: "",
    });

    const [datosRepresentante, setDatosRepresentante] = useState({
        parentesco: "",
        apellidos: "",
        nombres: "",
        nacionalidad: "",
        cedula: "",

        urb_br: "",
        fecha_nacimiento: "",
        direccion_habitacion_av: "",
        calle: "",
        casa_apartamento: "",
        numero_habitacion: "",

        referencia: "",
        ciudad: "",
        parroquia: "",
        estado: "",
        telefono_habitacion: "",
        telefono_personal: "",

        email: "",
        nivelAcademico: "",
        profesion: "",
        lugarTrabajo: "",
        telefono_trabajo: "",
        cargo: "",
    });

    const [periodoEscolar, setPeriodoEscolar] = useState({
        inicio_periodo_escolar: "",
        fin_periodo_escolar: "",
    });

    const sex = [
        { value: "Masculino", label: "Masculino" },
        { value: "Femenino", label: "Femenino" },
    ];

    const nacionalidad = [
        { value: "Venezolano", label: "Venezolano" },
        { value: "Extranjero", label: "Extranjero" },
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
                                <h4>Informacion del estudiante</h4>
                            </div>
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Apellidos"
                                name="apellidos"
                                value={estudianteData.apellidos}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        apellidos: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Nombres"
                                name="nombres"
                                value={estudianteData.nombres}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        nombres: e.target.value,
                                    })
                                }
                            />
                            <SelectInput
                                icono={<FaUser />}
                                placeholder="Sexo:"
                                content={true}
                                name="sexo"
                                value={estudianteData.sex}
                                valueChange={(e: any) =>
                                    setEstudianteData({ ...estudianteData, sex: e.value })
                                }
                                options={sex}
                            />
                            <SelectInput
                                icono={<FaIdCard />}
                                placeholder="Nacionalidad:"
                                content={true}
                                name="nacionalidad"
                                value={estudianteData.nacionalidad}
                                valueChange={(e: any) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        nacionalidad: e.value,
                                    })
                                }
                                options={nacionalidad}
                            />
                            <Input
                                type="number"
                                icono={<FaIdCard />}
                                placeholder="Cédula de Identidad"
                                name="ci"
                                value={estudianteData.ci}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        ci: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="date"
                                placeholder="Fecha de Nacimiento"
                                icono={<FaBirthdayCake />}
                                name="fecha_nac"
                                hasContentState={true}
                                value={estudianteData.fecha_nacimiento}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        fecha_nacimiento: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Lugar de Nacimiento"
                                name="lugar_nacimiento"
                                value={estudianteData.lugar_nacimiento}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        lugar_nacimiento: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Entidad Federativa"
                                name="entd_federativa"
                                value={estudianteData.entd_federativa}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        entd_federativa: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaSchool />}
                                placeholder="Plantel de Procedencia"
                                name="plantel_de_procedencia"
                                value={estudianteData.plantel_de_procedencia}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        plantel_de_procedencia: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="number"
                                icono={<FaRulerVertical />}
                                placeholder="Talla"
                                name="talla"
                                value={estudianteData.talla}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        talla: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="number"
                                icono={<FaWeight />}
                                placeholder="Peso"
                                name="peso"
                                value={estudianteData.peso}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        peso: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaRulerCombined />}
                                placeholder="Medidas"
                                name="medidas"
                                value={estudianteData.medidas}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        medidas: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaChild />}
                                placeholder="Edad"
                                name="edad"
                                value={estudianteData.edad}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        edad: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaHandPaper />}
                                placeholder="Lateralidad"
                                name="lateralidad"
                                value={estudianteData.lateralidad}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        lateralidad: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="number"
                                icono={<FaTshirt />}
                                placeholder="Talla de Camisa"
                                name="talla_camisa"
                                value={estudianteData.talla_camisa}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        talla_camisa: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="number"
                                icono={<FaSchool />}
                                placeholder="Talla de Pantalón"
                                name="talla_pantalon"
                                value={estudianteData.talla_pantalon}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        talla_pantalon: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="number"
                                icono={<FaShoePrints />}
                                placeholder="Talla de Zapato"
                                name="talla_zapato"
                                value={estudianteData.talla_zapato}
                                valueChange={(e) =>
                                    setEstudianteData({
                                        ...estudianteData,
                                        talla_zapato: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Informacion de habitacion</h4>
                            </div>
                            <Input
                                className="grid-2-columns"
                                type="text"
                                icono={<FaRoad />}
                                placeholder="Vía de acceso al lugar donde vive"
                                name="via_de_acceso_al_lugar_donde_vive"
                                value={viaDeAccesoData.via_de_acceso_al_lugar_donde_vive}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        via_de_acceso_al_lugar_donde_vive: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaUserTie />}
                                placeholder="Representante Legal"
                                name="reprecentante_legal"
                                value={viaDeAccesoData.reprecentante_legal}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        reprecentante_legal: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaHome />}
                                placeholder="Con quién vive"
                                name="con_quien_vive"
                                value={viaDeAccesoData.con_quien_vive}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        con_quien_vive: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaWheelchair />}
                                placeholder="Condición Especial"
                                name="condicion_especial"
                                value={viaDeAccesoData.condicion_especial}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        condicion_especial: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaNotesMedical />}
                                placeholder="Observación de Condición"
                                name="observacion_de_condicion"
                                value={viaDeAccesoData.observacion_de_condicion}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        observacion_de_condicion: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaPills />}
                                placeholder="El estudiante consume medicamento"
                                name="el_estudiante_consume_medicamento"
                                value={viaDeAccesoData.el_estudiante_consume_medicamento}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        el_estudiante_consume_medicamento: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaNotesMedical />}
                                placeholder="Observación de Medicamento"
                                name="observacion_de_medicamento"
                                value={viaDeAccesoData.observacion_de_medicamento}
                                valueChange={(e) =>
                                    setViaDeAccesoData({
                                        ...viaDeAccesoData,
                                        observacion_de_medicamento: e.target.value,
                                    })
                                }
                            />
                        </div>


                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Informacion del Representante legal</h4>
                            </div>
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Parentesco"
                                name="parentesco"
                                value={datosRepresentante.parentesco}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        parentesco: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Apellidos"
                                name="apellidos"
                                value={datosRepresentante.apellidos}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        apellidos: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Nombres"
                                name="nombres"
                                value={datosRepresentante.nombres}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        nombres: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <SelectInput
                                icono={<FaIdCard />}
                                placeholder="Nacionalidad"
                                content={true}
                                name="nacionalidad"
                                value={datosRepresentante.nacionalidad}
                                valueChange={(e: any) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        nacionalidad: e.value,
                                    })
                                }
                                options={nacionalidad}
                            />
                            <Input
                                type="number"
                                icono={<FaIdCard />}
                                placeholder="Cédula"
                                name="cedula"
                                value={datosRepresentante.cedula}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        cedula: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Urbanización/Barrio"
                                name="urb_br"
                                value={datosRepresentante.urb_br}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        urb_br: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="date"
                                icono={<FaBirthdayCake />}
                                placeholder="Fecha de Nacimiento"
                                name="fecha_nacimiento"
                                value={datosRepresentante.fecha_nacimiento}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        fecha_nacimiento: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Dirección de Habitación (Avenida)"
                                name="direccion_habitacion_av"
                                value={datosRepresentante.direccion_habitacion_av}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        direccion_habitacion_av: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Calle"
                                name="calle"
                                value={datosRepresentante.calle}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        calle: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Casa/Apartamento"
                                name="casa_apartamento"
                                value={datosRepresentante.casa_apartamento}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        casa_apartamento: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Número de Habitación"
                                name="numero_habitacion"
                                value={datosRepresentante.numero_habitacion}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        numero_habitacion: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Referencia"
                                name="referencia"
                                value={datosRepresentante.referencia}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        referencia: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Ciudad"
                                name="ciudad"
                                value={datosRepresentante.ciudad}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        ciudad: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Parroquia"
                                name="parroquia"
                                value={datosRepresentante.parroquia}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        parroquia: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaMapMarkerAlt />}
                                placeholder="Estado"
                                name="estado"
                                value={datosRepresentante.estado}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        estado: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaPhone />}
                                placeholder="Teléfono de Habitación"
                                name="telefono_habitacion"
                                value={datosRepresentante.telefono_habitacion}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        telefono_habitacion: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="number"
                                icono={<FaPhone />}
                                placeholder="Teléfono Personal"
                                name="telefono_personal"
                                value={datosRepresentante.telefono_personal}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        telefono_personal: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="email"
                                icono={<FaEnvelope />}
                                placeholder="Email"
                                name="email"
                                value={datosRepresentante.email}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        email: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaGraduationCap />}
                                placeholder="Nivel Académico"
                                name="nivelAcademico"
                                value={datosRepresentante.nivelAcademico}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        nivelAcademico: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaBriefcase />}
                                placeholder="Profesión"
                                name="profesion"
                                value={datosRepresentante.profesion}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        profesion: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaBuilding />}
                                placeholder="Lugar de Trabajo"
                                name="lugarTrabajo"
                                value={datosRepresentante.lugarTrabajo}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        lugarTrabajo: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="number"
                                icono={<FaPhone />}
                                placeholder="Teléfono de Trabajo"
                                name="telefono_trabajo"
                                value={datosRepresentante.telefono_trabajo}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        telefono_trabajo: e.target.value,
                                    })
                                }
                                required={true}
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Cargo"
                                name="cargo"
                                value={datosRepresentante.cargo}
                                valueChange={(e) =>
                                    setDatosRepresentante({
                                        ...datosRepresentante,
                                        cargo: e.target.value,
                                    })
                                }
                                required={true}
                            />
                        </div>

                        <div className="grid-2">
                            <div className="title grid-span-2">
                                <h4>Periodo</h4>
                            </div>
                            <Input
                                hasContentState={true}
                                type="date"
                                icono={<FaCalendarAlt />}
                                placeholder="Inicio del Periodo Escolar"
                                name="inicio_periodo_escolar"
                                value={periodoEscolar.inicio_periodo_escolar}
                                valueChange={(e) =>
                                    setPeriodoEscolar({
                                        ...periodoEscolar,
                                        inicio_periodo_escolar: e.target.value,
                                    })
                                }
                                required={false}
                            />
                            <Input
                                hasContentState={true}
                                type="date"
                                icono={<FaCalendarAlt />}
                                placeholder="Fin del Periodo Escolar"
                                name="fin_periodo_escolar"
                                value={periodoEscolar.fin_periodo_escolar}
                                valueChange={(e) =>
                                    setPeriodoEscolar({
                                        ...periodoEscolar,
                                        fin_periodo_escolar: e.target.value,
                                    })
                                }
                                required={false}
                            />
                        </div>

                        <div className="container-footer">
                            <BtnSubmitBasic text="Agregar" />
                        </div>
                    </form>
                </div>

            </LayoutDB>
        </>
    );
}

export default Add;