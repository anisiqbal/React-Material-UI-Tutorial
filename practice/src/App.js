import logo from './logo.svg';
import './App.css';
import SideMenu from '../src/Components/SideMenu'
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './Components/Header';

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width: "100%",
  }
})

function App() {

  const classes = useStyles();
  return (
    <>
      <SideMenu/>
      <div className={classes.appMain}>
      <Header/>
      </div>
      <CssBaseline/>
     

    </>
  );
}

export default App;
