import Dad2 from '../public/placeholder.jpg'
import KMM from '../public/kmm.png'
import Laborie from '../public/laborie.png'
import Memory from '../public/memory.png'
import toDo from '../public/toDoList.png'
import weatherApp from '../public/weatherApp.png'
import dadJokes from '../public/dadJokes.png'

let projects = [
  {
    name: 'Know My Menu',
    info: 'As the remote frontend developer for this startup out of Ventura, CA, I am writing TSX code and making commits on a regular basis. I work closely with the backend team to implement new features and maintain the existing codebase. Daily standups revolve around the Jira agile boards and Slack is our main form of communication. We are CI/CD through Vercel, and I am very familiar with managing a deployment through the Vercel dashboard. Our repo is hosted on github and we maintain three branches: development, staging, and main. The app is built with Next.js, React, and Material UI. We use Recoil, SWR, and Axios for fetching and state managment. Authorization is handled with auth0. We outsource UX/UI design to Juice Media and implementation is then handed off to me. Know My Menu is a menu managment system for food service brands that allows guests to filter menus based on diet preferences and allergies. Users exist at the KMM admin level, brand level, and customer level. Brands are able to manage multiple locations through their account. ',
    url: 'https://knowmymenu.com/restaurants',
    git: null,
    stack: ['Next.js', 'React', 'Material UI', 'Typescript', 'Vercel'],
    image: KMM,
  },
  {
    name: 'Laborie Medical Technologies',
    info: 'In my former role at Laborie Medical Technologies, a global leader in medical technology serving clinicians across 110 countries, I served as one of two product lifecycle management developers. The PLM team was tasked with the critical function of integrating Laborie medical devices with hospital electronic medical record systems, including widely used platforms like Cerner and Epic. This integration process involved direct collaboration with client IT departments through video conferencing, where we would explain the functionality of our software, gather specific requirements, and proceed with the necessary implementations. I worked alongside a cross-functional team comprised of two electrical engineers, two mechanical engineers, one design verification engineer, and another software developer. My responsibilities extended beyond software integration; I also maintained legacy device software and embedded firmware. Additionally, I collaborated closely with team members to enhance device capabilities, including the integration of Bluetooth features and RFID technology for consumable medical devices and scanners. Beyond my technical duties, I supported the sales team in a sales engineer capacity, providing technical insights and assistance during client interactions. I also contributed to design verification efforts, especially during peak periods, to ensure our products met rigorous quality standards.',
    url: 'https://www.laborie.com/',
    git: null,
    stack: ['C#', '.Net', 'React', 'Azure', 'SQL'],
    image: Laborie,
  },
  {
    name: 'TypeScript To Do List',
    info: 'This To Do List App was created with TypeScript, HTML, and CSS. It was bundled with snowpack. New Task <li> items are programatically appended to the <ul> parent node and are written to local storage for persistence. The app can clear checked tasks by comparing unique IDs between items and splicing them out of the Tasks array, then re writing it to local storage. The list is then re rendered in the browser to reflect the removed items!',
    url: 'https://soft-clock.surge.sh/',
    git: 'https://github.com/bryan-emerson/toDoList-Snowpack',
    stack: ['Typescript', 'Next.js', 'Material UI', 'React', 'Vercel'],
    image: toDo,
  },
  {
    name: 'Dad Jokes 2.0',
    info: 'This is a single page React app using functional component based architecture. Hooks and Props are used for state management. The useEffect hook makes an intial fetch call to the Dad Jokes API. These initial jokes are rendered until the user enters a search term in the form. The form input is used to programatically update the fetch call on change, and new jokes matching the search term are rendered!',
    url: 'https://abhorrent-lumber.surge.sh/',
    git: 'https://github.com/bryan-emerson/jokeDad',
    stack: ['React', 'Bootstrap'],
    image: dadJokes,
  },
  {
    name: 'Memory',
    info: 'This project is a simple game of memory. Click on cards to find matches! The project was built with a focus on functional programming as opposed to object oriented programming. Vanilla Javascript & CSS were used along with DOM manipulation to create interactive gameplay with the HTML elements.',
    url: 'https://overt-library.surge.sh',
    git: 'https://github.com/bryan-emerson/memory',
    stack: ['Javascript', 'HTML', 'CSS'],
    image: Memory,
  },
  {
    name: 'Weather App',
    info: 'In this React app, the useEffect hook calls navigator.geolocation.getCurrentPosition() when the page loads to determine the location of the user. A fetch call is then made to the Open Weather API, and hooks are used to set the returned data to state. Conditional rendering shows a loading message until the weather app UI renders. A link at the bottom of the app will programmatically make a search string for the dark skies website, and take users to a more in-depth weather data experience.',
    url: 'https://unused-earthquake.surge.sh/',
    git: 'https://github.com/bryan-emerson/weather-one',
    stack: ['React', 'Javascript', 'CSS'],
    image: weatherApp,
  },
]

export default projects;