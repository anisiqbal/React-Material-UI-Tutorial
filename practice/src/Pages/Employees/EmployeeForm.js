import { FormControl, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import {UseForm, Form} from "../../Components/UseForm";






const initialFValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmendId:'',
    hireDate:new Date(),
    isPermanent:false,
}

function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange, 
    }  = UseForm( initialFValues);

    return (
        
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            label="full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            
                        </FormControl>
                    </Grid>
                </Grid>
                </Form>
       
    )
}

export default EmployeeForm;