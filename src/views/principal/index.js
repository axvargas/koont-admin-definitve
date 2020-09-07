import React, { useContext, Fragment } from 'react';

import {
    Divider, Grid, Typography, Grow
} from '@material-ui/core';
import ResponsiveDrawer from '../../components/layout';
import PostsByDate from '../../components/postsByDate';
import PostsByLikes from '../../components/postByLikes';
import ActiveInactiveAdmins from '../../components/activeInactiveAdmins';
// import FormTask from './components/formTask';
// import ListOfTasks from './components/listOfTasks';
// import DeleteProject from './components/deleteProject';
// import NameOfProject from './components/nameOfProject';


// import choose from '../../images/choose.svg'
// Context import
// import ProjectContext from '../../context/projects/context';
import useStyles from './style';
const Principal = () => {
    const classes = useStyles();
    //Context State
    // const projectContext = useContext(ProjectContext);
    // const { actualProject } = projectContext;

    return (

        <ResponsiveDrawer>
            <h1>Principal</h1>
            <div className="root">
                <Grid
                    className={classes.cont}
                    container
                    spacing={4}
                    alignItems="center"
                >
                    <Grid
                        item
                        xl={12}
                        lg={8}
                        md={12}
                        xs={12}
                    >
                        <PostsByDate />
                    </Grid>
                    <Grid
                        item
                        xl={6}
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <ActiveInactiveAdmins />
                    </Grid>                  
                    
                </Grid>
                <PostsByLikes/>
            </div>
        </ResponsiveDrawer>

    );
}

export default Principal;
