import React, { useState, useRef } from 'react';

import dataSpeed from '../utils/calculate.dataspeed';

import styles from '../assets/css/pages/DataSpeed.module.css';

function DataSpeed() {
  const defaultIn = 'bit/s';
  const defaultOut = 'kbit/s';

  const units = [
    { seq: 1, unit: 'bit/s', name: '초당 비트' },
    { seq: 2, unit: 'kbit/s', name: '초당 킬로비트' },
    { seq: 3, unit: 'kB/s', name: '초당 킬로바이트' },
    { seq: 4, unit: 'Kibit/s', name: '초당 키비비트' },
    { seq: 5, unit: 'Mbit/s', name: '초당 메가비트' },
    { seq: 6, unit: 'MB/s', name: '초당 메가바이트' },
    { seq: 7, unit: 'Mibit/s', name: '초당 메비비트' },
    { seq: 8, unit: 'Gbit/s', name: '초당 기가비트' },
    { seq: 9, unit: 'GB/s', name: '초당 기가바이트' },
    { seq: 10, unit: 'Gibit/s', name: '초당 기비비트' },
    { seq: 11, unit: 'Tbit/s', name: '초당 테라비트' },
    { seq: 12, unit: 'TB/s', name: '초당 테라바이트' },
    { seq: 13, unit: 'Tibit/s', name: '초당 테비비트' },
  ];

  const [dispDataSpeed, setDispDataSpeed] = useState({
    bit: 0,
    kbit: 0,
    kb: 0,
    kibit: 0,
    mbit: 0,
    mb: 0,
    mibit: 0,
    gbit: 0,
    gb: 0,
    gibit: 0,
    tbit: 0,
    tb: 0,
    tibit: 0,
  });

  // Ref  셋팅
  const refIptIn = useRef();
  const refIptOut = useRef();
  const refSelIn = useRef();
  const refSelOut = useRef();

  // state 리셋 함수
  const resetState = () => {
    const reset = { ...dispDataSpeed };
    reset.bit = 0;
    reset.kbit = 0;
    reset.kb = 0;
    reset.kibit = 0;
    reset.mbit = 0;
    reset.mb = 0;
    reset.mibit = 0;
    reset.gbit = 0;
    reset.gb = 0;
    reset.gibit = 0;
    reset.tbit = 0;
    reset.tb = 0;
    reset.tibit = 0;
    setDispDataSpeed(reset);

    refIptIn.current.value = '';
    refIptOut.current.value = '';
    refSelIn.current.value = defaultIn;
    refSelOut.current.value = defaultOut;
  };

  // INPUT 태그 Validation 함수
  const isNumberValid = event => {
    const inputVal = event.target.value;

    // 소수점 다섯자리수까지만 입력 허용
    const regexp = /^\d*(\.\d{0,5})?$/;
    if (inputVal.search(regexp) === -1) {
      if (event.target.id === 'idIptIn') {
        refIptIn.current.value = inputVal.substr(0, inputVal.length - 1);
      } else if (event.target.id === 'idIptOut') {
        refIptOut.current.value = inputVal.substr(0, inputVal.length - 1);
      }
    }
  };

  const calculate = (_id, _value = null) => {
    // 잘못된 입력값 체크
    const inputVal = parseFloat(_value);

    if (inputVal <= 0) {
      resetState();
      return;
    }

    // 기준 단위 bit 값 초기화
    let bit = 0;

    // 이벤트 동작에 따른 처리
    let procSelIn = null;
    let procSelOut = null;
    let procIptIn = null;
    let procIptOut = null;

    if (_id === 'idSelIn' || _id === 'idSelOut' || _id === 'idIptIn') {
      procSelIn = refSelIn;
      procSelOut = refSelOut;
      procIptIn = refIptIn;
      procIptOut = refIptOut;
    }
    if (_id === 'idIptOut') {
      procSelIn = refSelOut;
      procSelOut = refSelIn;
      procIptIn = refIptOut;
      procIptOut = refIptIn;
    }

    // 의도치 않은 상황
    if (
      procSelIn === null ||
      procSelOut === null ||
      procIptIn === null ||
      procIptOut === null
    ) {
      resetState();
      return;
    }

    // 입력값 비트 값으로 변환
    switch (procSelIn.current.value) {
      case 'bit/s':
        bit = procIptIn.current.value;
        break;
      case 'kbit/s':
        bit = dataSpeed.kbitToBit(procIptIn.current.value);
        break;
      case 'kB/s':
        bit = dataSpeed.kbToBit(procIptIn.current.value);
        break;
      case 'Kibit/s':
        bit = dataSpeed.kibitToBit(procIptIn.current.value);
        break;
      case 'Mbit/s':
        bit = dataSpeed.mbitToBit(procIptIn.current.value);
        break;
      case 'MB/s':
        bit = dataSpeed.mbToBit(procIptIn.current.value);
        break;
      case 'Mibit/s':
        bit = dataSpeed.mibitToBit(procIptIn.current.value);
        break;
      case 'Gbit/s':
        bit = dataSpeed.gbitToBit(procIptIn.current.value);
        break;
      case 'GB/s':
        bit = dataSpeed.gbToBit(procIptIn.current.value);
        break;
      case 'Gibit/s':
        bit = dataSpeed.gibitToBit(procIptIn.current.value);
        break;
      case 'Tbit/s':
        bit = dataSpeed.tbitToBit(procIptIn.current.value);
        break;
      case 'TB/s':
        bit = dataSpeed.tbToBit(procIptIn.current.value);
        break;
      case 'Tibit/s':
        bit = dataSpeed.tibitToBit(procIptIn.current.value);
        break;
      default:
        procIptIn.current.value = 0;
    }

    // 비트 값에서 각각의 데이터 전송 속도 변환
    const result = { ...dispDataSpeed };
    result.bit = bit;
    result.kbit = dataSpeed.bitToKbit(bit);
    result.kb = dataSpeed.bitToKb(bit);
    result.kibit = dataSpeed.bitToKibit(bit);
    result.mbit = dataSpeed.bitToMbit(bit);
    result.mb = dataSpeed.bitToMb(bit);
    result.mibit = dataSpeed.bitToMibit(bit);
    result.gbit = dataSpeed.bitToGbit(bit);
    result.gb = dataSpeed.bitToGb(bit);
    result.gibit = dataSpeed.bitToGibit(bit);
    result.tbit = dataSpeed.bitToTbit(bit);
    result.tb = dataSpeed.bitToTb(bit);
    result.tibit = dataSpeed.bitToTibit(bit);

    // 화면 출력
    switch (procSelOut.current.value) {
      case 'bit/s':
        procIptOut.current.value = result.bit;
        break;
      case 'kbit/s':
        procIptOut.current.value = result.kbit;
        break;
      case 'kB/s':
        procIptOut.current.value = result.kb;
        break;
      case 'Kibit/s':
        procIptOut.current.value = result.kibit;
        break;
      case 'Mbit/s':
        procIptOut.current.value = result.mbit;
        break;
      case 'MB/s':
        procIptOut.current.value = result.mb;
        break;
      case 'Mibit/s':
        procIptOut.current.value = result.mibit;
        break;
      case 'Gbit/s':
        procIptOut.current.value = result.gbit;
        break;
      case 'GB/s':
        procIptOut.current.value = result.gb;
        break;
      case 'Gibit/s':
        procIptOut.current.value = result.gibit;
        break;
      case 'Tbit/s':
        procIptOut.current.value = result.tbit;
        break;
      case 'TB/s':
        procIptOut.current.value = result.tb;
        break;
      case 'Tibit/s':
        procIptOut.current.value = result.tibit;
        break;
      default:
        procIptOut.current.value = 0;
    }

    setDispDataSpeed(result);
  };

  const handleChange = event => {
    calculate(event.target.id);
  };

  // TODO: 값이 비었을 때 입력필드에 0 출력

  let detailView = null;
  if (dispDataSpeed.bit > 0) {
    detailView = (
      <ul>
        {Object.values(dispDataSpeed).map((value, index) => (
          <li key={units[index].seq}>
            <span className={styles.num}>{value}</span>
            <span className={styles.text}>{units[index].unit}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <article>
      <div className={styles.process_wrap}>
        <div className={styles.input_wrap}>
          <input
            type="number"
            id="idIptIn"
            className={styles.input}
            ref={refIptIn}
            onKeyUp={isNumberValid}
            onChange={handleChange}
            placeholder="숫자를 입력하세요"
          />
        </div>
        <div className={styles.select_wrap}>
          <select
            id="idSelIn"
            ref={refSelIn}
            onChange={handleChange}
            defaultValue={defaultIn}
          >
            {units.map(unit => (
              <option key={unit.seq} value={unit.unit}>
                {unit.name}&nbsp;({unit.unit})
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.result_wrap}>
        <div className={styles.input_wrap}>
          <input
            type="number"
            id="idIptOut"
            className={styles.output}
            ref={refIptOut}
            onKeyUp={isNumberValid}
            onChange={handleChange}
            placeholder="결과가 표시됩니다"
          />
        </div>
        <div className={styles.select_wrap}>
          <select
            id="idSelIn"
            ref={refSelOut}
            onChange={handleChange}
            defaultValue={defaultOut}
          >
            {units.map(unit => (
              <option key={unit.seq} value={unit.unit}>
                {unit.name}&nbsp;({unit.unit})
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.detail_wrap}>{detailView}</div>
      <div className={styles.func_wrap}>
        <button type="button" className={styles.reset_btn} onClick={resetState}>
          <i className="fa-solid fa-arrow-rotate-left" />
        </button>
      </div>
    </article>
  );
}

export default DataSpeed;
