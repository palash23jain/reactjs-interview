import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Employee = () => {
    const [employeeDetails, setEmployeeDetails] = useState([])

    const employeeProtoType = {
        firstName: '',
        lastName: '',
        dob: '',
        designation: '',
        profileImg: '',
        experience: ''
    }

    let tempEmp = {};

    const inputHandler = (e, field) => {
        tempEmp[field] = e.target.value;
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        setEmployeeDetails(employeeDetails.push(tempEmp));
        console.log(employeeDetails);
        tempEmp = {};
    }

    return(
        <form onSubmit={submitHandler}>
            {Object.keys(employeeProtoType).map(field=>{
                const uid = uuidv4();
                return(
                    <p key={uid}>
                        <label>Enter {field}</label>
                        <input
                        type="text"
                        onBlur={(e)=>inputHandler(e, field)}
                        required
                        />
                    </p>
                )
            })}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Employee;
