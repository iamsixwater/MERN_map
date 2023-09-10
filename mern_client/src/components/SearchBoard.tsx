import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { selectAtom } from '../atoms/search';
import { infosAtom, selectInfoAtom } from '../atoms/info';
import ResultBox from './ResultBox';
import { Info } from '../types/info';

const StyledSearchBoard = styled.div`
    width: 100%;
    max-width: 436px;
    height: 100%;
    position: absolute;
    background: #ffffff;
    top: 0px;
    padding: 74px 16px 16px 16px;

    .search_board_wrap {
        height: 100%;
        overflow-y: scroll;
    }

    .no_result {
        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;

function SearchBoard() {
    const [select, setSelect] = useAtom(selectAtom);
    const infos = useAtomValue(infosAtom);
    const setSelectInfo = useSetAtom(selectInfoAtom);

    const onClickResultBox = useCallback((info: Info) => {
        setSelectInfo(info);
        setSelect(!select);
    }, [select, setSelect, setSelectInfo]);

    return <>
        {
            select && 
            <StyledSearchBoard>
                <div className="search_board_wrap">
                    {
                        infos && infos.length > 0 ? (
                            infos.map((info: Info) => (
                                <ResultBox
                                    key={info.id}
                                    info={info}
                                    onClick={onClickResultBox}
                                />
                            ))
                        ) : (
                            <div className="no_result">No result found.</div>
                        )
                    }
                </div>
            </StyledSearchBoard>
        }
    </>;

}

export default SearchBoard;
