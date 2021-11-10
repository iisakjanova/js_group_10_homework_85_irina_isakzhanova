import {Link} from "react-router-dom";
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    makeStyles,
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

const Artist = ({title, id, image}) => {
    const classes = useStyles();

    let cardImage = noImage;

    if (image) {
        cardImage = apiURL + '/uploads/' + image;
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
                <CardActions>
                    <IconButton component={Link} to={'/albums?artist=' + id}>
                        <ArrowForwardIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Artist;