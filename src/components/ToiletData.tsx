import { useEffect } from 'react';
import { fetchApiData, fetchApiData1 } from '../apis/api';
import { ApiData } from '@/types/Post';
import { useRecoilState } from 'recoil';
import { secondToiletState, toiletState } from '../recoil/atoms/state';
import MapComponent from '../api/map';

const ToiletData = () => {
  const [data, setData] = useRecoilState(toiletState);
  // const [data1, setData1] = useRecoilState(secondToiletState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const toiletData: ApiData = await fetchApiData();
        console.log('서버에서 온 화장실 데이터', toiletData);

        // 필요한 데이터만 추출
        const extractedData = toiletData.Publtolt[1].row.map((toilet: any) => ({
          address: toilet.REFINE_ROADNM_ADDR,
          lat: parseFloat(toilet.REFINE_WGS84_LAT),
          lng: parseFloat(toilet.REFINE_WGS84_LOGT),
          name: toilet.PBCTLT_PLC_NM,
        }));

        setData(extractedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setData]);

  //   useEffect(() => {
  //     const fetchData1 = async () => {
  //       try {
  //         const toiletData: ApiData = await fetchApiData1();
  //         console.log('서버에서 온 화장실 데이터', toiletData);

  //         // 필요한 데이터만 추출
  //         const extractedData = toiletData.Publtolt[1].row.map((toilet: any) => ({
  //           address: toilet.REFINE_ROADNM_ADDR,
  //           lat: parseFloat(toilet.REFINE_WGS84_LAT),
  //           lng: parseFloat(toilet.REFINE_WGS84_LOGT),
  //           name: toilet.PBCTLT_PLC_NM,
  //         }));

  //         setData1(extractedData);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData1();
  //   }, [setData1]);
  //const combineData = [...data, ...data1];

  return (
    <>
      <div style={{ display: 'flex', margin: '0 auto' }}>
        <MapComponent toilets={data} />
      </div>
    </>
  );
};

export default ToiletData;
