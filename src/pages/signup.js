import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';
// import axios from 'axios';

import Background from "../assets/log_in.png";

const styles = {
    loginContainer: {textAlign: 'center'},
    logo:{margin: '20px 0 20px 0'},
    pageTitle:{margin: '20px 0 20px 0'},
    textField:{margin : '20px 0px 0px 0px'},
    buttonLogin:{marginTop: 20, position:'relative', float: 'right'},
    loginWrapper:{display:'inline-block'},
    buttonSignup:{float: 'left', margin: 20},
    customError: {color: 'red'},
    progress:{position:'absolute', }
}

class signup extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword:'',
            handle:'',
            loading: false,
            errors: {}
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
        this.setState({ errors: nextProps.UI.errors });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }
        this.props.signupUser(newUserData, this.props.history);
        // axios.post('/signup', newUserData).then(res => {
        //     console.log(res.data);
        //     localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`)
        //     this.setState({
        //         loading: false
        //     });
        //     this.props.history.push('/')
        // }).catch(err =>{
        //     this.setState({
        //         errors: err.response.data,
        //         loading: false
        //     })
        // })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const {classes, UI : {loading}} = this.props;
        const { errors } = this.state;
        return (
            <div>
            <div className="log_in_right">
                <img className="img" src={Background}/>
            </div> 
                <Grid container className={classes.loginContainer}>
                    <Grid item sm>
                        <Button type="submit" variant="outlined" color="secondary" className={classes.buttonSignup}><Link to='/login'>Login</Link></Button>
                        <div className={classes.loginWrapper}>
                            <Typography variant="h2" className = {classes.logo}>TweetX </Typography>
                            <Typography variant="h3" className = {classes.pageTitle}>Create Account</Typography>
                            <form noValidate onSubmit = {this.handleSubmit}>
                                <TextField id="email" name="email" type="email" label="Email" className={classes.textField} value={this.state.email} onChange={this.handleChange} variant="outlined" helperText = {errors.email} error={errors.email ? true : false} fullWidth/>
                                <TextField id="password" name="password" type="password" label="Password" className={classes.textField} value={this.state.password} onChange={this.handleChange} helperText = {errors.password} error={errors.password ? true : false} variant="outlined" fullWidth/>
                                <TextField id="confirmPassword" name="confirmPassword" type="password" label="confirmPassword" className={classes.textField} value={this.state.confirmPassword} onChange={this.handleChange} helperText = {errors.confirmPassword} error={errors.confirmPassword ? true : false} variant="outlined" fullWidth/>
                                <TextField id="handle" name="handle" type="text" label="Handle" className={classes.textField} value={this.state.handle} onChange={this.handleChange} helperText = {errors.handle} error={errors.handle ? true : false} variant="outlined" fullWidth/>                            
                                {errors.general && (<Typography variant="body2" className={classes.customError}>{errors.general}</Typography>)}
                                <Button type="submit" variant="contained" color="secondary" className={classes.buttonLogin} disabled={loading}>
                                Signup{ loading && (<CircularProgress size = {25} className={classes.progress}/>)}
                                </Button>
                        </form>
                        </div>
                    </Grid>
                    <Grid item sm/>
                    <Grid item sm/>
                </Grid>
            </div>
        )
    }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
    signupUser
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(signup));
