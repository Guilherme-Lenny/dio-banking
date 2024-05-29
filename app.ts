import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(10, 'Guilherme', 1)
console.log(peopleAccount)
peopleAccount.deposit()

/*
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()
*/

/*
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.deposit())
*/

