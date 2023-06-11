import { Transaction } from "../models/transaction.class"


type CreateTransactionProps = {
    savePost: (e: React.FormEvent, formData: Transaction) => void
}