import * as React from 'react'
import { Transaction } from '../models/transaction.class'
import { Input, InputNumber, } from 'antd'
import transactionController from '../controller/TransactionController';
import transactionServices from '../services/Transaction_Services';

interface TransactionHistoryProps {
    pageContent: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({pageContent}) => {

  const [transactionsData, setTransactionsData] = React.useState<Transaction[] | null>(null);

  React.useEffect(() => {

    transactionController.transactionHistory().then((response) => {
        console.log("test " + response.data[0]["transaction_id"]);
        setTransactionsData(response.data);
    });
    

  }, [pageContent]);

  return (
    <div>
        {transactionsData != null ? transactionsData.map((transaction, key) => (
            <div className=''  key={key}>
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{transaction.firstName} {transaction.lastName}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{transaction.email}</p>
                        </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{transaction.itemName}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">$ {transaction.price}<time dateTime="2023-01-23T13:23Z"></time></p>
                        </div>
                    </li>
                </ul>
            </div>
        )) : null}
    </div>
  )
}
export default TransactionHistory;