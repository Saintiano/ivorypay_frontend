import axios from "axios";
import http from "../http-common";
import { Transaction } from "../models/transaction.class";

class Transaction_Service {

    config = {
        headers:{
          'content-type': 'application/json',
          // header2: value2
        }
    };

    getAllTransactions(bearerToken: string){
        http.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
        return http.get(`transaction/`, this.config);
    }

    getOneTransaction(bearerToken: string, transaction_id: number){
        
        http.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
        return http.get(`transaction/${transaction_id}`, this.config);
    }

    createTransaction(transaction: Transaction, bearer: string,) {
        
        http.defaults.headers.common['Authorization'] = `Bearer ${bearer}`;
        return http.post(`transaction/createTransaction`, transaction, this.config)

    }

}

var transactionServices = new Transaction_Service();

export default transactionServices;