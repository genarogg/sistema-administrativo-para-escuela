import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake } from "./configTablet";
import React, { useState, useEffect } from "react";
import { BtnNormalBasic } from "@btn";

import { A, Icono } from "@nano";
import { FaUserTie } from "react-icons/fa6";
import { BitacoraTypes } from "./configTablet";

interface BitacoraProps { }

const Bitacora: React.FC<BitacoraProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>

            </>
        );
    };

    const [data, setData] = useState<BitacoraTypes[]>(staticDataFake);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/bitacora/get-all`)
            .then((res) => res.json())
            .then((res) => {

                setData(res.data);
            });
    }, []);


    return (
        <LayoutDB
            where="bitacora"
            titulo="Bitacora"
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

export default Bitacora;