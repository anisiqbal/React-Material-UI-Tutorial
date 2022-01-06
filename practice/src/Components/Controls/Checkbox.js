import React from "react";
import {FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core';

function Checkbox(props){

    
const {name, label, value, onChange } = props; 

// i am work this event.target beacuse checkbox is not showing checked /////
const ConvertToDefEventPara = (name, value )=>({
    target:{
        name, value
    }
})

    return(
       <FormControl>
           <FormControlLabel
           control={<MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={e => onChange(ConvertToDefEventPara(name,e.target.checked))}
           />}
           label={label}
           />
       </FormControl>
    )
} 

export default Checkbox;