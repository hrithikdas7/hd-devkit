import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface Column {
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactElement;
}
interface Props {
    columns: Column[];
    data: any[];
    title?: string;
    searchable?: boolean;
}
declare const DynamicTable: ({ columns, data, title, searchable, }: Props) => react_jsx_runtime.JSX.Element;

export { type Column, DynamicTable };
