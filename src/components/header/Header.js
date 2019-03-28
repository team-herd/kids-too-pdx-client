import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home';
import EventDetailContainer from '../../containers/EventDetailContainer';
// import SubmitEvent from '../submission/SubmitEvent';
// import SubmitEventContainer from '../../containers/SubmitEventContainer';
import AdminEvents from '../admin/AdminEvents';
import AboutUs from '../info/AboutUs';
import Callback from '../../containers/auth/Callback';
// import { withSession } from '../../containers/auth/withSession';
import Contact from '../info/Contact';
import styles from './Header.css';
import Resources from '../resources/Resources';

function Header() {
  return (
    <>
      <Router>
        <section className={styles.container}>
          <header className={styles.Header}>
            <section className={styles.logo}>
              <img src='../../../public/assets/logo.png' />
            </section>
            <nav className={styles.nav}>
              <Link to='/'>Home</Link>
              {/* <Link to='/submit-event'>Submit Event</Link> */}
              <Link to='/contact'>Contact</Link>
              <Link to='/resources'>Resources</Link>
            </nav>
          </header>
          
        </section>
      </Router>
    </>
  );
}
export default Header;
