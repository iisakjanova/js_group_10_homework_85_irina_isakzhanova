import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    duration: {
        marginLeft: "auto"
    },
}));

const Track = ({number, title, duration}) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Paper className={classes.root}>
                <Grid container direction="row" alignItems="center" spacing={3}>
                    <Grid item>
                        <Typography variant="subtitle1">{number}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{title}</Typography>
                    </Grid>
                    <Grid item className={classes.duration}>
                        <Typography variant="subtitle2">{duration}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Track;