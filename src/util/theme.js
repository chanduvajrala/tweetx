export default {
  palette:{
    primary : {light : '',main: '#FFF',dark: '',contrastText : '#FF748D'},
    secondary : {light : '#FFA0C0',main: '#FF748D',dark: '#FF2A64',contrastText : '#FFF'}
  },
  loginContainer: {textAlign: 'center'},
  logo:{margin: '80px 0 20px 0'},
  pageTitle:{margin: '20px 0 20px 0'},
  textField:{margin : '20px 0px'},
  buttonLogin:{marginTop: 20, position:'relative'},
  loginWrapper:{display:'inline-block'},
  buttonSignup:{float: 'left', margin: 20},
  customError: {color: 'red'},
  progress:{position:'absolute'},
  invisibleSeparator: {
    border: 'none',
    margin: 4
  },
  visibleSeparator: {
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginBottom: 20
  },
  paper: {
    padding: 20
  },
  profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%'
      }
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      textAlign: 'center',
      '& span, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: '#00bcd4'
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 10px'
    }
  }
}