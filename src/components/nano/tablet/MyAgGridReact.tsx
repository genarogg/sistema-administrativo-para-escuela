
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

import { Input } from "@form"

interface MyAgGridReactProps {
    rowData: any[];
    columnDefs: any[];
    quickFilterText: string;
}

const MyAgGridReact: React.FC<MyAgGridReactProps> = ({
    rowData,
    columnDefs,
    quickFilterText,
}) => {
    const getRowStyle = (params: any) => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#045e55' }; // Color para las filas impares
        }
        return undefined;
    };

    return (
        <div className="container-my-ag-grid">
            <div className="tablet ag-theme-balham" style={{ height: "70vh", width: "100%" }}>
                <AgGridReact
                    rowData={rowData.reverse()}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={30}
                    quickFilterText={quickFilterText}
                    getRowStyle={getRowStyle}

                />
            </div>
        </div>
    );
};

interface SearchInputProps {
    setQuickFilterText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ setQuickFilterText }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setQuickFilterText(event.target.value);
    };

    return (
        <div className="tablet-search"> <Input
            type="text"
            name="search"
            placeholder="Buscar..."
            value={searchValue}
            valueChange={handleInputChange}
        /></div>

    );
};


export { MyAgGridReact, SearchInput };