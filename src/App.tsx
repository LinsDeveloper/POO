import {useState, useEffect} from 'react';
import * as C from './App.styles';
import { Item  } from './types/Item';
import { Category  } from './types/category';
import { items} from './data/items';
import { categories} from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setfilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    
    let TotalExpense = 0;
    let TotalIncome = 0;
    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        TotalExpense += filteredList[i].value;
      } else{
        TotalIncome += filteredList[i].value;
      }
    }
    setExpense(parseFloat(TotalExpense.toFixed(2)));
    setIncome(parseFloat(TotalIncome.toFixed(2)));

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
          
        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  );
}


export default App;