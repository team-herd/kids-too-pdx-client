import React from 'react';
import { Link } from 'react-router-dom';
// import Home from '../home/Home';
// import EventDetailContainer from '../../containers/EventDetailContainer';
// import AdminEvents from '../admin/AdminEvents';
// import AboutUs from '../info/AboutUs';
// import Callback from '../../containers/auth/Callback';
// import Contact from '../info/Contact';
import styles from './Header.css';
// import Resources from '../resources/Resources';

function Header() {
  return (
    <>
        <section className={styles.container}>
          <header className={styles.Header}>
            <section className={styles.logo}>
              <img src='../../../public/assets/logo2.png' />
            </section>
            <nav className={styles.nav}>
              <Link to="/">Home</Link>
              <Link to='/submit-event'>Submit Event</Link>
              <Link to="/contact">Contact</Link>
              <Link to='/resources'>Resources</Link>
            </nav>
          </header>
        </section>
      </>
  );
}
export default Header;
