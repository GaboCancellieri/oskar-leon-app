'use client';

import { useState } from 'react';
import styles from './TopNavigation.module.scss';
import { Button, Icon, ImageWithFallback, Typography } from '@/components/common';

const NAV_BUTTONS = [
  {
    label: 'inicio',
    url: '#',
  },
  {
    label: 'sobre mi',
    url: '#aboutMe',
  },
  {
    label: 'staff',
    url: '#staff',
  },
  {
    label: 'portafolio +',
    url: '#portfolio',
  },
  {
    label: 'cursos',
    url: '#courses',
  },
  {
    label: 'contacto',
    url: '#contact',
  },
];

export default function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavButtonClick = (url: string) => {
    window.location.href = url;
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.topNavigation}>
      <div className={styles.leftSection}>
        <Button
          variant="transparent"
          className={styles.logoButton}
        >
          <ImageWithFallback
            src="/img/logo.png"
            alt="Oskar Leon Logo"
            width={100}
            height={50}
          />
        </Button>
        <Typography
          variant="title"
          className={styles.siteTitle}
        >
          Oskar Leon
        </Typography>
      </div>
      <div className={styles.navButtons}>
        {NAV_BUTTONS.map(button => (
          <Button
            className={styles.navButton}
            key={button.label}
            variant="transparent"
            onClick={() => handleNavButtonClick(button.url)}
          >
            <Typography variant="subtitle">{button.label}</Typography>
          </Button>
        ))}
      </div>
      <div className={styles.hamburgerMenu}>
        <Button
          variant="transparent"
          onClick={handleMenuToggle}
        >
          <Icon
            iconId="hamburger-menu"
            width={20}
            height={20}
          />
        </Button>
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            {NAV_BUTTONS.map(button => (
              <Button
                className={styles.navButton}
                key={button.label}
                variant="transparent"
                onClick={() => handleNavButtonClick(button.url)}
                type="button"
              >
                <Typography variant="subtitle">{button.label}</Typography>
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
