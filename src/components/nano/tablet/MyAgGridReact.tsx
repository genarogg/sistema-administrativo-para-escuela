import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

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
    const getRowStyle = (params:any) => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#f5f5f5' }; // Color para las filas impares
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
    return (
        <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setQuickFilterText(e.target.value)}
        />
    );
};

export { MyAgGridReact, SearchInput };