type aReceipt = {
  id: string;
  amount: number;
  date: string;
  isTest: boolean;
  token: string;
};
export class Receipt {
  id: string;

  amount: number;

  date: string;

  isTest: boolean;

  token: string;

  constructor(receipt: aReceipt) {
    this.id = receipt.id;
    this.amount = receipt.amount;
    this.date = receipt.date;
    this.isTest = receipt.isTest;
    this.token = receipt.token;
  }
}
