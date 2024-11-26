import React, { useState } from "react";
import { Input, TextArea } from "@form";
import { BtnSubmitBasic, BtnNormalBasic } from "@btn";
import { FaIdCard } from "react-icons/fa";
import { notify } from "@nano";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import router from "next/router";



interface AddProps {
    fn?: () => void;
    tipoAction: string;
    children?: React.ReactNode;
}

const Add: React.FC<AddProps> = ({ tipoAction, children }) => {
    const [formData, setFormData] = useState({
        ci: "",
        comentario: "",
        activeComentario: false,
    });

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            ci: formData.ci,
            comentario: formData.comentario,
            tipoAction,
        };

        const token = localStorage.getItem("token");

        const url = `${process.env.NEXT_PUBLIC_API_URL}/asistencia/registrar`;


        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            notify({ message: result.message, type: result.type });
            
            setOpen(false);

            if (response.ok) {
                console.log("Empleado registrado con éxito");

                /* router.push("/dashboard/estudiante"); */
            }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }

    };
    return (
        <div>
            <BtnNormalBasic onClick={onOpenModal}>{children}</BtnNormalBasic>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>registrar {tipoAction}</h2>
                <form onSubmit={onSubmit}>
                    <Input
                        icono={<FaIdCard />}
                        type="text"
                        placeholder="CI"
                        name="ci"
                        hasContentState={true}
                        value={formData.ci}
                        valueChange={(e) =>
                            setFormData({
                                ...formData,
                                ci: e.target.value,
                            })
                        }
                    />
                    <TextArea
                        name="comentario"
                        placeholder="Comentario"
                        content={true}
                        value={formData.comentario}
                        valueChange={(e) =>
                            setFormData({
                                ...formData,
                                comentario: e.target.value,
                            })
                        }
                        required={false}
                    />
                    <BtnSubmitBasic text="Enviar"></BtnSubmitBasic>
                </form>
            </Modal>
        </div>
    );
};

export default Add;