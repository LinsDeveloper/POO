import * as C from './styles';

type Props = {
    addNew: () => void;
};

export const Button = ({addNew}:Props) => {
    return(
        <C.Button onClick={addNew}>
            Adicionar
        </C.Button>
    );
}