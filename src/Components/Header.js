import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import GitHub from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, Popover } from '@material-ui/core';
import { Search, ThumbUp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    typography: {
        padding: theme.spacing(2),
    },
    popover: {
        height: '60vh',
        width: '100vh',
        right: '3rem'
    }
}));


export const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [popover, setPopover] = useState(null)


    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.reddit.com/search.json?q=${searchTerm}`).then(result => {
            if (result.status !== 200) {
                console.error('ERROR: ' + result.responseText);
            } else {
                if (searchTerm === 'Search for something') {
                    setSearchResults('Search for something');
                } else {
                    result.json().then(data => {
                        if (data !== null) {
                            setIsLoading(false);
                            setSearchResults(data.data.children);
                        }
                    });
                }
            }
        })
    }, [searchTerm]);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const open = Boolean(popover);
    const id = open ? 'simple-popover' : undefined;

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const search = e => {
        setSearchTerm(e.target.value);
    }

    const handlePopoverClick = () => {
        setPopover(true);
    };

    const handlePopoverClose = () => {
        setPopover(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="Github" color="inherit">
                    <GitHub />
                </IconButton>
                <span className="github">Github</span>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="Github" color="inherit">
                    <GitHub />
                </IconButton>
                <span className="github">Github</span>
            </MenuItem>
        </Menu>
    );

    const getFullTitle = url => {
        const pos = url.split("/").indexOf('r');
        return url.split("/")[pos + 4];
    }


    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <img src="/RedFeed/favicon.ico" width="50" />&nbsp;&nbsp;&nbsp;
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/" style={{ color: 'white' }}>RedFeed</Link>
                    </Typography>
                    <IconButton aria-label="Search" color="inherit" aria-describedby={id} onClick={handlePopoverClick}>
                        <Search />
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={popover}
                        onClose={handlePopoverClose}
                        className={classes.popover}
                        getContentAnchorEl={null}
                    >
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                value={searchTerm}
                                onChange={search}
                                aria-describedby={id}
                                onFocus={handlePopoverClick}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search', 'name': 'q', 'autocomplete': 'off' }}
                            />
                        </div>
                        {
                            searchResults.map(post => (
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            {post.data.subreddit} • by {post.data.author}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                            {post.data.title}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link to={'/post/' + post.data.subreddit + '/' + post.data.id + '/' + getFullTitle('http:redit.com' + post.data.permalink)}>
                                            <Button color="primary">Details</Button>
                                        </Link>
                                        <Button color="primary">
                                            <ThumbUp />&nbsp;&nbsp;
                                                 {post.data.score}
                                        </Button>
                                    </CardActions>
                                </Card>
                            ))
                        }
                    </Popover>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <a href="https://github.com/xsky13/RedFeed/" target="_blank" className="github-link">
                            <IconButton aria-label="Github" color="inherit">
                                <GitHub />
                            </IconButton>
                        </a>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
