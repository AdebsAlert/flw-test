require('dotenv').config()
import express from 'express';
import joi from '@hapi/joi';
const app = express();

import { loanCalc } from './loanCalculator';

// open up an endpoint for the loan calculator function
app.get('/api/loan', async (req, res) => {
    try {

        // validate the query params sent in the request
        const schema = joi.object().keys({
            amount: joi
              .number()
              .integer()
              .required()
              .positive(),
            tenure: joi
              .number()
              .integer()
              .required()
              .positive(),
            rate: joi
              .number()
              .required()
              .integer()
              .positive(),
          });
          const validation = schema.validate(req.query);
          if (validation.error) {
        
            return res.status(400).json({
              success: false,
              error: validation.error.details[0].message,
            });
          }


        const { amount, tenure, rate } = req.query as any;

        // call the loanCalc function and pass in the required inputs
        const repayment = await loanCalc(amount, tenure, rate);

        // build the response and return json data to the client
        return res.status(200).json({
            amount,
            tenure,
            rate,
            repayment
          });
    } catch (error: unknown) {
        const err = error as Error;
        return res.status(400).json({ error: err.message });
    }
});

app.listen('7007', () => {
    console.log('Loan calculator has started on port 7007')
})

