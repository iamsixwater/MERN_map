import { useSetAtom } from 'jotai';
import MapContainer from '../../components/MapContainer';
import Navigation from '../../components/Navigation';
import { infosAtom } from '../../atoms/info';
import MarkersContainer from '../../components/MarkersContainer';
import { useQuery } from 'react-query';
import { getInfos } from '../../apis/info';

function Home() {
  const setInfos = useSetAtom(infosAtom);
  const { status } = useQuery('infos', getInfos, {
    select: (res) => res.data.data,
    onSuccess: (infos) => {
      setInfos(infos);
    },
  });

  if (status === 'loading') return <></>;

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Home;
