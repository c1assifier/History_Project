// src/data/edges.ts
import { Edge, MarkerType } from 'reactflow';

export const edges: Edge[] = [
  {
    id: 'КС-50 Лилипут-ЭД-140',
    source: 'КС-50 Лилипут',
    target: 'ЭД-140',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'ЭД-140 РД-105 (8Д56)',
    source: 'ЭД-140',
    target: 'РД-105 (8Д56)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-105 (8Д56) РД-107 (8Д74)',
    source: 'РД-105 (8Д56)',
    target: 'РД-107 (8Д74)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-107 (8Д74) РД-108 (8Д75)',
    source: 'РД-107 (8Д74)',
    target: 'РД-108 (8Д75)',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-108 (8Д75) РД-108ММ (8Д75К, 8Д727)',
    source: 'РД-108 (8Д75)',
    target: 'РД-108ММ (8Д75К, 8Д727)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-107 (8Д74) РД-107ММ (8Д74К, 8Д728)',
    source: 'РД-107 (8Д74)',
    target: 'РД-107ММ (8Д74К, 8Д728)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-108 (8Д75) РД-0105 (8Д714, РО-5)',
    source: 'РД-108 (8Д75)',
    target: 'РД-0105 (8Д714, РО-5)',
    sourceHandle: 'top',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-108 (8Д75) РД-0109 (8Д719, РО-7)',
    source: 'РД-108 (8Д75)',
    target: 'РД-0109 (8Д719, РО-7)',
    sourceHandle: 'top',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-0105 (8Д714, РО-5) РД-0109 (8Д719, РО-7)',
    source: 'РД-0105 (8Д714, РО-5)',
    target: 'РД-0109 (8Д719, РО-7)',
    targetHandle: 'right',
    sourceHandle: 'right',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-0105 (8Д714, РО-5) С1.5400 (11Д33)',
    source: 'РД-0105 (8Д714, РО-5)',
    target: 'С1.5400 (11Д33)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  {
    id: 'РД-107ММ (8Д74К, 8Д728) РД-0107 (8Д715К)',
    source: 'РД-107ММ (8Д74К, 8Д728)',
    target: 'РД-0107 (8Д715К)',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-107 (8Д74) РД-111 (8Д716)',
    source: 'РД-107 (8Д74)',
    target: 'РД-111 (8Д716)',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-0106 (8Д715) РД-0107 (8Д715К)',
    source: 'РД-0106 (8Д715)',
    target: 'РД-0107 (8Д715К)',
    targetHandle: 'bottom',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-108 (8Д75) РД-0108 (8Д715П, 11Д55)',
    source: 'РД-108 (8Д75)',
    target: 'РД-0108 (8Д715П, 11Д55)',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-108 (8Д75) РД-0110 (8Д715П, 11Д55)',
    source: 'РД-108 (8Д75)',
    target: 'РД-0110 (8Д715П, 11Д55)',
    sourceHandle: 'top',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-0107 (8Д715К) РД-0108 (8Д715П, 11Д55)',
    source: 'РД-0107 (8Д715К)',
    target: 'РД-0108 (8Д715П, 11Д55)',
    sourceHandle: 'top',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-107ММ (8Д74К, 8Д728) РД-0110 (8Д715П, 11Д55)',
    source: 'РД-107ММ (8Д74К, 8Д728)',
    target: 'РД-0110 (8Д715П, 11Д55)',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-0108 (8Д715П, 11Д55) РД-0110 (8Д715П, 11Д55)',
    source: 'РД-0108 (8Д715П, 11Д55)',
    target: 'РД-0110 (8Д715П, 11Д55)',
    sourceHandle: 'right',
    targetHandle: 'top',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'С1.5400 (11Д33)-8Д726',
    source: 'С1.5400 (11Д33)',
    target: '8Д726',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },  

  {
    id: 'РД-111 (8Д716)-НК-9 (8Д717)',
    source: 'РД-111 (8Д716)',
    target: 'НК-9 (8Д717)',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  {
    id: '8Д517-НК-9 (8Д717)',
    source: '8Д517',
    target: 'НК-9 (8Д717)',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  {
    id: '8Д517-НК-9В (8Д718)',
    source: '8Д517',
    target: 'НК-9В (8Д718)',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'НК-21-НК-31',
    source: 'НК-21 (11Д59)',
    target: 'НК-31 (11Д114)',
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.Arrow, color: '#ffff' },
    style: { stroke: '#ffff', strokeWidth: 2 },
  },
  
  {
    id: 'НК-19-НК-39',
    source: 'НК-19 (11Д53)',
    target: 'НК-39 (11Д113)',
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.Arrow, color: '#ffff' },
    style: { stroke: '#ffff', strokeWidth: 2 },
  },
  
  {
    id: 'НК-15Б-НК-43',
    source: 'НК-15Б (11Д52)',
    target: 'НК-43 (11Д112)',
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.Arrow, color: '#ffff' },
    style: { stroke: '#ffff', strokeWidth: 2 },
  },
  
  {
    id: '8Д517-НК-15',
    source: '8Д517',
    target: 'НК-15 (11Д51)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.Arrow, color: '#ffff' },
    style: { stroke: '#ffff', strokeWidth: 2 },
  },
  
  {
    id: 'НК-9В-НК-19',
    source: 'НК-9В (8Д718)',
    target: 'НК-19 (11Д53)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.Arrow, color: '#ffff' },
    style: { stroke: '#ffff', strokeWidth: 2 },
  },
  
  {
    id: 'НК-15 (11Д51) НК-33 (11Д111)',
    source: 'НК-15 (11Д51)',
    target: 'НК-33 (11Д111)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: '8Д726-РД-58 (11Д58)',
    source: '8Д726',
    target: 'РД-58 (11Д58)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-58 (11Д58)-РД-58М (11Д58М)',
    source: 'РД-58 (11Д58)',
    target: 'РД-58М (11Д58М)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'ОДУ ОК Буран  РД-58С (11Д58С)',
    source: 'ОДУ ОК Буран',
    target: 'РД-58С (11Д58С)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-58М (11Д58М)-ОДУ ОК Буран',
    source: 'РД-58М (11Д58М)',
    target: 'ОДУ ОК Буран',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-58М (11Д58М)-РД-583 (11Д583)',
    source: 'РД-58М (11Д58М)',
    target: 'РД-583 (11Д583)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'НК-43 (11Д112)-Д-57',
    source: 'НК-43 (11Д112)',
    target: 'Д-57',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'Д-57-РД-0120 (11Д122; РО-200)',
    source: 'Д-57',
    target: 'РД-0120 (11Д122; РО-200)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-0410 (11Б91)-РД-0120 (11Д122; РО-200)',
    source: 'РД-0410 (11Б91)',
    target: 'РД-0120 (11Д122; РО-200)',
    sourceHandle: 'top',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-118 (11Д511)-РД-118ПФ (11Д511ПФ)',
    source: 'РД-118 (11Д511)',
    target: 'РД-118ПФ (11Д511ПФ)',
    sourceHandle: 'top',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-108ММ (8Д75К, 8Д727)-РД-118 (11Д511)',
    source: 'РД-108ММ (8Д75К, 8Д727)',
    target: 'РД-118 (11Д511)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  
  {
    id: 'РД-107ММ (8Д74К, 8Д728)-РД-117 (11Д512)',
    source: 'РД-107ММ (8Д74К, 8Д728)',
    target: 'РД-117 (11Д512)',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },
  

//* Фиолетовые узлы ================================= //

{
  id: 'РД-211 (8Д57) РД-107 (8Д74)',
  source: 'РД-211 (8Д57)',
  target: 'РД-107 (8Д74)',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

//* Из фиолетовго в красный ==================== //

{
  id: 'РД-211 (8Д57) РД-212 (8Д41)',
  source: 'РД-211 (8Д57)',
  target: 'РД-212 (8Д41)',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0124 (14Д23)-РД-0124А',
  source: 'РД-0124 (14Д23)',
  target: 'РД-0124А',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0110 (8Д715П, 11Д55)-РД-0124 (14Д23)',
  source: 'РД-0110 (8Д715П, 11Д55)',
  target: 'РД-0124 (14Д23)',
  sourceHandle: 'top',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-118 (11Д511)-РД-108А (14Д21)',
  source: 'РД-118 (11Д511)',
  target: 'РД-108А (14Д21)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-117 (11Д512)-РД-107А (14Д22)',
  source: 'РД-117 (11Д512)',
  target: 'РД-107А (14Д22)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-58М (11Д58М)-РД-58МФ (11Д58МФ)',
  source: 'РД-58М (11Д58М)',
  target: 'РД-58МФ (11Д58МФ)',
  sourceHandle: 'top',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-108А (14Д21)-РД-0124 (14Д23)',
  source: 'РД-108А (14Д21)',
  target: 'РД-0124 (14Д23)',
  sourceHandle: 'top',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0146-РД-191',
  source: 'РД-0146',
  target: 'РД-191',
  sourceHandle: 'bottom',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-191-РД-181',
  source: 'РД-191',
  target: 'РД-181',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-191-РД-193',
  source: 'РД-191',
  target: 'РД-193',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0124А-РД-0146',
  source: 'РД-0124А',
  target: 'РД-0146',
  sourceHandle: 'bottom',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0120 (11Д122; РО-200)-РД-0146',
  source: 'РД-0120 (11Д122; РО-200)',
  target: 'РД-0146',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'НК-31 (11Д114)-AJ26-62',
  source: 'НК-31 (11Д114)',
  target: 'AJ26-62',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0120 (11Д122; РО-200)-РД-0750',
  source: 'РД-0120 (11Д122; РО-200)',
  target: 'РД-0750',
  sourceHandle: 'right',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-273 (15Д286)-РД-274 (15Д285)',
  source: 'РД-273 (15Д286)',
  target: 'РД-274 (15Д285)',
  sourceHandle: 'top',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'С5.92-С5.98М (14Д30)',
  source: 'С5.92',
  target: 'С5.98М (14Д30)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-120 (11Д123)-РД-170 (11Д521)',
  source: 'РД-120 (11Д123)',
  target: 'РД-170 (11Д521)',
  sourceHandle: 'top',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-170 (11Д521)-РД-173',
  source: 'РД-170 (11Д521)',
  target: 'РД-173',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-170 (11Д521)-РД-171М (11Д520М)',
  source: 'РД-170 (11Д521)',
  target: 'РД-171М (11Д520М)',
  sourceHandle: 'bottom',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-173-РД-171М (11Д520М)',
  source: 'РД-173',
  target: 'РД-171М (11Д520М)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-173-РД-180',
  source: 'РД-173',
  target: 'РД-180',
  sourceHandle: 'top',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-180-РД-171М (11Д520М)',
  source: 'РД-180',
  target: 'РД-171М (11Д520М)',
  sourceHandle: 'right',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

// {
//   id: 'РД-273 (15Д286)-РД-274 (15Д285)',
//   source: 'РД-273 (15Д286)',
//   target: 'РД-274 (15Д285)',
//   sourceHandle: 'top',
//   targetHandle: 'bottom',
//   type: 'smoothstep',
//   animated: true,
//   markerEnd: {
//     type: MarkerType.Arrow,
//     color: '#ffff',
//   },
//   style: {
//     stroke: '#ffff',
//     strokeWidth: 2,
//   },
// },

{
  id: 'РД-0120 (11Д122; РО-200)-РД-170 (11Д521)',
  source: 'РД-0120 (11Д122; РО-200)',
  target: 'РД-170 (11Д521)',
  sourceHandle: 'bottom',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-191 РД-701',
  source: 'РД-191',
  target: 'РД-701',
  sourceHandle: 'bottom',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-250 (8Д518) РД-251 (8Д723)',
  source: 'РД-250 (8Д518)',
  target: 'РД-251 (8Д723)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-250 (8Д518) РД-252 (8Д724)',
  source: 'РД-250 (8Д518)',
  target: 'РД-252 (8Д724)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-252 (8Д724) РД-262 (11Д26)',
  source: 'РД-252 (8Д724)',
  target: 'РД-262 (11Д26)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-251 (8Д723) РД-261 (11Д69)',
  source: 'РД-251 (8Д723)',
  target: 'РД-261 (11Д69)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-215М (8Д513М) РД-216М (11Д614)',
  source: 'РД-215М (8Д513М)',
  target: 'РД-216М (11Д614)',
  sourceHandle: 'bottom',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-263 (15Д117) РД-264 (15Д119)',
  source: 'РД-263 (15Д117)',
  target: 'РД-264 (15Д119)',
  sourceHandle: 'top',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0228 РД-0255',
  source: 'РД-0228',
  target: 'РД-0255',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-268 (15Д168) РД-263 (15Д117)',
  source: 'РД-268 (15Д168)',
  target: 'РД-263 (15Д117)',
  sourceHandle: 'top',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-263 (15Д117) РД-273 (15Д286)',
  source: 'РД-263 (15Д117)',
  target: 'РД-273 (15Д286)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-215 (8Д513) РД-216 (8Д514)',
  source: 'РД-215 (8Д513)',
  target: 'РД-216 (8Д514)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-215 (8Д513) РД-217 (8Д515)',
  source: 'РД-215 (8Д513)',
  target: 'РД-217 (8Д515)',
  sourceHandle: 'bottom',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-217 (8Д515) РД-218 (8Д712)',
  source: 'РД-217 (8Д515)',
  target: 'РД-218 (8Д712)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-217 (8Д515) РД-219 (8Д713)',
  source: 'РД-217 (8Д515)',
  target: 'РД-219 (8Д713)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-216 (8Д514) РД-250 (8Д518)',
  source: 'РД-216 (8Д514)',
  target: 'РД-250 (8Д518)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-218 (8Д712) РД-250 (8Д518)',
  source: 'РД-218 (8Д712)',
  target: 'РД-250 (8Д518)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-215 (8Д513) РД-215М (8Д513М)',
  source: 'РД-215 (8Д513)',
  target: 'РД-215М (8Д513М)',
  sourceHandle: 'top',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-213 (8Д13) РД-214 (8Д59)',
  source: 'РД-213 (8Д13)',
  target: 'РД-214 (8Д59)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-214 (8Д59) РД-215 (8Д513)',
  source: 'РД-214 (8Д59)',
  target: 'РД-215 (8Д513)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-253 (11Д43) РД-0208 (8Д411) + РД-0209 (8Д412)',
  source: 'РД-253 (11Д43)',
  target: 'РД-0208 (8Д411) + РД-0209 (8Д412)',
  sourceHandle: 'bottom',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-0208 (8Д411) + РД-0209 (8Д412) РД-0212 (8Д49)',
  source: 'РД-0208 (8Д411) + РД-0209 (8Д412)',
  target: 'РД-0212 (8Д49)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-253 (11Д43) РД-268 (15Д168)',
  source: 'РД-253 (11Д43)',
  target: 'РД-268 (15Д168)',
  sourceHandle: 'right',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0208 (8Д411) + РД-0209 (8Д412) РД-0210 (8Д411К) + РД-0211 (8Д412К)',
  source: 'РД-0208 (8Д411) + РД-0209 (8Д412)',
  target: 'РД-0210 (8Д411К) + РД-0211 (8Д412К)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-253 (11Д43) РД-275 (14Д14)',
  source: 'РД-253 (11Д43)',
  target: 'РД-275 (14Д14)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-275 (14Д14) РД-275М (14Д14М; РД-276)',
  source: 'РД-275 (14Д14)',
  target: 'РД-275М (14Д14М; РД-276)',
  sourceHandle: 'right',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0205 (РД-207) РД-0208 (8Д411) + РД-0209 (8Д412)',
  source: 'РД-0205 (РД-207)',
  target: 'РД-0208 (8Д411) + РД-0209 (8Д412)',
  sourceHandle: 'top',
  targetHandle: 'bottom',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: 'РД-0233 (15Д95) + РД-0234 (15Д96) РД-0237',
  source: 'РД-0233 (15Д95) + РД-0234 (15Д96)',
  target: 'РД-0237',
  sourceHandle: 'left',
  targetHandle: 'left',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

{
  id: '8Д419 (15Д13 + 15Д14; 8Д423) РД-0235 (15Д113) + РД-0236 (15Д114)',
  source: '8Д419 (15Д13 + 15Д14; 8Д423)',
  target: 'РД-0235 (15Д113) + РД-0236 (15Д114)',
  sourceHandle: 'top',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},
{
  id: 'РД-0216 + РД-0217 (15Д2) РД-0235 (15Д113) + РД-0236 (15Д114)',
  source: 'РД-0216 + РД-0217 (15Д2)',
  target: 'РД-0235 (15Д113) + РД-0236 (15Д114)',
  sourceHandle: 'top',
  targetHandle: 'top',
  type: 'smoothstep',
  animated: true,
  markerEnd: {
    type: MarkerType.Arrow,
    color: '#ffff',
  },
  style: {
    stroke: '#ffff',
    strokeWidth: 2,
  },
},

//* Зеленые узлы ===================================== //

  {
    id: 'РД-100 (8Д51) РД-101 (8Д52)',
    source: 'РД-100 (8Д51)',
    target: 'РД-101 (8Д52)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-101 (8Д52) РД-103 (8Д54)',
    source: 'РД-101 (8Д52)',
    target: 'РД-103 (8Д54)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  },

  {
    id: 'РД-103 (8Д54) РД-103М (8Д71)',
    source: 'РД-103 (8Д54)',
    target: 'РД-103М (8Д71)',
    type: 'smoothstep',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
      color: '#ffff',
    },
    style: {
      stroke: '#ffff',
      strokeWidth: 2,
    },
  }
];
