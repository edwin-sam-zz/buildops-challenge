import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const listEmployees = () => {
    return (
            <div>
                <Button variant="contained" color="primary" onClick={() => this.addUser()}>
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
                </Table>

            </div>
    )
}

export default listEmployees;