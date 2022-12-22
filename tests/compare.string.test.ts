import { compareString } from '../src/compareString'
import "mocha"
import { expect } from 'chai'

describe ('testing string comparison function', () => {
    describe('test that 2 strings have exactly same character', () => {
        it('should return true for exactly same character strings', async () => {
           const stringA = 'hello madam'
           const stringB =  'madam hello'
           const comparisonResult = compareString(stringA, stringB)

            expect(comparisonResult).to.be.true;
        })

        it('should return false for not exactly same character strings', async () => {
            const stringA = 'hello madam'
            const stringB =  'madamhello'
            const comparisonResult = compareString(stringA, stringB)
 
             expect(comparisonResult).to.be.false;
         })

         it('should return true for exactly same character strings', async () => {
            const stringA = 'hellomadam'
            const stringB =  'madamhello'
            const comparisonResult = compareString(stringA, stringB)
 
             expect(comparisonResult).to.be.true;
         })
    })
})