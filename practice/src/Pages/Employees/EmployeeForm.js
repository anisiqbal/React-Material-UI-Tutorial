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


    // this is validation mean that before data update after then showing alert popup////
    const validate = (fieldValues = values) =>{
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if('email' in fieldValues)
         temp.email =(/$^|.+@.+..+/).test(fieldValues.email)? "" : "Email is not required."
        if('mobile' in fieldValues) 
            temp.mobile= values.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if('departmentId' in fieldValues)    
        temp.departmentId=fieldValues.departmentId.length != 0 ? "": "This field is required."
        setErrors({
            ...temp
        })
      if (fieldValues == values)  
        return Object.values(temp).every(x => x =="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = UseForm(initialFValues, true, validate);

    const handleSubmit = e =>{
        e.preventDefault()
      if(validate())  {
        EmployeeServices.insertEmployee(values)
        resetForm();
      }
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />

                    <Controls.Input

                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />

                    <Controls.Input

                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
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
                        error={errors.departmentId}
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
                            color="default"
                            onClick={resetForm}/>

                    </div>




                </Grid>
            </Grid>
        </Form>

    )
}

export default EmployeeForm;