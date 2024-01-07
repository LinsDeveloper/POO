import { Item } from '../../types/Item';
import * as C from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
}

export const TableItem = ({item} : Props) => {
    let formatedDate = formatDate(item.date);
    return(
        <C.TableLine>
            <C.TableColumn>{formatedDate}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].color}>
                        {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}