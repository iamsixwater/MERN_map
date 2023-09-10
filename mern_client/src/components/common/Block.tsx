import React, { memo } from 'react';
import styled from 'styled-components';


// width: 100%
// height: props.height
// onClick: props.onClick

interface BlockProps {
    height: string;
    onClick?: () => void;
}

const StyledBlock = styled.div<BlockProps>`
    width: 100%;
    height: ${(props) => props.height};
    cursor: ${(props) => props.onClick && 'pointer'};
`;

function Block({ height, onClick }: BlockProps) {
  return <StyledBlock height={height} onClick={onClick} />;
}

export default memo(Block);
