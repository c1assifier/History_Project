import { Handle, NodeProps, Position } from 'reactflow';
import { useState, memo } from 'react';
import styles from './CustomNode.module.css';
import { CustomNodeData } from '@/types/customNode'

const CustomNodeBase = ({
  data,
  sourcePosition = Position.Right,
  targetPosition = Position.Left,
}: NodeProps<CustomNodeData>) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={styles.node}
      style={data.customStyle}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Входной Handle */}
      <Handle type="target" position={targetPosition} />

      {/* Старый исходящий Handle (для обратной совместимости) */}
      <Handle type="source" position={sourcePosition} />

      {/* Новые исходящие Handle — для точного управления */}
      <Handle type="source" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Right} id="right" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="source" position={Position.Left} id="left" />

      {/* Дополнительные входы с id */}
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="target" position={Position.Right} id="right" />
      <Handle type="target" position={Position.Bottom} id="bottom" />
      <Handle type="target" position={Position.Left} id="left" />

      {/* Название узла */}
      <div className={styles.label}>{data.label}</div>

      {/* Подсказка */}
      {showTooltip && data.shortDescription && (
        <div
          className={`${styles.tooltip} ${
            data.tooltipDirection === 'top'
              ? styles.tooltipTop
              : data.tooltipDirection === 'left'
              ? styles.tooltipLeft
              : data.tooltipDirection === 'right'
              ? styles.tooltipRight
              : styles.tooltipBottom
          }`}
        >
          {data.shortDescription}
        </div>
      )}
    </div>
  );
};

export const CustomNode = memo(CustomNodeBase);
