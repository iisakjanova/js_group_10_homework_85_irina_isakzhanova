import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppBar, Button, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    link: {
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
    const user = useSelector(state => state.users.user);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6">
                                <Link to="/" className={classes.link}>Music App</Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            {user ? (
                                <Link to="/track_history" className={classes.link}>Track History</Link>
                            ) : (
                                <>
                                    <Button component={Link} to="/register" color="inherit">Sign up</Button>
                                    <Button component={Link} to="/login" color="inherit">Sign in</Button>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    );
};

export default AppToolbar;