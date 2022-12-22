import { loanCalc, getExchangeRate } from '../src/loanCalculator'
import "mocha"
import { expect } from 'chai'

describe ('testing the loan calculator module', () => {
    describe('test that the getRate function', () => {
        it('should return the current value for NGN against USD', async () => {
           const rateResult = await getExchangeRate('USD', 'NGN', 1, 'test')
            expect(rateResult).to.be.a('number')
        })
    })

    describe('test the loan calculator with 100 USD loan for 10 months', () => {
        it('should return the one time repayment value in NGN', async () => {
           const loanCalcResult = await loanCalc(100, 10, 2, 'test')
           expect(loanCalcResult).to.be.a('number')
        })
    })
})