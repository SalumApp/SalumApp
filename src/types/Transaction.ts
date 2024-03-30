export interface Transaction {
    id: number;
    categoryId: number;
    datetime: number; // Unix epoch time
    amount: number;
    currency: string;
    accountId: number;
    title: string;
    description?: string;
    attachments?: string;
}

let transactionList: Transaction[] = [
    {
        id: 0,
        categoryId: 2,
        datetime: new Date('2024-03-28T12:00:00Z').getTime(),
        amount: 15.99,
        currency: "USD",
        accountId: 101,
        title: "Lunch at McDonald's",
        description: "Eating out on Tuesday",
    },
    {
        id: 1,
        categoryId: 4,
        datetime: new Date('2024-03-29T15:00:00Z').getTime(),
        amount: 1200.00,
        currency: "USD",
        accountId: 102,
        title: "United Airlines",
    },
];
export const getTransactionList = (): Transaction[] => {
    return transactionList;
};
