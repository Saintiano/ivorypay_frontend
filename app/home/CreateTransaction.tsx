import * as React from 'react'
import { Transaction } from '../models/transaction.class'
import { Input, InputNumber, } from 'antd'

type CreateTransactionProps = {
    savePost?: (e: React.FormEvent, formData: Transaction) => void
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({ savePost }) => {

  const [formData, setFormData] = React.useState<Transaction>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.currentTarget?.id]: e.currentTarget?.value,
    } as Transaction));
  };

  const onChange = (value: number | string) => {
    console.log('changed', value);
  };

  return (
    <form className='Form' onSubmit={(e) => savePost!(e, formData as Transaction)}>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>First Name</label>
          <Input placeholder="First Name"
            onChange={handleForm}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='last_name'>Last Name </label>
          <Input placeholder="Last Name"
            onChange={handleForm}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='email'>Email </label>
          <Input placeholder="Email"
            onChange={handleForm}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='item_name'>Item Name </label>
          <Input placeholder="Item Name"
            onChange={handleForm}
          />
        </div>

        <div className='Form--field'>
          <label htmlFor='transaction_description'>Transaction Description </label>
          <Input placeholder="Transaction Description"
            onChange={handleForm}
          />
        </div>
        <div className='Form--field'>
          <label htmlFor='price'>Price </label>
          <InputNumber
            defaultValue={1000}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            onChange={(value) =>onChange(value!)}
          />
        </div>
        
      </div>
      <button
        className='Form__button'
        disabled={formData === undefined ? true : false}
      >
        Create Transaction
      </button>
    </form>
  )
}
export default CreateTransaction