import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class listEmployees extends Component {

     constructor(props) {
        super(props)
        this.state = {
            employees: [],
            message: null
        }
        // this.deleteEmployee = this.deleteEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.addEmployee = this.addEmployee.bind(this);
        // this.reloadEmployeeList = this.reloadEmployeeList.bind(this);
    }

    render(){
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => this.addEmployee()}>
                    Add Employee
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell>LastName</TableCell>
                            <TableCell>Skills</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.state.employees.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align>{row.id}</TableCell>
                                <TableCell align>{row.firstName}</TableCell>
                                <TableCell align>{row.lastName}</TableCell>
                                <TableCell align>{row.skills}</TableCell>
                                <TableCell align onClick={() => this.editUser(row.id)}>Edit</TableCell>
                                <TableCell align onClick={() => this.deleteUser(row.id)}>Delete</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        )
    }
    
}

export default listEmployees;