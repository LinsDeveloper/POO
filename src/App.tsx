import {useState, useEffect} from 'react';
import * as C from './App.styles';
import { Item  } from './types/Item';
import { Category  } from './types/category';
import { items} from './data/items';
import { categories} from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setfilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {}
      </C.Body>
    </C.Container>
  );
}


export default App;