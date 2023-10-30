import Typography from "@mui/material/Typography";

import styles from "styles/footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.left}>
          <Typography>hello</Typography>
        </div>
        <div className={styles.right}>
          <Typography>hello</Typography>
        </div>
      </div>
    </>
  );
}

export default Footer;
