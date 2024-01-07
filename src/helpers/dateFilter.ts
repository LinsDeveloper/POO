import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() - 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
        
    }
    return newList;
}


export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let formatedMonth = month < 10 ? '0' + month.toString(): month;
    let formatedDay = day < 10 ? '0' + day.toString(): day;

    return `${formatedDay}/${formatedMonth}/${year}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let indexMonth = parseInt(month);
    let listMonths = ['JANEIRO', 'FEVEREIRO', 'MARÇO','ABRIL','MAIO', 
                      'JUNHO','JULHO','AGOSTO','SETEMBRO','OUTUBROME', 
                      'NOVEMBRO', 'DEZEMBRO'
                      ]
    return `${listMonths[indexMonth]} de ${year}`;
    
}