import React from 'react'
import Textfield from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchResult from './SearchResult'
import { makeStyles } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  searchcontainer: {
    textAlign: 'center',
  },
  searchbar: {
    width: "80%"
  }
}));


// style={{maxHeight: 300, overflow: 'auto'}
export default function SearchBarComponent({searchRef, setSearchTerm, searchTerm, addModules, user}) {
    const classes = useStyles()
    function handleonchange(e) {
      const temp = searchTerm.map(item => item)
      temp[user - 1] = e.target.value
      setSearchTerm(temp)
    }
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
            // onChange={event => {setSearchTerm(event.target.value)}}
            onChange={handleonchange}/>

          <SearchResult searchTerm={searchTerm} addModules={addModules} user={user}/> 
            
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
