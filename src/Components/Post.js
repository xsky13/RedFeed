import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { ThumbUp } from '@material-ui/icons';


export const Post = (props) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        media: {
            width: props.post.thumbnail_width
        }
    });

    const classes = useStyles();

    const changePage = () => {
        window.open(`https://reddit.com${props.post.permalink}`)
    }

    const url = 'http://redit.com' + props.post.permalink;

    const pos = url.split("/").indexOf('r');
    const fullTitle = url.split("/")[pos + 4];

    console.log(props.post);

    return (
        <Card className={classes.root} variant="outlined">
            <div className="row">
                {props.post.thumbnail == "default" || props.post.thumbnail == "self" || props.post.thumbnail == "image" || props.post.thumbnail == "" ? "" :
                    <CardMedia
                        className={classes.media}
                        image={props.post.thumbnail}
                        component="img"
                    />
                }
                <div className="main-card">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {props.post.subreddit} • by {props.post.author}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {props.post.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={'/#/post/' + props.post.subreddit + '/' + props.post.id + '/' + fullTitle}><Button color="primary">Details</Button></Link>
                        <Button color="primary" onClick={changePage}>View on Reddit</Button>
                        <Button color="primary">
                            <ThumbUp />&nbsp;&nbsp;
                            {props.post.score}
                        </Button>
                    </CardActions>
                </div>
            </div>
        </Card>
    )
}
