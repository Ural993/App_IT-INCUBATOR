export interface EOSComponent {
    width?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    height?: number | string;
    bold?: boolean;
    tabIndex?: number;
    fontFamily?: string;
    fontSize?: string | number;
    italic?: boolean;
    underline?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    background?: string;
    color?: string;
    hidden?: boolean;
  }