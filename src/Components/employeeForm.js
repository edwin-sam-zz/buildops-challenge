import React from 'react'
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import { TextField } from '@material-ui/core';


class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            message: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {

    }
    
    handleSubmit(event) {
        alert('A employee has been submitted');
        event.preventDefault();
    }

    useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            width: '25px',
                },
        },
    }))

    render() {
        return (
            <FormControl className={this.useStyles.root}>
                <TextField id="standard-basic" label="ID" />
                <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="Last Name" />
                <TextField id="standard-basic" label="Skills" />
            </FormControl>
        )
    }
}

export default EmployeeForm;
