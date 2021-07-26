import React from 'react'
import ModuleContainer from './ModuleContainer';
import { makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

export default function UserModule( { user, setUser, searchRef, searchRef2, setSearchTerm, searchTerm, addModules, modules, removeModule }) {
    function handleonclick() {
        setUser(() => user === 1 ? 2 : 1)
    }
    if (user === 1) {
        const useStyles = makeStyles((theme) => ({
          root: {
            height: 200,
            paddingLeft: 20,
            paddingTop: 50,
            paddingBottom: 20,
          },
        }));
        return (
            <>
              <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} modules={modules} removeModule={removeModule} user={1} style={useStyles}/>
              <Grid container style={{height: 50}} >
                <Grid item xs={10} />
                  <Grid item xs={2} container>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                      <IconButton style={{color: "grey"}}>
                        <AddIcon onClick={handleonclick}/>
                      </IconButton>
                    </Grid>
                    <Grid item xs={8} style={{paddingTop: 12, color: "grey"}}>
                      <Typography>ADD USER</Typography> 
                    </Grid>
                  </Grid>  
              </Grid>
            </>
            
            )
    } else {
        const useStyles = makeStyles((theme) => ({
          root: {
            height: 220,
            paddingLeft: 20,
            paddingTop: 30,
            paddingBottom: 20,
            margin: 0,
          },

        }));
        return (
          <>
            <ModuleContainer searchRef={searchRef} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} modules={modules} removeModule={removeModule} user={1} style={useStyles}/>
            {/* <Divider orientation="horizontal" style={{borderTop: "solid"}}/> */}
            <ModuleContainer searchRef={searchRef2} setSearchTerm={setSearchTerm} addModules={addModules} searchTerm={searchTerm} modules={modules} removeModule={removeModule} user={2} style={useStyles}/>
            <Grid container style={{height: 50}} >
                <Grid item xs={10} />
                  <Grid item xs={2} container>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                      <IconButton style={{color: "grey"}}>
                        <RemoveIcon onClick={handleonclick} />
                      </IconButton>
                    </Grid>
                    <Grid item xs={8} style={{paddingTop: 12, color: "grey"}}>
                      <Typography>REMOVE USER</Typography> 
                    </Grid>
                  </Grid>  
              </Grid>
          </>
        )
    }
}
