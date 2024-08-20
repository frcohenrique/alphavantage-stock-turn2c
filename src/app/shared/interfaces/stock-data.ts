export interface StockData {
  indexes: Index[];
  stocks: Stock[];
  availableSectors: string[];
  availableStockTypes: string[];
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalCount: number;
  hasNextPage: boolean;
}

export interface Index {
  stock: string;
  name: string;
}

export interface Stock {
  stock: string;
  name: string;
  close: number;
  change: number;
  volume: number;
  market_cap: number | null;
  logo: string;
  sector: string | null;
  type: string;
}
