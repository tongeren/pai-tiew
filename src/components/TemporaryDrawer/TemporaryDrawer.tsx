import { Fragment, useState, KeyboardEvent, MouseEvent } from 'react'
import { Drawer, Button, List, ListItem, Grid } from '@material-ui/core'
import styles from './TemporaryDrawer.module.scss'

export const TemporaryDrawer = () => {
  const [state, setState] = useState({ right: false })

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => { 
      if (
          event.type === 'keydown' &&
          ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
          return
      }

      setState({ ...state, right: open });
  };

  return (
    <div>
        <Button onClick={ toggleDrawer(true)}>Toggle</Button>
        <Drawer anchor="right" open={ state["right"] } onClose={ toggleDrawer(false) }>
          <div
            className={ styles.drawer }
            role="presentation"
            onClick={ toggleDrawer(false) }
            onKeyDown={ toggleDrawer(false) }
          >
            <Grid 
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <div className={ styles.logotext }>Pai Tiew</div>
              <div className={ styles.drawerbutton }>
                <Button variant="contained" color="primary" size="large">Book Now</Button>
              </div>
              <List>
                <ListItem>My Story</ListItem>
                <ListItem>Blog (coming soon!)</ListItem> 
              </List>
            </Grid>
          </div>
        </Drawer>
    </div>
  );
}


