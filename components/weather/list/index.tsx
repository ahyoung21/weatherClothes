import React, { useState, MouseEvent, useEffect } from 'react';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState } from '../../../state';
import ModalRegister from '../../modalRegister';

import { WeatherBox } from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Weather() {
  const [modalFlag, setModalFlag] = useState(false);
  const intl = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' });
  const [accountData, setAccountData] = useState();
  const onClickOpenModal = () => {
    setModalFlag(true);
  };
  const onClickCloseModal = () => {
    setAccountData(null);
    setModalFlag(false);
  };

  useEffect(() => {
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
    var queryParams =
      '?' + encodeURIComponent('serviceKey') + '=' + process.env.NEXT_PUBLIC_APIKEY; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
    queryParams +=
      '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20221208'); /**/
    queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
    queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55'); /**/
    queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        alert(
          'Status: ' +
            this.status +
            'nHeaders: ' +
            JSON.stringify(this.getAllResponseHeaders()) +
            'nBody: ' +
            this.responseText
        );
      }
    };

    xhr.send('');
  }, []);

  return (
    <WeatherBox>
      <button onClick={onClickOpenModal}>모달오픈</button>
      {modalFlag && <ModalRegister onClose={onClickCloseModal} accountData={accountData} />}
    </WeatherBox>
  );
}
