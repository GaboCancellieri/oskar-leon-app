'use client';

import styles from './HomePage.module.scss';
import { AboutMe, ContactMe, CoursesResume, IntroBanner, PortfolioResume, Staff } from './components';

export default function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <IntroBanner />
      <AboutMe />
      <Staff />
      <PortfolioResume />
      <CoursesResume />
      <ContactMe />
    </div>
  );
}
