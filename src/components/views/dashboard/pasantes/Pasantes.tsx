import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";
import { FaUserGraduate } from "react-icons/fa";
import { A, Icono } from "@nano";


interface PasantesProps { }

const Pasantes: React.FC<PasantesProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                <BtnNormalBasic ><A href="/dashboard/pasantes/agregar">
                    <Icono icono={<FaUserGraduate />} />
                </A></BtnNormalBasic>
            </>
        );
    };


    return (
        <LayoutDB
            where="pasantes"
            titulo="Pasantes"
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

export default Pasantes;