import React from 'react';
import {AppBar, Button, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    mainLink: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit'
        }
    },
    staticToolbar: {
        marginBottom: theme.spacing(2)
    }
}));

const AppToolbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6">
                                <Link to="/" className={classes.mainLink}>Music App</Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/register" color="inherit">Sign up</Button>
                            <Button component={Link} to="/login" color="inherit">Sign in</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    );
};

export default AppToolbar;