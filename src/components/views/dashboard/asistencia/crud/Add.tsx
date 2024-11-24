import React, { useState } from "react";
import { Input, TextArea } from "@form";
import { BtnSubmitBasic, BtnNormalBasic } from "@btn";
import { FaIdCard } from "react-icons/fa";

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';



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

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Lógica para manejar el envío del formulario
            console.log(formData);
            onCloseModal();
        } catch (error) {
            console.error("Error al recuperar los datos de los empleados:", error);
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
                    />
                    <BtnSubmitBasic text="Enviar"></BtnSubmitBasic>
                </form>
            </Modal>
        </div>
    );
};

export default Add;