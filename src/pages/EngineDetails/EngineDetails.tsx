import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { nodes } from '@/data/nodes';
import styles from './EngineDetails.module.css';
import { MdArrowBackIos } from 'react-icons/md';
import { TiArrowRepeat } from 'react-icons/ti';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from 'react-icons/bs';
import { CustomNodeData } from '@/types/engine';
import { useTheme } from '@/context/useTheme';

const EngineDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const node = nodes.find((n) => n.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();

  if (!node) {
    return <div className={styles.wrapper}>Двигатель не найден</div>;
  }

  const {
    label,
    fullDescription = '',
    afterFullDescription,
    bulletPointsOne,
    bulletPointsTwo,
    images = [],
    table,
    pages,
    customCardWidth,
    scrollableDescription,
  } = node.data as CustomNodeData;

  const lastColumnIndex = table?.headers.length ? table.headers.length - 1 : -1;
  const hasLongValueInLastColumn =
    lastColumnIndex >= 0 &&
    table?.rows.some((row) => row[lastColumnIndex]?.length > 50);

  const bulletOneLength = bulletPointsOne?.items.reduce((sum, s) => sum + s.length, 0) || 0;
  const bulletTwoLength = bulletPointsTwo?.items.reduce((sum, s) => sum + s.length, 0) || 0;

  const ultraWide = fullDescription.length > 900;
  const isWide =
    !ultraWide &&
    (fullDescription.length > 400 ||
      bulletOneLength > 300 ||
      bulletTwoLength > 300 ||
      hasLongValueInLastColumn);

  const cardClassName = customCardWidth
    ? styles.card
    : `${styles.card} ${
        ultraWide ? styles.ultraWideCard : isWide ? styles.wideCard : styles.compactCard
      }`;

  const descriptionClassName = `${styles.description} ${
    scrollableDescription ? styles.scrollableDescription : ''
  }`;

  const cycleImage = () => {
    if (!images.length) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? 'light-theme' : ''}`}>
      <div
        className={cardClassName}
        style={customCardWidth ? { maxWidth: `${customCardWidth}px` } : undefined}
      >
        {images.length > 1 && (
          <button className={styles.cycleButton} onClick={cycleImage}>
            <TiArrowRepeat />
          </button>
        )}

        <button className={styles.themeButton} onClick={toggleTheme}>
          {theme === 'dark' ? <BsFillLightbulbFill /> : <BsFillLightbulbOffFill />}
        </button>

        <h1 className={styles.title}>{label}</h1>

        <div className={styles.topSection}>
          {images.length > 0 && (
            <div className={styles.imageBlock}>
              <img
                src={images[currentImageIndex]}
                alt={`${label} — изображение`}
                className={styles.image}
                style={node.data?.imageStyle}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.caption}>{label}</div>
            </div>
          )}

          {(fullDescription ||
            afterFullDescription ||
            bulletPointsOne?.items.length ||
            bulletPointsTwo?.items.length) && (
            <div className={descriptionClassName}>
              {fullDescription &&
                fullDescription.split('\n\n').map((para, idx) => (
                  <p key={`desc-${idx}`}>{para}</p>
                ))}

              {bulletPointsOne && bulletPointsOne.items.length > 0 && (
                <>
                  <h3>{bulletPointsOne.title}</h3>
                  <ul>
                    {bulletPointsOne.items.map((item, idx) => (
                      <li key={`b1-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {bulletPointsTwo && bulletPointsTwo.items.length > 0 && (
                <>
                  <h3>{bulletPointsTwo.title}</h3>
                  <ul>
                    {bulletPointsTwo.items.map((item, idx) => (
                      <li key={`b2-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {afterFullDescription && <p>{afterFullDescription}</p>}
            </div>
          )}
        </div>

        {table && (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {table.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {pages && (
          <div className={styles.descriptionPages}>
            <p>{pages}</p>
          </div>
        )}

        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <MdArrowBackIos /> Назад
        </button>
      </div>
    </div>
  );
};

export default EngineDetails;
