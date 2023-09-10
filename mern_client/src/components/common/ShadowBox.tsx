import React, { memo } from 'react';
import styled from 'styled-components';

// children

interface ShadowBoxProps {
    children: React.ReactNode;
}

const StyledShadowBox = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    max-width: 400px;
    border-radius: 10px;
    padding: 6px 8px;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
    border: 1ps solid #e8e8e8;
    box-sizing: border-box;
    z-index: 101; //navermap: 100
    background: #ffffff;
`;

function ShadowBox({children}: ShadowBoxProps) {
  return <StyledShadowBox>{children}</StyledShadowBox>;
}

export default memo(ShadowBox);
