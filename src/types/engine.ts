type TableData = {
    headers: string[];
    rows: string[][];
  };

type SectionList = {
    title: string;
    items: string[];
  };
  
export type CustomNodeData = {
    label: string;
    shortDescription?: string;
    fullDescription?: string;
    afterFullDescription?: string;
    bulletPointsOne?: SectionList;
    bulletPointsTwo?: SectionList;
    images?: string[];
    table?: TableData;
    pages?: string;
    customCardWidth?: number;
    imageStyle?: React.CSSProperties;
    scrollableDescription?: boolean;
  };
  