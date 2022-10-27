import { Typography } from '@mui/material';
import { Button } from 'components/Button';
import { routers } from 'engine/routes/routes';
import styles from 'styles/home.module.scss';

const Home = () => (
  <>
    <Typography variant="h1" className={styles.title}>
      Welcome to simple TODO App
    </Typography>

    <Button
      href={routers.todos}
      className={styles.todoButton}
      variant="contained"
    >
      Check Todo list
    </Button>
  </>
);

export default Home;
