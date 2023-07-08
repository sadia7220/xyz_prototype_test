import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ backgroundColor: '#585757' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            XYZ Prototype
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="layout">
                {children}
            </div>
        </React.Fragment>
    )
}

export default Layout;
