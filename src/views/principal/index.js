import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Grid
} from '@material-ui/core';
import ResponsiveDrawer from '../../components/layout';
import PostsByDate from '../../components/postsByDate';
import PostsByLikes from '../../components/postByLikes';
import ActiveInactiveAdmins from '../../components/popularTags';


// import choose from '../../images/choose.svg'
// Context import
// import ProjectContext from '../../context/projects/context';
import useStyles from './style';
const Principal = () => {
    const classes = useStyles();

    const [tags, setTags] = useState([]);
    useEffect(() => {
        const getTags = async () => {
            const URL = `http://localhost:5000/anuncios/popular_tags/`
            const response = await axios.get(URL)
            setTags(response.data)
        }
        getTags();
    }, [])

    const [anuncios, setAnuncios] = useState([]);
    useEffect(() => {
        const getAnuncios = async () => {
            const URL = `http://localhost:5000/anuncios/numero_anuncios/`
            const response = await axios.get(URL)
            setAnuncios(response.data)
        }
        getAnuncios();
    }, [])

    const [vacantes, setVacantes] = useState([]);
    useEffect(() => {
        const getVacantes = async () => {
            const URL = `http://localhost:5000/anuncios/numero_vacantes/`
            const response = await axios.get(URL)
            setVacantes(response.data)
        }
        getVacantes();
    }, [])

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
                        {anuncios.length>0 && <PostsByDate anuncios={anuncios} />}
                    </Grid>
                    <Grid
                        item
                        xl={6}
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        {tags.length>0 && <ActiveInactiveAdmins datos={tags} />}
                    </Grid>                  
                    
                </Grid>
                {vacantes.length>0 && <PostsByLikes vacantes={vacantes} />}
            </div>
        </ResponsiveDrawer>

    );
}

export default Principal;
