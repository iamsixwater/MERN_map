import React, { memo } from 'react';
import styled from 'styled-components';

// children
// size: small | normal | title
// color: string

interface SpanProps{
    children?: React.ReactNode;
    size?: 'small' | 'normal' | 'title';
    color?: string;
}

const StyledSpan = styled.span<SpanProps>`
    color: ${(props) => props.color || 'black'};

    &.small {
        font-size: 0.8rem;
    }

    &.normal {
        font-size: 1rem;
    }

    &.title {
        font-size: 1rem;
        font-weight: bold;
    }
`;

function Span({ children, size='normal', color }: SpanProps) {
    return <StyledSpan className={size} color={color}>{children}</StyledSpan>;
}

export default memo(Span);
