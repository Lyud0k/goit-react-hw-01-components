import styled from "@emotion/styled";
import { buildQueries } from "@testing-library/react";

export const List = styled.li`
span {
    ${propes => {
    const way = propes.children[0].props.children;
    console.log(way);
    }}
}

`;


export const Col = styled.span`


`;



export const Text= styled.p`

`;