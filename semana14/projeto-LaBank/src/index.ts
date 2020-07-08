import * as moment from 'moment'

type UserAccount = {
    name: string,
    CPF: string,
    dateOfBirth: string,
}

type accountTransactions = {
    name: string,
    cpf: string,
    dateOfBirth: moment,
    cashValue: number,
    date: moment
}