import MUIDataTable from "mui-datatables";
import React from 'react';


const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
    filterType: 'checkbox',
};

const DataTable = () => {
    return (
        <MUIDataTable
                title={"Dummy Data"}
                data={data}
                columns={columns}
                options={options}
            />
    );
}

export default DataTable;
