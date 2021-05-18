import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export const User = ({ match }) => {
    const {
        params: { user },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://www.reddit.com/user/${user}.json`).then(result => {
            if (result.status !== 200) {
                console.error('ERROR: ' + result.responseText);
            } else {
                result.json().then(data => {
                    if (data !== null) {
                        setIsLoading(false);
                        setArticles(data.data.children);
                    }
                });
            }
        })
    }, [user]);

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src="/RedFeed/loading.svg" />
            </div>
        );
    } else {
        return (
            <>
                <div className="posts">
                    <Typography variant="h2">{user}</Typography>
                    {

                        (articles !== null) ? articles.map((post, i) => {
                            const url = 'http://redit.com' + post.data.permalink;

                            const pos = url.split("/").indexOf('r');
                            const fullTitle = url.split("/")[pos + 4];

                            const changePage = () => {
                                window.open(`https://reddit.com${post.data.permalink}`)
                            }

                            return (
                                <>
                                    {post.kind == "t3" ?
                                        <>
                                            <Card variant="outlined">
                                                <div className="row">
                                                    {post.data.thumbnail == "default" ? "" : <CardMedia

                                                        image={post.data.thumbnail}
                                                        height={post.data.thumbnail_height}
                                                        width={post.data.thumbnail_width}
                                                        title="Paella dish"
                                                    />}
                                                    <div className="main-card">
                                                        <CardContent>
                                                            <Typography color="textSecondary" gutterBottom>
                                                                {post.data.subreddit} • by {post.data.author}
                                                            </Typography>
                                                            <Typography variant="h5" component="h2">
                                                                {post.data.title}
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            <Link to={'/post/' + post.data.subreddit + '/' + post.data.id + '/' + fullTitle}><Button color="primary">Details</Button></Link>
                                                            <Button color="primary" onClick={changePage}>View on Reddit</Button>
                                                        </CardActions>
                                                    </div>
                                                </div>
                                            </Card>
                                            <br />
                                        </> : '' }
                                </>
                            );
                        }) : ''
                    }
                </div>
            </>
        );
    }

};