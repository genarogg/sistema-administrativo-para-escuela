import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

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
    return (
        <div className="container-my-ag-grid">
            <div className="tablet">
                <AgGridReact
                    rowData={rowData.reverse()}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={30}
                    quickFilterText={quickFilterText}
                />
            </div>
        </div>
    );
};

interface SearchInputProps {
    setQuickFilterText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ setQuickFilterText }) => {
    return (
        <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setQuickFilterText(e.target.value)}
        />
    );
};

export { MyAgGridReact, SearchInput };