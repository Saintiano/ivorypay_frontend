import CreateTransaction from '../home/CreateTransaction';
import Transaction_Services from '../services/Transaction_Services';
class TransactionController {

    saveTranction(
        firstName: string, 
        lastName: string, 
        email: string, 
        itemName: string, 
        transactionDescription: string, 
        price: number, 
        ){

        let transaction = {

            firstName: firstName,
            lastName: lastName,
            email: email,
            itemName: itemName,
            transactionDescription: transactionDescription,
            price: price
        
        };

        let response = Transaction_Services.createTransaction(transaction, "No Bearer Token")
        .then((response) => {

            console.log(response);

        })
        .catch((error) =>{

            console.log('error ' + error.toJSON);
            console.log('error message ' + error.toString());

        });

    }

}

var transactionController = new TransactionController();

export default transactionController;