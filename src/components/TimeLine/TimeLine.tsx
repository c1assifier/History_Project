import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { useUnit } from 'effector-react';
import { $selectedYear, selectYear, clearYear } from '@/store/timeline';
import styles from './Timeline.module.css';
import { TimelineNodeData } from '@/types/timeLine';

const TimelineBase = ({ data }: NodeProps<TimelineNodeData>) => {
  const selected = useUnit($selectedYear);

  const handleResetSelection = () => {
    clearYear(); 
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>Временная линия</div>
      <div className={styles.track} onClick={handleResetSelection}>
        <div className={styles.years}>
          {data.years.map((yearObj) => (
            <div
              key={yearObj.year}
              className={`${styles.year} ${selected === yearObj.year ? styles.selected : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                selectYear(yearObj.year);
              }}
              style={{
                position: 'absolute',
                left: `${yearObj.left}px`,
                width: `${yearObj.width}px`,
              }}
            >
              {yearObj.year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Timeline = memo(TimelineBase);
