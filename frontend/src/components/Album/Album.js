import {Link} from "react-router-dom";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    makeStyles,
    Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import noImage from '../../assets/images/no_image.jpeg';
import {apiURL} from "../../config";

const useStyles = makeStyles({
    card: {
        height: '100%'
    },
    media: {
        height: 0,
        paddingTop: '80%'
    }
});

const Album = ({title, id, year, image}) => {
    const classes = useStyles();

    let cardImage = noImage;
    let yearInfo = null;

    if (image) {
        cardImage = apiURL + '/uploads/' + image;
    }

    if (year) {
        yearInfo = (
            <Typography variant="subtitle1">
                year: {year}
            </Typography>
        );
    }

    return (
        <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader title={title} />
                <CardMedia
                    image={cardImage}
                    title={title}
                    className={classes.media}
                />
                <CardContent>
                    {yearInfo}
                </CardContent>
                <CardActions>
                    <IconButton component={Link} to={'/tracks/' + id}>
                        <ArrowForwardIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Album;