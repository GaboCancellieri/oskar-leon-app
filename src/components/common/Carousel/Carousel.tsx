'use client';

import { Children } from 'react';
import Flicking, { FlickingOptions, MoveEvent, WillChangeEvent } from '@egjs/react-flicking';
import { AutoPlay, Fade, Parallax } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import '@egjs/react-flicking/dist/flicking-inline.css';

interface CarouselProps {
  plugins?: {
    autoplay?: boolean,
    fade?: boolean,
    parallax?: boolean,
  };
  options?: Partial<FlickingOptions>;
  classname?: string;
  children: React.ReactNode;
}

export default function Carousel({ plugins = {}, options = {}, classname = '', children }: CarouselProps) {
  const activePlugins = [];

  if (plugins.autoplay) {
    activePlugins.push(new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }));
  }

  if (plugins.fade) {
    activePlugins.push(new Fade());
  }

  if (plugins.parallax) {
    activePlugins.push(new Parallax());
  }

  return (
    <Flicking
      {...options}
      plugins={activePlugins}
      className={classname}
    >
      {children}
    </Flicking>
  );
}
