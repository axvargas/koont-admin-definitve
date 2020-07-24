import React, { useContext, Fragment } from 'react';

import {
    Divider, Grid, Typography, Grow
} from '@material-ui/core';
import ResponsiveDrawer from '../../components/layout';
import AdminStepper from '../../components/stepper';

// import FormTask from './components/formTask';
// import ListOfTasks from './components/listOfTasks';
// import DeleteProject from './components/deleteProject';
// import NameOfProject from './components/nameOfProject';


// import choose from '../../images/choose.svg'
// Context import
// import ProjectContext from '../../context/projects/context';

import useStyles from './style';
const NewAdmin = () => {
    const classes = useStyles();
    //Context State
    // const projectContext = useContext(ProjectContext);
    // const { actualProject } = projectContext;

    return (

        <ResponsiveDrawer>
            <h1>Administradores</h1>
            <AdminStepper />
        </ResponsiveDrawer>

    );
}

export default NewAdmin;
