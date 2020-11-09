// import React from 'react'
// import '../index.css'
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import logo from '../logo.png'

// const Header = () => {
//     return (
//         <div className="header">
//             <header>
//                 <IconButton edge="start" color="inherit" aria-label="Menu">
//                         Menu
//                     </IconButton>
//                 <img className="header-img" src={logo} />
//         </header>
//     </div>
//     )
// }

// export default Header;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const style = {
    flexGrow: 1
}
const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        Menu
                    </IconButton>
                    <Typography variant="h6">
                        Employee Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;