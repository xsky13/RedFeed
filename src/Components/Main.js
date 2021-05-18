import { Typography } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import { Post } from './Post';


export const Main = () => {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('hot');

    const getSubreddit = subreddit => {
        fetch(subreddit).then(result => {
            if (result.status !== 200) {
                console.error('ERROR: ' + result.responseText);
            } else {
                result.json().then(data => {
                    if (data !== null) {
                        setArticles(data.data.children);
                    }
                });
            }
        });
    }

    useEffect(() => getSubreddit(`https://www.reddit.com/${subreddit}.json`), [subreddit]);


    return (
        <>
        
            <div className="posts">
                <Typography variant="h2" style={{ marginBottom: '1rem' }}>All Posts {subreddit == 'hot' ? '' : subreddit}</Typography>
                <div className="all-posts">
                    {
                        (articles !== null) ? articles.map((post, i) => {
                            return (
                                <>
                                    <Post key={i} post={post.data} />
                                    <br />
                                </>
                            );
                        }) : ''
                    }
                </div>
            </div>
        </>
    )
};

