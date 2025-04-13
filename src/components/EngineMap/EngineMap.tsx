import { useEffect, useCallback } from 'react';
import { useUnit } from 'effector-react';
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useReactFlow,
  NodeMouseHandler,
} from 'reactflow';
import { useNavigate } from 'react-router-dom';

import { $highlightedNodes, $edges, setViewport } from '@/store/flow';

import 'reactflow/dist/style.css';
import styles from './EngineMap.module.css';

import { nodeTypes } from '@/constants/nodeTypes';

const EngineMapContent = () => {
  const navigate = useNavigate();
  const instance = useReactFlow();
  const [highlightedNodes, edges] = useUnit([$highlightedNodes, $edges]);

  useEffect(() => {
    const saved = sessionStorage.getItem('viewport');
    if (saved) {
      const { x, y, zoom } = JSON.parse(saved);
      instance.setViewport({ x, y, zoom }, { duration: 500 });
      setViewport({ x, y, zoom });
    }
  }, [instance]);

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      if (node.type !== 'custom') return;

      const viewport = instance.getViewport();
      sessionStorage.setItem('viewport', JSON.stringify(viewport));
      setViewport(viewport);
      navigate(`/engine/${node.id}`);
    },
    [navigate, instance]
  );

  return (
    <ReactFlow
      nodes={highlightedNodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodeClick={onNodeClick}
      minZoom={0.2}
      panOnScroll
      zoomOnScroll
      proOptions={{ hideAttribution: true }}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

const EngineMap = () => {
  return (
    <div className={styles.engineMap}>
      <ReactFlowProvider>
        <EngineMapContent />
      </ReactFlowProvider>
    </div>
  );
};

export { EngineMap };
