import Typography from '@mui/material/Typography';

import styles from '@/styles/work.module.css'

import Card from '../components/card.js'

import projects from '../public/work.js'

function Work() {


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