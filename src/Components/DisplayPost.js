import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Button, Typography } from '@material-ui/core';
import { SinglePost } from './SinglePost';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ThumbUp } from '@material-ui/icons';
const entities = require("entities");


export const DisplayPost = ({ match }) => {
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        }
    });

    const classes = useStyles();

    const {
        params: { subreddit, user, post },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [articles, setArticles] = useState([]);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch(`https://www.reddit.com/r/${subreddit}/comments/${user}/${post}.json`).then(result => {
            if (result.status !== 200) {
                console.error('ERROR: ' + result.responseText);
            } else {
                result.json().then(data => {
                    if (data !== null) {
                        console.log(data);
                        setData(data);
                        setIsLoading(false);
                        setArticles(data[0].data.children);
                        setComments(data[1].data.children);
                    }
                });
            }
        })
    }, [subreddit], [user], [post]);

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src="/RedFeed/loading.svg" alt="loading..." />
            </div>
        );
    } else {
        return (
            <div className="posts">
                <Typography variant="h3" className="title">r/{post}</Typography>
                {

                    (articles !== null) ? articles.map((post, i) => {
                        return (
                            <>
                                <SinglePost key={i} post={post.data} comments={post.data} />
                                <br />
                                {

                                    (comments !== null) ? comments.map((comment, i) => {
                                        const date = new Date(comment.data.created);
                                        return (
                                            <>
                                                <Card key={i} className={classes.root} variant="outlined">
                                                    <CardContent>
                                                        <Typography className={classes.title} color="textSecondary">
                                                            {comment.data.author} • {date.toUTCString()}
                                                        </Typography>
                                                        <Typography variant="body1">
                                                            {comment.data.body_html ? ReactHtmlParser(entities.decodeHTML(comment.data.body_html)) : ''}
                                                        </Typography>
                                                        <Button>
                                                            <ThumbUp />&nbsp;&nbsp;
                                                            {comment.data.score}
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                                <br />
                                            </>
                                        );
                                    }) : ''
                                }
                            </>
                        );
                    }) : ''
                }
            </div>
        );
    }

};