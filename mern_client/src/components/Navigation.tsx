import React, { useCallback, useState } from 'react';
import ShadowBox from './common/ShadowBox';
import Span from './common/Span';
import Button from './common/Button';
import Divider from './common/Divider';
import Block from './common/Block';
import { GoPlus } from 'react-icons/go';
import { useAtom, useSetAtom } from 'jotai';
import { selectAtom } from '../atoms/search';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import Input from './common/Input';
import useInput from '../hooks/useInput';
import { infosAtom, selectInfoAtom } from '../atoms/info';
import { infos } from '../data/infos';
import { useQuery } from 'react-query';
import { searchKeyword } from '../apis/search';

interface NavigationProps {
  type?: 'home' | 'upload';
}

function Navigation({ type = 'home' }: NavigationProps) {
  const [select, setSelect] = useAtom(selectAtom);
  const { value, onChange } = useInput('');
  const setInfos = useSetAtom(infosAtom);
  const setSelectInfo = useSetAtom(selectInfoAtom);

  const [keyword, setKeyword] = useState('');
  const { status } = useQuery(
    ['search', keyword],
    () => searchKeyword(keyword),
    {
      enabled: !!keyword,
      select: (res) => res.data.data,
      onSuccess: (infos) => {
        setInfos(infos);
        setSelectInfo(null);
      },
    }
  );

  const onChangeSelect = useCallback(() => {
    setSelect(!select);
  }, [select, setSelect]);

  const onSubmit = useCallback(() => {
    setKeyword(value);
  }, [value]);

  return (
    <ShadowBox>
      {type === 'upload' && select ? (
        <Button onClick={onChangeSelect}>
          <FiArrowLeft size={20} />
        </Button>
      ) : (
        <Button type='link' url='/'>
          <Span size='title'>MERN</Span>
        </Button>
      )}
      <Divider />
      {select ? (
        <Input value={value} onChange={onChange} onSubmit={onSubmit} />
      ) : (
        <Block
          height='28px'
          onClick={type === 'upload' ? onChangeSelect : undefined}
        />
      )}
      {type === 'upload' ? (
        <Button onClick={select ? onSubmit : onChangeSelect}>
          <FiSearch size={20} />
        </Button>
      ) : (
        <Button type='link' url='/upload'>
          <GoPlus size={20} />
        </Button>
      )}
    </ShadowBox>
  );
}

export default Navigation;
