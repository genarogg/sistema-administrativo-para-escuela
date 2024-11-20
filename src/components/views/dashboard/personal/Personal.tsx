import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { EmpleadoTypes, configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";
import { SelectInput } from "@form";
import { A } from "@nano";


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
                <BtnNormalBasic ><A href="/dashboard/personal/agregar">agregar</A></BtnNormalBasic>
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


    return (
        <LayoutDB
            where="personal"
            titulo="Personal"
            btns={<Btns />}
            search={<SearchInput setQuickFilterText={setQuickFilterText} />}>

            <MyAgGridReact
                columnDefs={configTablet}
                rowData={staticDataFake}
                quickFilterText={quickFilterText}
            />
        </LayoutDB>
    );
}

export default Personal;