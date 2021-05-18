import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { Post } from '../Components/Post';


export const Subreddit = ({ match }) => {
  const {
    params: { subreddit },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then(result => {
      if (result.status !== 200) {
        console.error('ERROR: ' + result.responseText);
      } else {
        result.json().then(data => {
          if (data !== null) {
            setData(data);
            setIsLoading(false);
            setArticles(data.data.children);
          }
        });
      }
    })
  }, [subreddit]);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src="/RedFeed/loading.svg" />
      </div>
    );
  } else {
    const oldArticle = articles;

    if (oldArticle !== articles) {
      setIsLoading(true);
    }
    return (
      <>
        <div className="posts">
          <Typography variant="h2">r/{subreddit}</Typography>
          <br />
          {

            (articles !== null) ? articles.map((post, i) => {
              return (
                <>
                  <Post post={post.data} />
                  <br />
                </>
              );
            }) : ''
          }
        </div>
      </>
    );
  }

};