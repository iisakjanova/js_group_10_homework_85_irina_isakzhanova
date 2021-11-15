import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    datetime: {
        marginLeft: "auto"
    },
}));

const TrackHistoryItem = ({title, artist, datetime}) => {
    const classes = useStyles();

    return (
        <Grid item>
            <Paper className={classes.root}>
                <Grid container direction="row" alignItems="center" spacing={3}>
                    <Grid item>
                        <Typography variant="subtitle1">{artist}.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">{title}</Typography>
                    </Grid>
                    <Grid item className={classes.datetime}>
                        <Typography variant="subtitle2">{datetime}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default TrackHistoryItem;