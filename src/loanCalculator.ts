import axios from 'axios';
require('dotenv').config();

export const loanCalc = async function (amount: number, tenure: number, rate: number, environment: string = 'live') {

    const interest = (amount * (rate * 0.01)) / tenure;
    
    const totalRepayment = ((amount/tenure) + interest) + amount;

    // convert the total repayment from USD to local currency NGN using the getExchangeRate function
    const convertedRepayment = await getExchangeRate('USD', 'NGN', totalRepayment, environment)

    // return the converted amount
    return convertedRepayment;
}

export const getExchangeRate = async function(baseCurrency: string, targetCurrency: string, amount: number, environment: string) {
    // return a default value for a test environment to save actual hits
    if(environment == 'test') {
        return 445 * amount;
    }else{
        // if environment is set to love, make live call to the exchange rate API
        try {
            const exchangeRate = await axios.get(
                `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_RATE_KEY}/latest/${baseCurrency}`, { 
                        headers: { 'Accept-Encoding': 'gzip,deflate,compress' } 
                });
            return exchangeRate['data']['conversion_rates'][targetCurrency] * amount;
        } catch (error: unknown) {
           const err = error as Error;
           return err.message;
        } 
    }
    
}

