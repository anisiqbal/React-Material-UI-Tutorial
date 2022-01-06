import { Grid } from "@material-ui/core";
import Controls from "../../Components/Controls/Controls";

import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { UseForm, Form } from "../../Components/UseForm";
import * as EmployeeServices from "../../Services/EmployeeServices";


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
    departmentId: '',
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

                    <Controls.Input

                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />

                    <Controls.Input

                        label="City"
                        name="city"
                        value={values.city}
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

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={EmployeeServices.getDepartmentCollection()}
                    />


                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            // ye type="submit" isliye kra rahe hen q k insspect me type button show horai h//
                            type="submit"
                            text="Submit" />

                        <Controls.Button 
                            text="Reset" 
                            color="default"/>

                    </div>




                </Grid>
            </Grid>
        </Form>

    )
}

export default EmployeeForm;