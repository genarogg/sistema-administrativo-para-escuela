import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";
import { FaUserGraduate } from "react-icons/fa";
import { A, Icono } from "@nano";


interface EstudianteProps { }

const Estudiante: React.FC<EstudianteProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                <BtnNormalBasic ><A href="/dashboard/estudiante/agregar">
                    <Icono icono={<FaUserGraduate />} />
                </A></BtnNormalBasic>
            </>
        );
    };


    return (
        <LayoutDB
            where="estudiante"
            titulo="Estudiante"
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

export default Estudiante;