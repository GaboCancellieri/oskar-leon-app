import { ImageWithFallback, Typography } from '@/components/common';
import styles from './Staff.module.scss';

const STAFF_MEMBERS = [
  {
    name: 'Jessica',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis id neque doloribus deserunt, tempore excepturi hic culpa nihil mollitia sit optio corrupti odio harum esse veritatis, molestias voluptatem?',
    image: '/img/home/staff/jessica.jpg',
  },
  {
    name: 'Laureano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis id neque doloribus deserunt, tempore excepturi hic culpa nihil mollitia sit optio corrupti odio harum esse veritatis, molestias voluptatem?',
    image: '/img/home/staff/laureano.jpg',
  },
  {
    name: 'Liliam',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis id neque doloribus deserunt, tempore excepturi hic culpa nihil mollitia sit optio corrupti odio harum esse veritatis, molestias voluptatem?',
    image: '/img/home/staff/liliam.jpg',
  },
  {
    name: 'Victor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, debitis id neque doloribus deserunt, tempore excepturi hic culpa nihil mollitia sit optio corrupti odio harum esse veritatis, molestias voluptatem?',
    image: '/img/home/staff/victor.jpg',
  },
];

export default function Staff() {
  return (
    <div
      id="staff"
      className={styles.staffContainer}
    >
      <Typography variant="h1">Staff Profesional</Typography>
      <div className={styles.staffList}>
        {STAFF_MEMBERS.map(staff => (
          <div
            key={staff.name}
            className={styles.staffItem}
          >
            <ImageWithFallback
              className={styles.staffImage}
              src={staff.image}
              alt={staff.name}
              width={200}
              height={200}
            />
            <Typography
              className={styles.staffTitle}
              variant="h2"
            >
              {staff.name}
            </Typography>
            <Typography variant="normal">{staff.description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
