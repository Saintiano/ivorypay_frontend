import * as React from 'react'
import { Transaction } from '../models/transaction.class'

type CreateTransactionProps = {
    savePost: (e: React.FormEvent, formData: Transaction) => void
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({ savePost }) => {
  const [formData, setFormData] = React.useState<Transaction>()
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.currentTarget?.id]: e.currentTarget?.value,
    } as Transaction));
  };
  return (
    <form className='Form' onSubmit={(e) => savePost(e, formData as Transaction)}>
      <div>
        <div className='Form--field'>
          <label htmlFor='name'>Title</label>
          <input onChange={handleForm} type='text' id='title' />
        </div>
        <div className='Form--field'>
          <label htmlFor='body'>Description</label>
          <input onChange={handleForm} type='text' id='body' />
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