import "./page.scss";
import React, { useEffect, useState } from 'react';

import {
  Grid,
  Typography
} from '@mui/material';


import {
  motion,
  LayoutGroup,
  LazyMotion, domAnimation, m,
  useScroll, useSpring,
  AnimatePresence
} from 'framer-motion';

//layout spring
const layout_spring = {
  type: "spring",
  stiffness: 2000,
  damping: 60
};

export default function Skills(props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {
  }, []);

  return (
    <Grid container direction="column" className="framer p-3" justifyContent="center" alignItems="center">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        // sx={{ scaleX: scrollYProgress }}
      // sx={{ scaleX }}
      />
      <Grid item container direction="row">
        <Grid item md={3}></Grid>
        <Grid item container direction="column" md={6} justifyContent="center" alignItems="flex-start">
          <Grid item>
            <Typography variant='h4'>Languages</Typography>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center" className='p-3'>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="50" height="50" alt="C" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" width="50" height="50" alt="C++" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" width="50" height="50" alt="C#" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                  <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" width="50" height="50" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.w3schools.com/css/" target="_blank">
                  <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" width="50" height="50" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="50" height="50" alt="JavaScript" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="50" height="50" alt="TypeScript" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.php.net/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" width="50" height="50" alt="PHP" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="50" height="50" alt="Python" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://go.dev/doc/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg" width="50" height="50" alt="Go" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://developer.apple.com/swift/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg" width="50" height="50" alt="Swift" />
                </a>
              </motion.button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='h4'>Frameworks</Typography>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center" className='p-3'>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://jquery.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="50" height="50" alt="JQuery" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="50" height="50" alt="React" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="50" height="50" alt="NextJs" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="50" height="50" alt="Vue" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://nuxtjs.org/docs" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg" width="50" height="50" alt="NuxtJs" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://angularjs.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg" width="50" height="50" alt="AngularJS" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg" width="50" height="50" alt="NestJS" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://sveltejs.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg" width="50" height="50" alt="SvelteJS" />
                </a>
              </motion.button>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center" className='p-3'>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="50" height="50" alt="NodeJS" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="50" height="50" alt="Express" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg" width="50" height="50" alt=".NET" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://laravel.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg" width="50" height="50" alt="Laravel" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg" width="50" height="50" alt="Django" />
                </a>
              </motion.button>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center" className='p-3'>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://flutter.dev/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg" width="50" height="50" alt="Flutter" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://dart.dev/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg" width="50" height="50" alt="Dart" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://java.dev/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="50" height="50" alt="Java" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://kotlin.dev/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg" width="50" height="50" alt="Kotlin" />
                </a>

              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://ionicframework.com/" target="_blank" rel="noreferrer">
                  <img src="https://profilinator.rishav.dev/skills-assets/ionic.svg" width="50" height="50" alt="Ionic" />
                </a>
              </motion.button>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center" className='p-3'>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="50" height="50" alt="Bootstrap" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="50" height="50" alt="Tailwind Css" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://mui.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="50" height="50" alt="MUI" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="50" height="50" alt="SASS" />
                </a>
              </motion.button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant='h4'>Database</Typography>
          </Grid>
          <Grid item container direction="row" justifyContent="center" alignItems="center" className='p-3'>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://qraphql.org/" target="_blank">
                  <img src="https://profilinator.rishav.dev/skills-assets/graphql.png" alt="GraphQL" height="50" width="50" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.mysql.com/" target="_blank" >
                  <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" width="50" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://www.mongodb.com/" target="_blank" >
                  <img src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" width="50" />
                </a>
              </motion.button>
            </Grid>
            <Grid item>
              <motion.button className="icons" whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.8 }}>
                <a href="https://firebase.google.com/" target="_blank" >
                  <img src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" width="50" />
                </a>
              </motion.button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}