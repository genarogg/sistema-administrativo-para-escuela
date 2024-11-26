import { useEffect } from "react";

import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { EmpleadoTypes, configTablet, staticDataFake } from "./configTablet";


import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";
import { SelectInput } from "@form";
import { A, Icono } from "@nano";

import { TbUsersPlus } from "react-icons/tb";
interface PersonalProps { }

const empleadoTypes = [
    { value: "cocinero", label: "Cocinero" },
    { value: "docente", label: "Docente" },
    { value: "administrativo", label: "Administrativo" },
    { value: "obrero", label: "Obrero" }
];


const Personal: React.FC<PersonalProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                <BtnNormalBasic className="icono">
                    <A href="/dashboard/personal/agregar">
                        <Icono icono={<TbUsersPlus />} />
                    </A>
                </BtnNormalBasic>
                <SelectInput
                    placeholder="empleados"
                    name="select"
                    content={true}
                    options={empleadoTypes}
                    value={quickFilterText}
                    valueChange={(selectedOption: any) => setQuickFilterText(selectedOption.value)}
                />
            </>
        );
    };

    const [data, setData] = useState<EmpleadoTypes[]>(staticDataFake);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/empleado/get-all`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <LayoutDB
            where="personal"
            titulo="Personal"
            btns={<Btns />}
            search={<SearchInput setQuickFilterText={setQuickFilterText} />}>

            <MyAgGridReact
                columnDefs={configTablet}
                rowData={data}
                quickFilterText={quickFilterText}
            />
        </LayoutDB>
    );
}

export default Personal;