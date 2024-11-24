import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";
import { BtnNormalBasic } from "@btn";
import { FaUserGraduate } from "react-icons/fa";
import { A, Icono } from "@nano";
import { FaUserTie } from "react-icons/fa6";


interface UsuarioProps { }

const Usuario: React.FC<UsuarioProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                <BtnNormalBasic ><A href="/dashboard/usuario/agregar">
                    <Icono icono={<FaUserTie />} />
                </A></BtnNormalBasic>
            </>
        );
    };


    return (
        <LayoutDB
            where="usuario"
            titulo="Usuario"
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

export default Usuario;