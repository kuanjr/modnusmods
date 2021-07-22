import React from 'react'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/styles/makeStyles'
import { Container } from '@material-ui/core'
import SearchBarComponent from './SearchBarComponent'
import ModuleList from './ModuleList'


const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    paddingLeft: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
}));

export default function ModuleContainer({searchRef, setSearchTerm, searchTerm, addModules, generate, clearModules, modules, removeModule, style}) {
    const classes = useStyles()
    return (
        <>
          <Grid container spacing={2} className={classes.root}>
            {/* where the results are */}
            <Grid item xs={8}>
              <ModuleList modules={modules} removeModule={removeModule} />
            </Grid>
            {/* search bar */}
            <Grid item xs={4} className={classes.searchBar} container justifyContent="center">
              <SearchBarComponent searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} generate={generate} clearModules={clearModules} />
            </Grid>
          </Grid>
        </>
    )
}
