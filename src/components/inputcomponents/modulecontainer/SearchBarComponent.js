import React from 'react'
import Textfield from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from "@material-ui/core/Paper"
import Input from "@material-ui/core/Input";
import SearchResult from './SearchResult'
import SearchBar from 'material-ui-search-bar'
import { makeStyles } from '@material-ui/core'
import JSONDATA from './moduleList.json'

const useStyles = makeStyles((theme) => ({
  searchcontainer: {
    textAlign: 'center',
  },
  searchbar: {
    width: "80%"
  }

}));
// style={{maxHeight: 300, overflow: 'auto'}
export default function SearchBarComponent({searchRef, setSearchTerm, searchTerm, addModules, generate, clearModules}) {
    const classes = useStyles()
    return (
      <>
        <Grid item xs={8} className={classes.searchcontainer}>
          <Textfield 
            className={classes.searchbar}
            inputRef={searchRef}
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={event => {setSearchTerm(event.target.value)}}/>

          <SearchResult searchTerm={searchTerm} addModules={addModules} />    
        </Grid>
        {/* <Grid item xs={6} className={classes.searchBar}>
          <button onClick={generate}>Generate!</button>     
        </Grid>
        <Grid item xs={6} className={classes.searchBar}>
          <button onClick={clearModules}>Clear all</button>        
        </Grid> */}
      </>

    )
}
