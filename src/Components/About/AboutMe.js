import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Navbar from '../Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));


function AboutMe(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Navbar />
            <main className={classes.content}>
                <h1>Joshua Duke</h1>

                <div>                            
                    <h2>A little about me</h2>
                    <p>
                    Vivamus pulvinar finibus odio, eu imperdiet ex volutpat ut. Proin eget nisi vel enim pretium placerat in eget sem. Sed mollis mauris in condimentum mollis. Nam pretium, lorem ac porta lobortis, risus nisl pellentesque nunc, vel sagittis sem libero ut ligula. Suspendisse potenti. Maecenas pretium lectus massa, vitae ultricies nulla congue at. Vivamus quis lacus turpis. Nulla et tellus nibh. Phasellus congue euismod tortor, cursus mollis erat faucibus tempor. Nullam libero orci, placerat sed fermentum in, sagittis vitae neque. Maecenas leo turpis, posuere id eros ac, lobortis ornare enim. Donec bibendum semper lorem id finibus. Praesent eu suscipit ante. Aenean sagittis venenatis hendrerit.
                    </p>
                </div>

                <div>
                    <h2>What I use</h2>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>MongoDb</span>
                    <span>Node</span>
                    <span>Google Analytics</span>
                </div>
            </main>
        </div>
        
    )
}

export default AboutMe;