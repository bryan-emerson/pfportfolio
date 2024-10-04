import Dad2 from "../public/placeholder.jpg";
import KMM from "../public/kmm.png";
import Laborie from "../public/laborie.png";
import Memory from "../public/memory.png";
import toDo from "../public/toDoList.png";
import weatherApp from "../public/weatherApp.png";
import dadJokes from "../public/dadJokes.png";

let projects = [
  {
    name: "Know My Menu",
    info: [
      "My Current role",
      "Solo Remote frontend developer for a startup in Ventura, CA.",
      "Write TypeScript code on a daily basis and make regular commits.",
      "Collaborate closely with the backend team, UX/UI design team, and C-Suite for feature development and maintenance.",
      "Daily standups are focused on Jira agile boards, with Slack and Teams as the main communication tools.",
      "CI/CD pipeline is managed through Vercel; familiar with Vercel's dashboard and inner workings.",
      "GitHub is used for repository hosting, with three branches maintained: development, staging, and main.",
      "Tech stack includes Next.js, React, Material UI, Recoil, SWR, and Axios.",
      "Authorization is handled using Auth0.",
      "Product is 'Know My Menu,' a menu management system for food service brands.",
      "Allows guests to filter menus based on dietary preferences and allergies.",
    ],
    url: "https://knowmymenu.com/restaurants",
    git: null,
    stack: ["Next.js", "React", "Material UI", "Typescript", "Vercel"],
    image: KMM,
  },
  {
    name: "Laborie Medical Technologies",
    info: [
      "In my former role at Laborie Medical Technologies, a global leader in medical technology serving clinicians across 110 countries, I served as one of two product lifecycle management (PLM) developers.",
      "The PLM team was tasked with integrating Laborie medical devices with hospital electronic medical record systems, including platforms like Cerner and Epic.",
      "Collaborated directly with client IT departments through video conferencing to explain software functionality, gather requirements, and implement solutions.",
      "Worked alongside a cross-functional team of two electrical engineers, two mechanical engineers, one design verification engineer, and another software developer.",
      "Maintained legacy device software and embedded firmware in addition to software integration duties.",
      "Collaborated with team members to enhance device capabilities, including integrating Bluetooth features and RFID technology for consumable medical devices and scanners.",
      "Supported the sales team in a sales engineer capacity, providing technical insights and assistance during client interactions.",
      "Contributed to design verification efforts, especially during peak periods, to ensure products met rigorous quality standards.",
    ],
    url: "https://www.laborie.com/",
    git: null,
    stack: ["C#", ".Net", "React", "Azure", "SQL"],
    image: Laborie,
  },
  {
    name: "TypeScript To Do List",
    info: [
      "This To-Do List App was created with TypeScript, HTML, and CSS.",
      "It was bundled with Snowpack.",
      "New Task <li> items are programmatically appended to the <ul> parent node and written to local storage for persistence.",
      "The app can clear checked tasks by comparing unique IDs between items and splicing them out of the Tasks array.",
      "After splicing, the Tasks array is re-written to local storage.",
      "The list is then re-rendered in the browser to reflect the removed items."
    ],
    url: "https://soft-clock.surge.sh/",
    git: "https://github.com/bryan-emerson/toDoList-Snowpack",
    stack: ["Typescript", "Next.js", "Material UI", "React", "Vercel"],
    image: toDo,
  },
  {
    name: "Dad Jokes 2.0",
    info: [
      "This is a single-page React app using functional component-based architecture.",
      "Hooks and Props are used for state management.",
      "The useEffect hook makes an initial fetch call to the Dad Jokes API.",
      "Initial jokes are rendered until the user enters a search term in the form.",
      "The form input is used to programmatically update the fetch call on change.",
      "New jokes matching the search term are rendered as the user types."
    ],
    url: "https://abhorrent-lumber.surge.sh/",
    git: "https://github.com/bryan-emerson/jokeDad",
    stack: ["React", "Bootstrap"],
    image: dadJokes,
  },
  {
    name: "Memory",
    info: [
      "This project is a simple game of memory where players click on cards to find matches.",
      "The project was built with a focus on functional programming instead of object-oriented programming.",
      "Vanilla JavaScript and CSS were used to build the game.",
      "DOM manipulation was used to create interactive gameplay with the HTML elements."
    ],
    url: "https://overt-library.surge.sh",
    git: "https://github.com/bryan-emerson/memory",
    stack: ["Javascript", "HTML", "CSS"],
    image: Memory,
  },
  {
    name: "Weather App",
    info: [
      "In this React app, the useEffect hook calls navigator.geolocation.getCurrentPosition() when the page loads to determine the user's location.",
      "A fetch call is made to the Open Weather API, and hooks are used to set the returned data to state.",
      "Conditional rendering shows a loading message until the weather app UI renders.",
      "A link at the bottom of the app programmatically creates a search string for the Dark Skies website, offering users a more in-depth weather data experience."
    ],
    url: "https://unused-earthquake.surge.sh/",
    git: "https://github.com/bryan-emerson/weather-one",
    stack: ["React", "Javascript", "CSS"],
    image: weatherApp,
  },
];

export default projects;
