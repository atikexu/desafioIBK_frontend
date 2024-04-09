export interface ResultResponseQueryDto {
  size: number;
  pages: number;
  queryList: QueryResult[];
}

export interface QueryResult {
  id: number;
  date: string;
  amount: number;
  amountExchangeRate: number;
  originCurrency: string;
  destinationCurrency: string;
  exchangeRate: number;

}
