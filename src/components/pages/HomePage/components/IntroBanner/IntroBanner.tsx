'use client';

import { Carousel, ImageWithFallback } from '@/components/common';
import styles from './IntroBanner.module.scss';

const bannerImages = [
  {
    src: '/img/banner/slide1.png',
    alt: 'Slide 1',
  },
  {
    src: '/img/banner/slide2.jpg',
    alt: 'Slide 2',
  },
  {
    src: '/img/banner/slide3.jpg',
    alt: 'Slide 3',
  },
  {
    src: '/img/banner/slide4.jpg',
    alt: 'Slide 4',
  },
  {
    src: '/img/banner/slide5.jpg',
    alt: 'Slide 5',
  },
  {
    src: '/img/banner/slide6.jpg',
    alt: 'Slide 6',
  },
  {
    src: '/img/banner/slide7.jpg',
    alt: 'Slide 7',
  },
];

export default function IntroBanner() {
  return (
    <div
      id="intro"
      className={styles.introBanner}
    >
      <Carousel
        plugins={{ autoplay: true, fade: true }}
        options={{
          align: 'center',
          circular: true,
          bound: true,
          panelsPerView: 0,
          inputType: ['touch', 'mouse'],
          moveType: ['strict', { count: 1 }],
          preventClickOnDrag: false,
          disableOnInit: false,
        }}
        classname={styles.carousel}
      >
        {bannerImages.map((image, index) => (
          <div
            className={styles.slide}
            key={index}
          >
            <ImageWithFallback
              className={styles.image}
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
