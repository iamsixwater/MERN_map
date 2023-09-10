import React, { useCallback } from 'react';
import { mapAtom } from '../atoms/map';
import { useAtom, useAtomValue } from 'jotai';
import { infosAtom, selectInfoAtom } from '../atoms/info';
import { Info } from '../types/info';
import Marker from './common/Marker';
import InfoWindow from './common/InfoWindow';

interface MarkersContainerProps {
    type?: 'home' | 'upload';
}

function MarkersContainer({type='home'}: MarkersContainerProps) {
    const map = useAtomValue(mapAtom);
    const infos = useAtomValue(infosAtom);
    const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

    const onSubmit = useCallback(() => {
        console.log('submit!');
    }, []);

    if(!map || !infos) return null;

    return (
        <>
            {infos.map((info: Info) => (
                <Marker
                    key={info.id}
                    map={map}
                    position={info.position}
                    content={'<div class="marker" />'}
                    onClick={() => {
                        setSelectInfo(info);
                    }}
                />
            ))}
            {
                selectInfo && (
                    <Marker
                        key={selectInfo.id}
                        map={map}
                        position={selectInfo.position}
                        content={'<div class="marker select" />'}
                        onClick={() => {
                            setSelectInfo(null);
                        }}
                    />
                )
            }
            <InfoWindow
                map={map}
                selectInfo={selectInfo}
                onSubmit={type==='upload' ? onSubmit : undefined}
            />
        </>
    );
}

export default MarkersContainer;
