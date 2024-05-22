// JumpLinkButton.js
import Typography from '@mui/material/Typography';
import styles from '@/styles/hero.module.css'

function JumpLinkButton({ href, children }) {
  return (
    <a href={href}>
      <Typography variant="button" className={styles.label} sx={{ color: '#ffffff' }}>{children}</Typography>
    </a>
  );
}

export default JumpLinkButton;