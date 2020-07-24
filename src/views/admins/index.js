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
const Admins = () => {
    const classes = useStyles();
    //Context State
    // const projectContext = useContext(ProjectContext);
    // const { actualProject } = projectContext;

    return (

        <ResponsiveDrawer>
            <h1>Administradores</h1>
            <DataTable />
        </ResponsiveDrawer>

    );
}

export default Admins;
