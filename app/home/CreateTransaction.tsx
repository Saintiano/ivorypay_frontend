import * as React from 'react'
import { Transaction } from '../models/transaction.class'
import { Input, InputNumber, } from 'antd'
import transactionController from '../controller/TransactionController';

const CreateTransaction: React.FC = () => {

  const [price, setPrice] = React.useState<number | string>(0);
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [itemName, setItemName] = React.useState<string>();
  const [transactionDescription, setTransactionDescription] = React.useState<string>();

  const onChange = (value: number | string) => {
    console.log('changed', value);
    setPrice(value);
  };

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleTransactDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionDescription(event.target.value);
  };

  const handleItemName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // console.log(event);
    console.log("submit fired");
    let response = transactionController.saveTranction(
      firstName!, 
      lastName!, 
      email!, 
      itemName!,
      transactionDescription!, 
      Number(price!)
    );

    console.log(response);
  }

  return (
    <form className='Form'>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>First Name</label>
          <Input placeholder="First Name"
            onChange={handleFirstName}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='last_name'>Last Name </label>
          <Input placeholder="Last Name"
            onChange={handleLastName}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='email'>Email </label>
          <Input placeholder="Email"
            onChange={handleEmail}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='item_name'>Item Name </label>
          <Input placeholder="Item Name"
            onChange={handleItemName}
          />
        </div>

        <div className='Form--field'>
          <label htmlFor='transaction_description'>Transaction Description </label>
          <Input placeholder="Transaction Description"
            onChange={handleTransactDescription}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='price'>Price </label>
          <InputNumber
            defaultValue={price}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            onChange={(value) =>onChange(value!)}
          />
        </div>
        
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={handleSubmit}
      >
        Create Transaction
      </button>

    </form>
  )
}
export default CreateTransaction;