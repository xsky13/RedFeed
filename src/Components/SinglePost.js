import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Typography } from '@material-ui/core';
const path = require('path');


export const SinglePost = (props) => {
    let filename = '';
    let bodyText = '';

    if (props.post.preview) {
        filename = path.basename(props.post.preview.images[0].source.url);
    }

    if (props.post.selftext_html) {
        bodyText = props.post.selftext_html.replaceAll('&lt;', "<");
        bodyText = bodyText.replaceAll('&gt;', '>');
        bodyText = bodyText.replaceAll('"', '');
    }

    console.log(props.post.selftext_html === null);
    return (
        <>
            <div className="post">
                <br />
                <Typography variant="h5" color="textSecondary">{props.post.title} • by {props.post.author}</Typography>
                <br />
                {ReactHtmlParser(bodyText)}
                <br />
                {props.post.preview ? <img src={'http://i.redd.it/' + filename} className="main-image" alt="main" /> : ''}
            </div>
            <script>
                {document.title = props.post.title}
            </script>
        </>
    );
}
