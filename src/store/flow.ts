import { createStore, createEvent, combine } from 'effector';
import { Node, Edge, Viewport } from 'reactflow';

import { nodes as initialNodes } from '@/data/nodes';
import { edges as initialEdges } from '@/data/edges';
import { $selectedYear } from '@/store/timeline';

// 🔹 Events
export const setNodes = createEvent<Node[]>();
export const setEdges = createEvent<Edge[]>();
export const setViewport = createEvent<Viewport>();

// 🔹 Stores
export const $nodes = createStore<Node[]>(initialNodes).on(setNodes, (_, payload) => payload);

export const $edges = createStore<Edge[]>(initialEdges).on(setEdges, (_, payload) => payload);

export const $viewport = createStore<Viewport>({ x: 0, y: 0, zoom: 1 }).on(setViewport, (_, v) => v);

// 🔹 Highlighted nodes by year
export const $highlightedNodes = combine([$nodes, $selectedYear], ([nodes, selectedYear]) => {
  return nodes.map((node) => {
    const nodeYear = node.data?.year;
    const isHighlighted = selectedYear !== null && nodeYear === selectedYear;

    return {
      ...node,
      style: {
        ...node.style,
        border: isHighlighted ? '3px solid #2c82f6' : undefined,
        borderRadius: isHighlighted ? '12px' : undefined,
        boxShadow: isHighlighted ? '0 0 10px #2c82f6' : undefined,
        zIndex: isHighlighted ? 10 : undefined,
      },
    };
  });
});
