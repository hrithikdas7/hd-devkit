import React from 'react';

interface TableSchema {
    title?: string;
    search?: boolean;
    sortable?: boolean;
    columns: {
        key: string;
        label: string;
        type?: "string" | "number" | "date" | "status";
        colors?: Record<string, string>;
    }[];
}
interface PaginationConfig {
    type: "pages" | "none";
    page: number;
    total: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}
interface DynamicTableProps {
    schema: TableSchema;
    data: any[];
    loading?: boolean;
    pagination?: PaginationConfig;
    onSearchChange?: (query: string) => void;
}
declare const DynamicTable: React.FC<DynamicTableProps>;

export { DynamicTable, type PaginationConfig, type TableSchema };
