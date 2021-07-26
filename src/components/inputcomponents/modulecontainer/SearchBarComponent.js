import React from 'react'
import Textfield from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchResult from './SearchResult'
import { makeStyles, withStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  searchcontainer: {
    textAlign: 'center',
  },
  searchbar: {
    width: "80%",
    
  }
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#e6e6e6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#e6e6e6',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: "#e6e6e6",
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: "#e6e6e6",
      borderBottomWidth: 2
    },
    width: "80%",
  },
})(Textfield);


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
          <CssTextField 
            label="Search" 
            inputRef={searchRef}
            InputLabelProps={{
              style: {color: "grey"}
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                color: "#e6e6e6"
              }
            }}
            onChange={handleonchange}/>
          {/* <Textfield 
            className={classes.searchbar}
            inputRef={searchRef}
            label="Search"
            InputLabelProps={{
              style: {color: "grey"}
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                color: "grey",
              }
            }}
            // onChange={event => {setSearchTerm(event.target.value)}}
            onChange={handleonchange}/> */}

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
