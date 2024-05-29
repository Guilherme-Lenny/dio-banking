import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Você fez um empréstimo')
    }

/*
    deposit = (): void => {
        console.log('A empresa depositou')
    }
*/

    deposit = (): number => {
        return 2
    }

}