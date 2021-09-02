import React from 'react'
import Navbar from '../Navbar'

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },
  
  }));

function Portfolio(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Navbar/>
            <main className={classes.content}>
                <h1>My portfolio</h1>
            </main>
        </div>
    )
}

export default Portfolio