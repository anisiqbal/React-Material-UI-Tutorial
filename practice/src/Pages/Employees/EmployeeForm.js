import { FormLabel, RadioGroup, FormControl, FormControlLabel, Radio, Grid, } from "@material-ui/core";
import Controls from "../../Components/Controls/Controls";

import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { UseForm, Form } from "../../Components/UseForm";


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]



const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmendId: '',
    hireDate: new Date(),
    isPermanent: false,
}

function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange,
    } = UseForm(initialFValues);

    return (

        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />

                    <Controls.Input

                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>

                    <Controls.RadioGroup

                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />


                   
                </Grid>
            </Grid>
        </Form>

    )
}

export default EmployeeForm;