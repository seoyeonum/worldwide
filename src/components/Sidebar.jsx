import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* Outlet 컴포넌트는 children props와 유사 */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
