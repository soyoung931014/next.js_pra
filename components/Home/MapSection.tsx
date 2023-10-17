import useMap from '@/hooks/useMap';
import Map from './Map';
import { NaverMap } from '@/types/map';

const MapSection = () => {
  const { initializeMap } = useMap();

  //전역 상태로 관리해주는 함수
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  //swr을 이용하여 전역상태로 관리하자. 이 함수를 넘겨줘서 map을 전역으로 emit하자
  return <Map onLoad={onLoadMap} />;
};
export default MapSection;
