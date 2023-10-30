import Typography from '@mui/material/Typography';

import styles from '@/styles/work.module.css'

import Card from '../components/card.js'

import Portfolio from '../public/placeholder.jpg'
import ToDoList from '../public/placeholder.jpg'
import Weather from '../public/placeholder.jpg'
import Dad2 from '../public/placeholder.jpg'
import Memory from '../public/placeholder.jpg'
import TicTac from '../public/placeholder.jpg'
import MangaFront from '../public/placeholder.jpg'
import MangaBack from '../public/placeholder.jpg'
import DadJokes from '../public/placeholder.jpg'
import GameOfWar from '../public/placeholder.jpg'



function Work() {

  console.log("hello world")
  let projects = [
    {
      name: 'Old Portfolio App',
      info: 'This webpage is a React App showcasing my abilities to potential employers. Project cards on the projects page are programmatically created from an array of objects containing relevant data. The cards are then conditionally rendered based to the data in the related object. React router was used to provide the user with different views.',
      url: 'https://portfolio-ble.herokuapp.com/',
      git: 'https://github.com/bryan-emerson/portfolio',
      stack: 'React/Bootstrap/Node/Express',
      image: Portfolio
    },
    {
      name: 'TypeScript To Do List',
      info: 'This To Do List App was created with TypeScript, HTML, and CSS. It was bundled with snowpack. New Task <li> items are programatically appended to the <ul> parent node and are written to local storage for persistence. The app can clear checked tasks by comparing unique IDs between items and splicing them out of the Tasks array, then re writing it to local storage. The list is then re rendered in the browser to reflect the removed items!',
      url: 'https://soft-clock.surge.sh/',
      git: 'https://github.com/bryan-emerson/toDoList-Snowpack',
      stack: 'Typescript/Snowpack',
      image: ToDoList
    },
    {
      name: 'Weather App!',
      info: 'In this React app, the useEffect hook calls navigator.geolocation.getCurrentPosition() when the page loads to determine the user’s location. A fetch call is then made to the Open Weather API, and hooks are used to set the returned data to state. Conditional rendering shows a loading message until the weather app UI renders.  A link at the bottom of the app will programmatically make a search string for the dark skies website, and take users to a more in-depth weather data experience.',
      url: 'https://unused-earthquake.surge.sh/',
      git: 'https://github.com/bryan-emerson/weather-one',
      stack: 'React/Bootstrap',
      image: Weather
    },
    {
      name: 'Dad Jokes 2.0',
      info: 'This is a single page React app using functional component based architecture. Hooks and Props are used for state management. The useEffect hook makes an intial fetch call to the Dad Jokes API. These initial jokes are rendered until the user enters a search term in the form. The form input is used to programatically update the fetch call on change, and new jokes matching the search term are rendered!',
      url: 'https://abhorrent-lumber.surge.sh/',
      git: 'https://github.com/bryan-emerson/jokeDad',
      stack: 'React/Bootstrap',
      image: Dad2
    },
    {
      name: 'Memory',
      info: 'This project is a simple game of memory. Click on cards to find matches! The project was built with a focus on functional programming as opposed to object oriented programming. Vanilla Javascript & CSS were used along with DOM manipulation to create interactive gameplay with the HTML elements.',
      url: 'https://overt-library.surge.sh',
      git: 'https://github.com/bryan-emerson/memory',
      stack: 'Javascript/HTML/CSS',
      image: Memory
    },
    {
      name: 'Tic Tac Toe',
      info: 'This project is a digital representation of the classic game Tic Tac Toe. Languages used include Javascript, HTML, and CSS. DOM manipulation has been used to create interactive gameplay with the HTML elements. This project has been deployed using surge.',
      url: 'https://cynical-pail.surge.sh',
      git: 'https://github.com/bryan-emerson/tic-tac',
      stack: 'Javascript/HTML/CSS',
      image: TicTac
    },
    {
      name: 'Manga Meat Front',
      info: 'Manga Meat is the HOTTEST new anime food restaurant on the block! This is the front end of a MERN full stack app. This app is an online menu and database management system. The frontend was created as a React app. React was chosen for its component centered build process and speedy virtual DOM. Props were used for state management, and methods written in the App.js allow individual components to make CRUD requests to the backend.',
      url: 'https://shiny-yarn.surge.sh',
      git: 'https://github.com/bryan-emerson/Manga-Meat-Front',
      stack: 'React/Bootstrap',
      image: MangaFront
    },
    {
      name: 'Manga Meat Back',
      info: 'This is the Back end of the full stack MERN app Manga Meat. It uses MongoDB, and Express is used to simplify the server creation process. This backend has full CRUD functionality using POST, GET, PUT, and DELETE requests. It is deployed using MongoDB Atlas and Heroku. Food data can be found at the \'/food\' endpoint and chef data can be found at the \'/character\' endpoint.',
      url: 'https://manga-meat-back.herokuapp.com/food',
      git: 'https://github.com/bryan-emerson/Manga-Meat-Back',
      stack: 'Mongo/Express',
      image: MangaBack
    },
    {
      name: 'Dad Joke Generator',
      info: 'This is a React app featuring a simple UI that makes a fetch call to a dad joke API. Every time the dad joke button is pressed a new random dad joke appears!',
      url: 'http://cheerful-passenger.surge.sh/',
      git: 'https://github.com/bryan-emerson/dad-jokes',
      stack: 'React/CSS/Surge',
      image: DadJokes
    },
    {
      name: 'Game of War',
      info: 'This is a digital representation of the card game war. It is based mainly in javascript and is built with Object Oriented Programming. It is played in the console. Game logic, ES6 classes, and methods have been used to create the playing environment.',
      url: 'https://bryan-emerson.github.io/',
      git: 'https://github.com/bryan-emerson/bryan-emerson.github.io',
      stack: 'Javascript/HTML/CSS',
      image: GameOfWar
    },
  ]

  const getAllProj = (array, index) => {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
      tempArr.push(<Card projObj={array[i]} key={i} />)
    }
    return tempArr;
  }

  let allProjects = "";

  if (projects.length) {
    allProjects = getAllProj(projects)
  }

  return (
    <>
      <div className={styles.work}>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Typography variant="h2" gutterBottom className={styles.h2}>
              FEATURED
            </Typography>
            <Typography variant="subtitle2" className={styles.subtitle}>
              Work
            </Typography>
            <Typography variant="body1" className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div className={styles.cardContainer}>
            {allProjects}
          </div>
        </div>
      </div>
    </>
  )

}

export default Work;