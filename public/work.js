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
import KMM from '../public/kmm.png'
import Laborie from '../public/laborie.png'

let projects = [
  {
    name: 'TypeScript To Do List',
    info: 'This To Do List App was created with TypeScript, HTML, and CSS. It was bundled with snowpack. New Task <li> items are programatically appended to the <ul> parent node and are written to local storage for persistence. The app can clear checked tasks by comparing unique IDs between items and splicing them out of the Tasks array, then re writing it to local storage. The list is then re rendered in the browser to reflect the removed items!',
    url: 'https://soft-clock.surge.sh/',
    git: 'https://github.com/bryan-emerson/toDoList-Snowpack',
    stack: ['Typescript', 'Next.js', 'Material UI', 'React', 'Vercel'],
    image: KMM,
    details: "This To Do List App was created with TypeScript, HTML, and CSS. It was bundled with snowpack. New Task <li> items are programatically appended to the <ul> parent node and are written to local storage for persistence. The app can clear checked tasks by comparing unique IDs between items and splicing them out of the Tasks array, then re writing it to local storage. The list is then re rendered in the browser to reflect the removed items!"
  },
  {
    name: 'Laborie',
    info: 'In this React app, the useEffect hook calls navigator.geolocation.getCurrentPosition() when the page loads to determine the user’s location. A fetch call is then made to the Open Weather API, and hooks are used to set the returned data to state. Conditional rendering shows a loading message until the weather app UI renders.  A link at the bottom of the app will programmatically make a search string for the dark skies website, and take users to a more in-depth weather data experience.',
    url: 'https://unused-earthquake.surge.sh/',
    git: 'https://github.com/bryan-emerson/weather-one',
    stack: ['C#', '.Net', 'React', 'Azure', 'SQL'],
    image: Laborie
  },
  {
    name: 'Dad Jokes 2.0',
    info: 'This is a single page React app using functional component based architecture. Hooks and Props are used for state management. The useEffect hook makes an intial fetch call to the Dad Jokes API. These initial jokes are rendered until the user enters a search term in the form. The form input is used to programatically update the fetch call on change, and new jokes matching the search term are rendered!',
    url: 'https://abhorrent-lumber.surge.sh/',
    git: 'https://github.com/bryan-emerson/jokeDad',
    stack: ['React', 'Bootstrap'],
    image: Dad2
  },
  {
    name: 'Memory',
    info: 'This project is a simple game of memory. Click on cards to find matches! The project was built with a focus on functional programming as opposed to object oriented programming. Vanilla Javascript & CSS were used along with DOM manipulation to create interactive gameplay with the HTML elements.',
    url: 'https://overt-library.surge.sh',
    git: 'https://github.com/bryan-emerson/memory',
    stack: ['Javascript', 'HTML', 'CSS'],
    image: Memory
  },
]

export default projects;