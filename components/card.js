import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import styles from '@/styles/card.module.css'

function Card(props) {
  console.log("hello world")
  return (
    <>
    <div className={styles.card}>
      <Image src={props.projObj.image} alt="screenshot of app" width={600} height={356} disableGutters={true} />
      <Typography>
        {props.projObj.stack}
      </Typography>
      <Typography variant="h4">
        {props.projObj.name}
      </Typography>
      <Typography>
        {props.projObj.info}
      </Typography>
    </div>
    </>
  )
}

export default Card;

//building out card to render in work section. currently wireframing card, need to locate props and render proj data on screen. card data gets mapped through and a card is rendered for each card. I fixed overflow/scroll issue by setting height of .work div in work.js to a fixed pixel height but im not sure if i like this solution...