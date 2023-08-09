import Typography from '@mui/material/Typography';

import styles from '@/styles/work.module.css'



function Work() {
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

          </div>
        </div>
      </div>
    </>
  )

}

export default Work;