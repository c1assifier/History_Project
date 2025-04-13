import { memo } from 'react';
import { NodeProps } from 'reactflow';
import styles from './GroupNode.module.css';
import { GroupNodeData } from '@/types/groupNode';

const GroupNodeBase = ({ data }: NodeProps<GroupNodeData>) => {
  return (
    <div>
      {data.title && <div className={styles.title}>{data.title}</div>}
    </div>
  );
};

export const GroupNode = memo(GroupNodeBase);
