import styled from "styled-components";

const Input = styled.caption`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background: #F8FAFC;
    color: #94A3B8;
    padding: 8px 16px;
    gap: 8px;
    border-radius: 24px;

    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;