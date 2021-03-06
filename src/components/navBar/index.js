import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { routes, routesSession } from './routes';
import useStyles from './styles';
import {
    Button,
    List,
    ListSubheader,
    Divider,
    MenuItem,
    Grid
} from '@material-ui/core';

import ListItemLink from './ListItemLink';


const NavBarList = ({ handleDrawerToggle }) => {
    return (
        <>
            <List
                component="nav"
                aria-label="main mailbox folders"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Menu
                    </ListSubheader>
                }
            >
                {
                    routes.map((route, i) => {
                        if (route.text !== "Acerca de") {
                            return (
                                <ListItemLink key={i} to={route.link} primary={route.text} handleDrawerToggle={handleDrawerToggle} />
                            )
                        }
                        return null;
                    })
                }
            </List >
            <Divider />
            <br />
            <Grid container justify="center">
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to={'/new-admin'}
                    >
                        Nuevo Admin
                    </Button>
                </Grid>
            </Grid>
            <br />
            {/* <List
                component="nav"
                aria-label="main mailbox folders"
            >
                <ListItemLink to={"/about"} primary={"Acerca de"} handleDrawerToggle={handleDrawerToggle} />
            </List> */}

        </>
    );
}
export default NavBarList;






