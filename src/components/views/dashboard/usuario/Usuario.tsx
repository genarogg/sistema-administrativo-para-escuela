import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake, UsuarioTypes } from "./configTablet";
import React, { useState, useEffect } from "react";
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

    const [data, setData] = useState<UsuarioTypes[]>(staticDataFake);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/usuario/get-all`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <LayoutDB
            where="usuario"
            titulo="Usuario"
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

export default Usuario;