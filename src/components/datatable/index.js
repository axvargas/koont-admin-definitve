import React from 'react';
import MUIDataTable from "mui-datatables";


const options = {
    filterType: 'checkbox',
};

const DataTable = ({ filtered, columns }) => {

    return (
        <>
            <MUIDataTable
                title={"Dummy Data"}
                data={filtered}
                columns={columns}
                options={options}
            />
        </>
    );
}

export default DataTable;
