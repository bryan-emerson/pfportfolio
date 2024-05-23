import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import styles from '@/styles/hero.module.css'

function JumpLinkButton({ href, children }) {
  const theme = useTheme();
  return (
    <a href={href}>
      <Typography variant="button" className={styles.label} sx={{ backgroundColor: theme.palette.tertiary.main, color: theme.palette.primary.main }}>{children}</Typography>
    </a>
  );
}

export default JumpLinkButton;