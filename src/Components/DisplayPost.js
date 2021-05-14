import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { SinglePost } from './SinglePost';

export const DisplayPost = ({ match }) => {
    const {
        params: { subreddit, user, post },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [articles, setArticles] = useState([]);

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
                    }
                });
            }
        })
    }, [post]);

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src="http://localhost/codevemy/assets/images/loading.svg" />
            </div>
        );
    } else {
        return (
            <div className="posts">
                <Typography variant="h2">r/{post}</Typography>
                {

                    (articles !== null) ? articles.map((post, i) => {
                        return (
                            <>
                                <SinglePost key={i} post={post.data} />
                                <br />
                            </>
                        );
                    }) : ''
                }
            </div>
        );
    }

};