
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles ({
    root:{
        backgroundColor: '#fff'
    }
})

function Header() {

    const classes = useStyles(); 

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <InputBase />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                < ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>


                        <IconButton>

                            <PowerSettingsNewIcon />

                        </IconButton>
                    </Grid>


                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default Header;