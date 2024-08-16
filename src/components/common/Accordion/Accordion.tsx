import { useState } from 'react';
import classNames from 'classnames';
import styles from './Accordion.module.scss';
import { Icon, Typography } from '..';

interface AccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ className, title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames(styles.accordion, className)}>
      <div
        className={styles.title}
        onClick={toggleAccordion}
      >
        <Typography variant="h3">{title}</Typography>
        <div className={styles.icon}>
          <Icon
            iconId={isOpen ? 'chevron-up' : 'chevron-down'}
            width={20}
            height={14}
          />
        </div>
      </div>
      <div className={classNames(styles.content, { [styles.open]: isOpen })}>{children}</div>
    </div>
  );
}
