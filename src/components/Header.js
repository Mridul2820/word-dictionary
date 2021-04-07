import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'

const Header = () => {

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: 'dark',
        },
    });

    return (
        <div className="header">
            <span className="title">Word Dictionary</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        >
                            <MenuItem >English</MenuItem>
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
