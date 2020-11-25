import React from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import { todos } from 'reducers/todos';


const ItemContainer = styled.li`
    align-self: flex-start;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
    color: #3f3f3f;
    background-color: #b8f4ff;
    list-style: none;    
`;

export const Item = ({ item }) => {
    const dispatch = useDispatch();

    const onItemRemove = id => {
        dispatch(todos.actions.removeItem(id));
    }

    return (
        <ItemContainer>
            {item.name}{item.dueDate}  <button onClick={() => onItemRemove(item.id)} >Delete</button>
        </ItemContainer>
    )
};