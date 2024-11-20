import React, { useState } from "react";
import { Input, TextArea } from "@form";
import { BtnSubmitBasic, BtnNormalBasic } from "@btn";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { HiIdentification } from "react-icons/hi2";

const MySwal = withReactContent(Swal);

interface AddProps {
    fn?: () => void;
    tipoAction: string;
}

const Add: React.FC<AddProps> = ({ tipoAction }) => {
    const [formData, setFormData] = useState({
        ci: "",
        comentario: "",
        activeComentario: false,
    });

    const showAlert = () => {
        let ci = formData.ci;
        let comentario = formData.comentario;

        MySwal.fire({
            title: 'Registrar Información',
            html: (
                <div className="aside-asistencia">
                    <input
                        type="text"
                        placeholder="Cédula de identidad"
                        value={ci}
                        onChange={(e) => ci = e.target.value}
                        className="swal2-input"
                    />
                    {formData.activeComentario &&
                        <textarea
                            placeholder="Comentario"
                            value={comentario}
                            onChange={(e) => comentario = e.target.value}
                            className="swal2-textarea"
                        />
                    }
                </div>
            ),
            showCancelButton: true,
            confirmButtonText: 'Registrar',
            preConfirm: () => {
                // Actualiza el estado del formulario con los valores ingresados
                setFormData({ ...formData, ci, comentario });
                // Aquí puedes manejar el envío del formulario
                console.log('Datos del formulario:', { ci, comentario });
                // Resetea el formulario después de enviar
                setFormData({ ci: "", comentario: "", activeComentario: false });
            }
        });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Lógica para manejar el envío del formulario
        } catch (error) {
            console.error("Error al recuperar los datos de los empleados:", error);
        }
    };

    return (
        <div>
            <BtnNormalBasic onClick={showAlert}>Mostrar Alerta</BtnNormalBasic>
        </div>
    );
};

export default Add;