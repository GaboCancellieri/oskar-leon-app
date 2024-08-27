'use client';

import { Accordion, ImageWithFallback, Typography } from '@/components/common';
import styles from './Staff.module.scss';
import { useCallback, useState } from 'react';
import classNames from 'classnames';

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec maximus nibh. Aliquam ante urna, commodo ac vestibulum ac, aliquet nec purus. Nunc tincidunt massa vel nisl luctus, eu fringilla turpis vehicula. Sed et placerat justo, eget volutpat odio. Cras blandit est id elementum gravida. Aliquam commodo erat non dui lacinia tincidunt. Integer sem nisl, malesuada sit amet egestas in, malesuada ut nunc. Ut at augue ut libero iaculis faucibus a ac velit. Donec tristique ac mauris eget lobortis. Aliquam iaculis orci vel sagittis elementum. Fusce interdum risus ut massa ornare porta. Vivamus gravida commodo orci, eu facilisis lacus viverra eget.

Nunc efficitur, nisl sit amet porta hendrerit, neque lectus dapibus nibh, in pharetra magna nibh in lacus. `

const STAFF_MEMBERS = [
  {
    name: 'Laureano',
    description: LOREM,
    image: '/img/home/staff/laureano.jpg',
  },
  {
    name: 'Liliam',
    description: LOREM,
    image: '/img/home/staff/liliam.jpg',
  },
  {
    name: 'Victor',
    description: LOREM,
    image: '/img/home/staff/victor.jpg',
  },
];

export default function Staff() {
  const [selectedStaffs, setSelectedStaffs] = useState<string[]>([]);

  const handleStaffSelection = useCallback((staffName: string) => {
    if (selectedStaffs && selectedStaffs.includes(staffName)) {
      setSelectedStaffs(selectedStaffs.filter(staff => staff !== staffName));
    } else {
      setSelectedStaffs([...selectedStaffs, staffName]);
    }
  }, [selectedStaffs]);

  return (
    <div
      id="staff"
      className={styles.staffContainer}
    >
      <Typography variant="h1">Staff Profesional</Typography>
      <div className={styles.staffContent}>
        <Typography
          className={styles.text}
          variant="normal"
        >
          En Oskar Leon, entendemos que la excelencia en fotografía y videografía no es solo el resultado de un buen
          equipo técnico, sino del talento y la experiencia de las personas detrás de la cámara. Nuestro Staff
          Profesional está compuesto por expertos apasionados que, con años de trayectoria y un ojo agudo para los
          detalles, se dedican a capturar cada momento de manera única y auténtica. Nos enorgullece contar con un equipo
          que no solo domina las técnicas más avanzadas del sector, sino que también entiende la importancia de narrar
          historias visuales que resuenen con cada cliente. En Oskar Leon, cada miembro de nuestro equipo es una pieza
          clave para transformar tus recuerdos en imágenes que perdurarán para siempre.
        </Typography>
        <div className={styles.staffList}>
          <Accordion
              key={'jessica'}
              title={'Jessica'}
              className={classNames(styles.accordion, {[styles.selected]: selectedStaffs.includes('jessica')})}
              onClick={() => handleStaffSelection('jessica')}
            >
              <div className={classNames(styles.staffItem, {[styles.selected]: selectedStaffs.includes('jessica')})}>
                <ImageWithFallback
                  className={styles.staffImage}
                  src={'/img/home/staff/jessica.jpg'}
                  alt={'jessica'}
                  width={200}
                  height={200}
                />
                <Typography className={styles.staffText} variant="normal">
                  <p>
                  ¡Hola! Soy Jessica Venegas, tengo 36 años y soy mamá de dos hermosas niñas. La fotografía es mi pasión, y me encanta innovar en cada proyecto. Siempre busco el lado creativo, trabajando con dedicación para lograr una producción de calidad que deje a mis clientes completamente satisfechos. Me fascina capturar la esencia de lo urbano, encontrando ese lugar y momento perfecto que hacen que cada foto sea única y especial.
                  </p>
                  <p>
                  Además de ser fotógrafa, soy maestra de nivel inicial, lo que me ha enseñado a tener una enorme paciencia y dedicación, especialmente cuando se trata de trabajar con niños. Esto me permite conectar de una manera especial con ellos, capturando su esencia de manera natural y auténtica.
                  </p>
                </Typography>
              </div>
            </Accordion>
            <Accordion
              key={'laureano'}
              title={'Laureano'}
              className={classNames(styles.accordion, {[styles.selected]: selectedStaffs.includes('laureano')})}
              onClick={() => handleStaffSelection('laureano')}
            >
              <div className={classNames(styles.staffItem, {[styles.selected]: selectedStaffs.includes('laureano')})}>
                <ImageWithFallback
                  className={styles.staffImage}
                  src={'/img/home/staff/laureano.jpg'}
                  alt={'laureano'}
                  width={200}
                  height={200}
                />
                <Typography className={styles.staffText} variant="normal">
                  <p>
                    ¡Hola! Soy Laureano, un apasionado tatuador, perfumista y fotógrafo artístico y social. Mi trabajo en la fotografía se centra en capturar esos momentos únicos que cuentan historias y reflejan la esencia de cada persona o evento. Me especializo en fotografía urbana, retratos, bodas y cumpleaños de 15, siempre buscando plasmar la autenticidad y la belleza de cada instante.
                  </p>
                  <p>
                    Cada toma que realizo está pensada con arte y visión, buscando no solo un recuerdo, sino una obra que transmita emociones y valores. Mi enfoque es capturar la esencia de cada lugar y persona, logrando imágenes que hablen por sí solas. Con cada clic de la cámara, me esfuerzo por crear algo único, donde el arte y la realidad se fusionan para dar vida a recuerdos inolvidables.
                  </p>
                </Typography>
              </div>
            </Accordion>
            <Accordion
              key={'liliam'}
              title={'Liliam'}
              className={classNames(styles.accordion, {[styles.selected]: selectedStaffs.includes('liliam')})}
              onClick={() => handleStaffSelection('liliam')}
            >
              <div className={classNames(styles.staffItem, {[styles.selected]: selectedStaffs.includes('liliam')})}>
                <ImageWithFallback
                  className={styles.staffImage}
                  src={'/img/home/staff/liliam.jpg'}
                  alt={'liliam'}
                  width={200}
                  height={200}
                />
                <Typography className={styles.staffText} variant="normal">
                  <p>
                    ¡Hola! Soy Liliam Cárcamo, docente de profesión y una apasionada fotógrafa radicada en Neuquén. Mi amor por la fotografía me ha llevado a explorar y destacar en diversos estilos, desde la fotografía de retrato hasta la fotografía de eventos y la fotografía artística. Cada imagen que capturo es una oportunidad para contar una historia visual, transmitiendo la esencia y personalidad única de cada persona o momento.
                  </p>
                  <p>
                    A lo largo de mi carrera, he perfeccionado mi habilidad para capturar esos instantes especiales que hablan por sí mismos, buscando siempre que mis fotografías reflejen la autenticidad y emociones de mis sujetos. Ya sea un retrato íntimo, un evento memorable, o una obra artística, mi objetivo es que cada foto sea más que una imagen, sea una ventana a la historia y a la esencia de quienes están frente a la cámara.
                  </p>
                </Typography>
              </div>
            </Accordion>

        </div>
      </div>
    </div>
  );
}
