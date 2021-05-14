import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


export const SinglePost = (props) => {
    return (
        <>
            <br />
            <Typography variant="h5" color="textSecondary">{props.post.title} • by {props.post.author}</Typography>
            <br />
            <Typography variant="body1">{props.post.selftext}</Typography>
            <br />
            <img src={props.post.thumbnail} width={props.post.thumbnail_width} />
        </>
    )
}
