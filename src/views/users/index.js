import React, { useContext, Fragment } from 'react';

import {
    Divider, Grid, Typography, Grow
} from '@material-ui/core';
import ResponsiveDrawer from '../../components/layout';
import DataTable from '../../components/datatable';

// import FormTask from './components/formTask';
// import ListOfTasks from './components/listOfTasks';
// import DeleteProject from './components/deleteProject';
// import NameOfProject from './components/nameOfProject';


// import choose from '../../images/choose.svg'
// Context import
// import ProjectContext from '../../context/projects/context';

import useStyles from './style';
const Users = () => {
    const classes = useStyles();
    //Context State
    // const projectContext = useContext(ProjectContext);
    // const { actualProject } = projectContext;
    const columns = ["Name", "Company", "City", "State"];
    const filteredUsers = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    return (

        <ResponsiveDrawer>
            <h1>Usuarios</h1>
            <DataTable filtered={filteredUsers} columns={columns} />
        </ResponsiveDrawer>

    );
}

export default Users;
