import React from 'react'
import './index.css'
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';

const App = () => {
    return (
        <div>
            <h1 className="details">Employee Details</h1>
            <Button variant="contained" color="default" className="addButton">Add Employee</Button>
        </div>
    )
}

export default App;