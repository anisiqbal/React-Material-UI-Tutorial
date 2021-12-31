import React from 'react';
import {makeStyles,withStyles} from "@material-ui/core";



// Two methods they are withStyles and makeStyles
const useStyles = makeStyles({
    sideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: 'cadetblue',
    }
})

function SideMenu() {

    const classes = useStyles();

    return (
     <div className={classes.sideMenu}>

     </div>
    )
  }
  
  export default SideMenu;
  