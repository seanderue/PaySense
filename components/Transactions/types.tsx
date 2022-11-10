export interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  date: string;
  percentMissing: number;
}

export interface TransactionSectionProps {
  data: Array<TransactionProps>;
}

export interface TransactionAviProps {
  icon: any;
  background: string;
}
