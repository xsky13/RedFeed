import { List } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '30vh',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '4px'
    },
}));

export const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className="sidebar">
            <Typography variant="h4">Subreddits</Typography>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <Link to='/subreddit/announcements'>
                        <ListItem key="1" button>
                            <ListItemText primary="Announcements" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/funny'>
                        <ListItem key="2" button>
                            <ListItemText primary="Funny" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/AskReddit'>
                        <ListItem key="3" button>
                            <ListItemText primary="AskReddit" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/gaming'>
                        <ListItem key="4" button>
                            <ListItemText primary="gaming" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/memes'>
                        <ListItem key="5" button>
                            <ListItemText primary="memes" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/Jokes'>
                        <ListItem key="6" button>
                            <ListItemText primary="Jokes" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/sports'>
                        <ListItem key="7" button>
                            <ListItemText primary="Sports" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/DIY'>
                        <ListItem key="8" button>
                            <ListItemText primary="DIY" />
                        </ListItem>
                    </Link>
                    <Link to='/subreddit/Art'>
                        <ListItem key="9" button>
                            <ListItemText primary="Art" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </div>
    );
}