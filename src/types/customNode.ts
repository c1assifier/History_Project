import { CSSProperties } from "react";

type TableData = {
  headers: string[];
  rows: string[][];
};

export type CustomNodeData = {
  label: string;
  shortDescription?: string;
  customStyle?: CSSProperties;
  tooltipDirection?: 'top' | 'bottom' | 'left' | 'right';
  fullDescription?: string;
  images?: string[];
  table?: TableData;
};