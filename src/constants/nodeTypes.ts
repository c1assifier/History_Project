import { Timeline } from '@/components/TimeLine';
import { CustomNode } from '@/components/CustomNode';
import { GroupNode } from '@/components/GroupNode';
import { NodeTypes } from 'reactflow';

export const nodeTypes: NodeTypes = {
  timeline: Timeline,
  custom: CustomNode,
  group: GroupNode,
};
