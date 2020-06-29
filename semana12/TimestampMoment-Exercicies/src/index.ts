import * as moment from "moment"
    moment.locale('pt-br')

    type events = { name: string, description: string, initialAt: moment.Moment, finishAt: moment.Moment}
//exercicio 01
const eventsCalendar: events [] = [
    {
        name: 'Viagem a Praia', 
        description: 'Conhecer as praias de Guarujá', 
        initialAt: moment("15/06/2020 08:00","DD/MM/YYYY", "HH:mm"), 
        finishAt: moment("20/06/2020 08:00","DD/MM/YYYY", "HH:mm")
    },
    {
        name: 'Estudar Typescript', 
        description: 'Assistir aulas da Labenu e praticar', 
        initialAt: moment("02/11/2020 10:30" , "DD/MM/YYYY", "HH:mm" ), 
        finishAt: moment("02/11/2020 12:00","DD/MM/YYYY", "HH:mm") 
    },
    {
        name: 'Estudar Typescript', 
        description: 'Assistir aulas da Labenu e praticar', 
        initialAt: moment("02/12/2020 10:30" , "DD/MM/YYYY", "HH:mm" ), 
        finishAt: moment("02/02/2021 12:00","DD/MM/YYYY", "HH:mm") 
    },
]    
// exercicio 02
/* const printAllEvents = (eventsCalendar: events[]): any => {
    eventsCalendar.forEach((item: events) => {
        
        console.log(`
            Nome: ${item.name}
            Horario de ínicio: ${item.initialAt}
            Horário de fim: ${item.finishAt}
            Descrição: ${item.description}
        `)
    })
}

console.log(printAllEvents(eventsCalendar))

*/
// exercicio 03

const printAllEvents = (eventsCalendar: events[]): any => {
    eventsCalendar.forEach((item: events) => {
        const duration = item.finishAt.diff(item.initialAt, "minutes")
        
        const today = moment();
        const daysUntilEvent = item.initialAt.diff(today, "days")
       
 

        console.log(`
            Nome: ${item.name}
            Horario de ínicio: ${item.initialAt}
            Horário de fim: ${item.finishAt}
            Descrição: ${item.description}
            Duração: ${duration}
            Dias Até o evento: ${daysUntilEvent}
            

        `)
    })
}

console.log(printAllEvents(eventsCalendar))