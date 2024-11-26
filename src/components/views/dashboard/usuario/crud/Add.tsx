import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import LayoutDB from "../../layout/LayoutDB";
// iconos
import { FaUser, FaEnvelope, FaLock, FaIdCard, FaBriefcase, FaUserTag } from "react-icons/fa";
import router from "next/router";

interface AddProps { }

const Add: React.FC<AddProps> = () => {
    const [usuarioData, setUsuarioData] = useState({
        // informacion del usuario
        nombres: "",
        apellidos: "",
        email: "",
        password: "",
        rool: "",
        ci: "",
        cargo_institucional: "",
        usuario: "",
    });

    const rool = [
        { value: "user", label: "User" },
        { value: "admin", label: "Admin" },
    ];

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            ...usuarioData
        };

        const token = localStorage.getItem("token");

        const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            console.log(result);

            notify({ message: result.message, type: result.type });


            if (response.ok) {
                console.log("Empleado registrado con éxito");

                router.push("/dashboard/usuario");
            }

        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
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
                                <h4>Informacion del usuario</h4>
                            </div>
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Nombres"
                                name="nombres"
                                value={usuarioData.nombres}
                                valueChange={(e) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        nombres: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaUser />}
                                placeholder="Apellidos"
                                name="apellidos"
                                value={usuarioData.apellidos}
                                valueChange={(e) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        apellidos: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="email"
                                icono={<FaEnvelope />}
                                placeholder="Email"
                                name="email"
                                value={usuarioData.email}
                                valueChange={(e) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="password"
                                icono={<FaLock />}
                                placeholder="Password"
                                name="password"
                                value={usuarioData.password}
                                valueChange={(e) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaIdCard />}
                                placeholder="Cédula de Identidad"
                                name="ci"
                                value={usuarioData.ci}
                                valueChange={(e) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        ci: e.target.value,
                                    })
                                }
                            />
                            <Input
                                type="text"
                                icono={<FaBriefcase />}
                                placeholder="Cargo Institucional"
                                name="cargo_institucional"
                                value={usuarioData.cargo_institucional}
                                valueChange={(e) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        cargo_institucional: e.target.value,
                                    })
                                }
                            />
                            <SelectInput
                                icono={<FaUserTag />}
                                placeholder="Rool"
                                name="rool"
                                value={usuarioData.rool}
                                valueChange={(e: any) =>
                                    setUsuarioData({
                                        ...usuarioData,
                                        rool: e.value,
                                    })
                                }
                                options={rool}
                                content={true}
                                className="grid-span-2"
                            />
                        </div>
                        <div className="container-footer">
                            <BtnSubmitBasic text="Agregar" loading={false} />
                        </div>
                    </form>
                </div>
            </LayoutDB>
        </>
    );
};

export default Add;