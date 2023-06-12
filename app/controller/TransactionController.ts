import CreateTransaction from '../home/CreateTransaction';
import transactionServices from '../services/Transaction_Services';
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

            if (response.status == 200) {
                return response;
            }

        })
        .catch((error) =>{

            console.log('error ' + error.toJSON);
            console.log('error message ' + error.toString());

        });

        console.log(response);

    }

    transactionHistory(){

        let response = transactionServices.getAllTransactions("No Bearer Token required").then((response) =>{

            console.log(response.data);
            console.log(response.status);

            if (response.status == 200) {
                return response.data;
            }

        }).catch((error) =>{

            console.log('error ' + error.toJSON);
            console.log('error message ' + error.toString());

        });

        return response;

    }

}

var transactionController = new TransactionController();

export default transactionController;