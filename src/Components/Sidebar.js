import { List } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


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
                    <Link to='/#/subreddit/announcements'>
                        <ListItem key="100" button>
                            <ListItemText primary="Announcements" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/funny'>
                        <ListItem key="200" button>
                            <ListItemText primary="Funny" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/AskReddit'>
                        <ListItem key="300" button>
                            <ListItemText primary="AskReddit" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/gaming'>
                        <ListItem key="400" button>
                            <ListItemText primary="gaming" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/memes'>
                        <ListItem key="500" button>
                            <ListItemText primary="memes" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/Jokes'>
                        <ListItem key="600" button>
                            <ListItemText primary="Jokes" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/sports'>
                        <ListItem key="700" button>
                            <ListItemText primary="Sports" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/DIY'>
                        <ListItem key="800" button>
                            <ListItemText primary="DIY" />
                        </ListItem>
                    </Link>
                    <Link to='/#/subreddit/Art'>
                        <ListItem key="900" button>
                            <ListItemText primary="Art" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </div>
    );
}