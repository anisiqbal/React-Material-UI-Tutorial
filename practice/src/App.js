import logo from './logo.svg';
import './App.css';
import SideMenu from '../src/Components/SideMenu'
import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import Header from './Components/Header';
import PageHeader from './Components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#333996",
      light:"#3c44b126",
    },
    secondary:{
      main:"#f83245",
      light:"#f8324526",
    },
    background:{
      default:"#f4f5fd"
    },
  },
  shape:{
    borderRadius:'12px'
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'traslateZ(0)'
      }
    }
  },

  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }



})

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width: "100%",
  }
})

function App() {

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
      <Header/>
      <PageHeader
        title="Page Header"
        subtitle="page description"
        icon={<PeopleOutlineIcon fontSize="large"/>}

      />
      </div>
      <CssBaseline/>
     

    </ThemeProvider>
  );
}

export default App;
