import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";

import { A, Icono } from "@nano";
import { FaUserTie } from "react-icons/fa6";


interface BitacoraProps { }

const Bitacora: React.FC<BitacoraProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                
            </>
        );
    };


    return (
        <LayoutDB
            where="bitacora"
            titulo="Bitacora"
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

export default Bitacora;