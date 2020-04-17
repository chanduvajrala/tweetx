import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Tweet from '../components/Tweet'
import Profile from '../components/Profile'


import { connect } from 'react-redux';
import { getTweets } from '../redux/actions/dataActions';


class Home extends Component {
    state = {
        tweets : null
    }

    componentDidMount(){
        let localTweets = localStorage.getItem("tweets");
        console.log(localTweets)
        if(localTweets){
            this.setState({
                tweets: JSON.parse(localTweets)
            })
        }
        else{
        axios.get('/tweets')
            .then(res => {
                this.setState({
                    tweets: res.data
                })
                localStorage.setItem("tweets", JSON.stringify(res.data))
                JSON.stringify(res.data)
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        let recentTweets = this.state.tweets ? (
            this.state.tweets.map(tweet => <Tweet tweet={tweet} key={tweet.tweetId}/>)
         ) : '';
        
        return (
            <Grid container spacing={2}>
                <Grid item sm/>
                <Grid item sm={6}>

                    <div className="write">
                    <Button onClick="" type="submit" variant="contained" className="writeButton" color="secondary">Write</Button>
                    </div>

                    <div className ='feed-container'>
                        {recentTweets}
                    </div>
                </Grid>
                <Grid item sm/>
                {/* <Grid item sm><Profile/></Grid> */}
            </Grid>
        )
    }
}

Home.propTypes = {
  getTweets: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getTweets }
)(Home);
