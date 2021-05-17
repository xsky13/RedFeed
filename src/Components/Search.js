import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ThumbUp } from '@material-ui/icons';


export const Search = ({ match }) => {
    const {
        params: { param },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [params, setParams] = useState([]);

    useEffect(() => {
        fetch(`https://www.reddit.com/search.json?q=${new URL(window.location.href).searchParams.get('q')}`).then(result => {
            if (result.status !== 200) {
                console.error('ERROR: ' + result.responseText);
            } else {
                result.json().then(data => {
                    if (data !== null) {
                        console.log(data);
                        setData(data);
                        setIsLoading(false);
                        setParams(data.data.children);
                    }
                });
            }
        })
    }, [param]);

    const useStyles = makeStyles({
        media: {
            width: 140
        }
    });

    const classes = useStyles();

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src="/RedFeed/loading.svg" />
            </div>
        );
    } else {
        return (
            <div className="posts">
                {
                    params.map((result, i) => {
                        const url = 'http://redit.com' + result.data.permalink;

                        const pos = url.split("/").indexOf('r');
                        const fullTitle = url.split("/")[pos + 4];

                        const changePage = () => {
                            window.open(`https://reddit.com${result.data.permalink}`)
                        }

                        return (
                            <>
                                <Card variant="outlined">
                                    <div className="row">
                                        {result.data.thumbnail == "default" || result.data.thumbnail == "self" || result.data.thumbnail == "image" ? "" :
                                            <CardMedia
                                                className={classes.media}
                                                image={result.data.thumbnail}
                                                component="img"
                                            />
                                        }
                                        <div className="main-card">
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom>
                                                    {result.data.subreddit} • by {result.data.author}
                                                </Typography>
                                                <Typography variant="h5" component="h2">
                                                    {result.data.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={'/RedFeed/post/' + result.data.subreddit + '/' + result.data.id + '/' + fullTitle}><Button color="primary">Details</Button></Link>
                                                <Button color="primary" onClick={changePage}>View on Reddit</Button>
                                                <Button color="primary">
                                                    <ThumbUp />&nbsp;&nbsp;
                                                    {result.data.score}
                                                </Button>
                                            </CardActions>
                                        </div>
                                    </div>
                                </Card>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        );
    }
}
