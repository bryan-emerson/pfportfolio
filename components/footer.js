import Typography from "@mui/material/Typography";

import styles from "styles/footer.module.css";

let navObjects = [
  {
    name: 'About',
    url: '/',
    target: null,
    key: 1,
  },
  {
    name: 'Projects',
    url: '/projects',
    target: null,
    key: 2,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bryanemerson-/',
    target: '_blank',
    key: 3,
  },
  {
    name: 'Github',
    url: 'https://github.com/bryan-emerson',
    target: '_blank',
    key: 4,
  },
  {
    name: 'Resume',
    url: 'https://docs.google.com/document/d/12CYUXDHy1HpexCoWimkxkHj8vrJjY78ds-yaDTRAZXU/edit',
    target: '_blank',
    key: 5,
  },
  {
    name: 'Photo & Design',
    url: 'https://skifaster22.myportfolio.com',
    target: '_blank',
    key: 6,
  },
]

function Footer() {


  function returnLinks(arr, index) {
    let linkArr =[];

    for (let i = 0; i < arr.length; i++) {
     linkArr.push(<a className={styles.a}>{arr[i].name}</a>)
    }
    return linkArr;
  }

  let allLinks = "";

  if (navObjects.length) {
    allLinks = returnLinks(navObjects)
  }


  return (
    <>
      <div className={styles.footer}>
        <div className={styles.left}>
          <Typography>Think We&#39;d Be A Great Fit?</Typography>
          <Typography>Let&#39;s Talk</Typography>
        </div>
        <div className={styles.right}>
          <Typography>{allLinks}</Typography>
        </div>
      </div>
    </>
  );
}

export default Footer;
