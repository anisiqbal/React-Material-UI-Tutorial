import React from "react";
import PageHeader from "../../Components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles( theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

function Employees(){

    const classes = useStyles();
   

    return(
        <>
        <PageHeader
         title ="New Employee"
         subtitle ="Form Design With Validation"
         icon={<PeopleOutlineTwoToneIcon fontSize="large"/>}
        />
        <Paper className={classes.pageContent}>
         <EmployeeForm/>
        </Paper>
      
       </>
    )
}

export default Employees;