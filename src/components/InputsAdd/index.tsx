import * as C from './styles';

type Props = {
    changeWrite: () => void;
};

export const InputFilter = ({changeWrite}: Props) => {
    return(
        <C.InputFilter type='input' onChange={changeWrite}>
            
        </C.InputFilter>
    );
}