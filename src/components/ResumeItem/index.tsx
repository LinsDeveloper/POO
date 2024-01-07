import * as C from './styles';

type Props = {
    title: string;
    value: number;
}

export const ResumeItem = ({title, value}: Props) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Value color={value < 0 || title === "Despesas" ? `red` : `green`}>R$ {value}</C.Value>
        </C.Container>
    );
}