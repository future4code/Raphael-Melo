import * as moment from "moment"

    type events = { name: string, description: string, initialAt: moment.Moment, finishAt: moment.Moment}

let eventsCalendar: events [] = [
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
]    

 