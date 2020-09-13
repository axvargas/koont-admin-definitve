import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import axios from 'axios';
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
const Posts = () => {
    const classes = useStyles();
    //Context State
    // const projectContext = useContext(ProjectContext);
    // const { actualProject } = projectContext;
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredPosts, setfilteredPosts] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const URL = 'http://knoot1.pythonanywhere.com/Categorias'
            const response = await axios.get(URL)
            setCategories(response.data)
        }
        getCategories();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const getFilteredPosts = async () => {
            const URL = 'mongo'
            const response = await axios.get(URL)
            setfilteredPosts(response)
        }

        if (filter) {
            getFilteredPosts();
        } else {
            setfilteredPosts([])
        }
        // eslint-disable-next-line
    }, [filter])

    const columns = ["Name", "Company", "City", "State"];

    return (

        <ResponsiveDrawer>
            <h1>Anuncios</h1>
            {categories.length > 0 &&
                <Autocomplete
                    id="combo-box-demo"
                    options={categories}
                    getOptionLabel={(cat) => cat.nombre}
                    value={filter}
                    onChange={(event, newValue) => {
                        setFilter(newValue);
                    }}
                    style={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            }
            <DataTable filtered={filteredPosts} columns={columns} />
        </ResponsiveDrawer>

    );
}

export default Posts;
