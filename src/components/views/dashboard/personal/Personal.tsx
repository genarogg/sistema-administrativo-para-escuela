import LayoutDB from "../layout/LayoutDB";
import { MyAgGridReact, SearchInput } from "@tablet";
import { EmpleadoTypes, configTablet, staticDataFake } from "./configTablet";
import React, { useState } from "react";

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

interface InicioProps { }

const Inicio: React.FC<InicioProps> = () => {
    const [quickFilterText, setQuickFilterText] = useState("");


    return (
        <LayoutDB where="personal" titulo="Personal" search={<SearchInput setQuickFilterText={setQuickFilterText} />}>

            <MyAgGridReact
                columnDefs={configTablet}
                rowData={staticDataFake}
                quickFilterText={quickFilterText}
            />
        </LayoutDB>
    );
}

export default Inicio;