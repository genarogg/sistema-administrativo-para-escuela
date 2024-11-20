import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";

import { A } from "@nano";


interface AsistenciaProps { }

const Asistencia: React.FC<AsistenciaProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                <BtnNormalBasic >entrada</BtnNormalBasic>
                <BtnNormalBasic >almuerzo</BtnNormalBasic>
                <BtnNormalBasic >salida</BtnNormalBasic>
            </>
        );
    };


    return (
        <LayoutDB
            where="asistencia"
            titulo="asistencia"
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

export default Asistencia;