import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
//Material Ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card:{
        display: 'flex',
        marginBottom : 20,
        borderRadius: 20,
        position: 'relative'
    },
    content:{
        padding: 20,
        width: '75%',
        objectFit: 'cover'
    },
    image:{
        width: 55,
        height: 55,
        borderRadius: 50,
        margin: '20px 0px 0px 20px',
        border:'1px solid #383838'
    },
    left:{float:'left'},
    right:{float:'right', fontSize:8, opacity: 0.5},
    accent:{
        width:50,
        height:50,
        position:'absolute',
        right:-25,
        bottom:20,
        borderRadius: '50%',
        background: '#FF748D'
    }
}

class Tweet extends Component {
    render() {
        dayjs.extend(relativeTime)
        const {classes, tweet:{body, createdAt, userImage, userHandle, tweetId, likeCount, commentCount}} = this.props
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia className = {classes.image} image = {userImage} title="Profile picture"/>  
                    <CardContent className = {classes.content}>
                        <div className = {classes.left}>
                        <Typography variant="h5" color='secondary' component ={Link} to= {`/users/${userHandle}`}>{userHandle}</Typography>
                        </div>
                        <div className = {classes.right}>
                        <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                        </div>
                        <div className = {classes.left}>
                        <Typography variant="body1" color="textPrimary">{body}</Typography>
                        </div>
                    </CardContent>
                    <div className={classes.accent}/>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Tweet);
