
import { InputDate } from '../InputDate/styles';
import { InputFilter } from '../InputsAdd';
import { Button } from '../ButtonAdd';
import * as C from './styles';

type Props = {
    clickAddItem: () => void;
    handleChanged: () => void;
}

export const InputArea = ({clickAddItem, handleChanged}: Props) => {

    return(
        <C.Container>
            <C.ContainerFilter>
                <C.TitleFilter>Data</C.TitleFilter>
                <InputDate type='date'/>
            </C.ContainerFilter>
            <C.ContainerFilter>
                <C.TitleFilter>Categoria</C.TitleFilter>
                <InputFilter changeWrite={handleChanged}/>
            </C.ContainerFilter>
            <C.ContainerFilter>
                <C.TitleFilter>Título</C.TitleFilter>
                <InputFilter changeWrite={handleChanged}/>
            </C.ContainerFilter>
            <C.ContainerFilter>
                <C.TitleFilter>Valor</C.TitleFilter>
                <InputFilter changeWrite={handleChanged}/>
            </C.ContainerFilter>
            <Button addNew={clickAddItem}/>
        </C.Container>
    );
}