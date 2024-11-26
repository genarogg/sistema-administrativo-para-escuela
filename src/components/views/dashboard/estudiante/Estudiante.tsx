import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake, EstudianteFamiliaTypes } from "./configTablet";
import React, { useState, useEffect } from "react";
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

    const [data, setData] = useState<EstudianteFamiliaTypes[]>(staticDataFake);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/estudiante/get-all`)
            .then((res) => res.json())
            .then((res) => {

                setData(res.data);
            });
    }, []);



    return (
        <LayoutDB
            where="estudiante"
            titulo="Estudiante"
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

export default Estudiante;