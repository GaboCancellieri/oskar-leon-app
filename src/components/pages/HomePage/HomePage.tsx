'use client';

import styles from './HomePage.module.scss';
import { AboutMe, IntroBanner, PortfolioResume } from './components';

export default function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <IntroBanner />
      <AboutMe />
      <PortfolioResume />
    </div>
  );
}
