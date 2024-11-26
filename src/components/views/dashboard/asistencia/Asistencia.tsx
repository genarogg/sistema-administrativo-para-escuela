import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { configTablet, staticDataFake, AsistenciaTypes } from "./configTablet";
import React, { useEffect, useState } from "react";
import { BtnNormalBasic } from "@btn";
import Add from "./crud/Add"
import { Icono } from "@/components/nano";
import { TbDoorEnter } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { TbDoorExit } from "react-icons/tb";

interface AsistenciaProps { }

const Asistencia: React.FC<AsistenciaProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    const Btns = () => {
        return (
            <>
                <Add tipoAction="entrada"><Icono icono={<TbDoorEnter />} /></Add>
                <Add tipoAction="almuerzo"><Icono icono={<IoFastFoodSharp />} /></Add>
                <Add tipoAction="salida"><Icono icono={<TbDoorExit />} /></Add>
            </>
        );
    };

    const [data, setData] = useState<AsistenciaTypes[]>(staticDataFake);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/asistencia/get-all`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data)
                setData(res.data);
            });
    }, []);


    return (
        <LayoutDB
            where="asistencia"
            titulo="asistencia"
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

export default Asistencia;