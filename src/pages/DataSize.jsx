import React, { useState, useRef } from 'react';

import dataSize from '../utils/calculate.datasize';

import styles from '../assets/css/pages/DataSize.module.css';

function DataSize() {
  const defaultIn = 'MB';
  const defaultOut = 'GB';

  const units = [
    { seq: 1, unit: 'bit', name: '비트' },
    { seq: 2, unit: 'byte', name: '바이트' },
    { seq: 3, unit: 'KB', name: '킬로바이트' },
    { seq: 4, unit: 'MB', name: '메가바이트' },
    { seq: 5, unit: 'GB', name: '기가바이트' },
    { seq: 6, unit: 'TB', name: '테라바이트' },
    { seq: 7, unit: 'PB', name: '페타바이트' },
    { seq: 8, unit: 'EB', name: '엑사바이트' },
  ];

  const [dispDataSize, setDispDataSize] = useState({
    bit: 0,
    b: 0,
    kb: 0,
    mb: 0,
    gb: 0,
    tb: 0,
    pb: 0,
    eb: 0,
  });

  // Ref 셋팅
  const refIptIn = useRef();
  const refIptOut = useRef();

  const refSelIn = useRef();
  const refSelOut = useRef();

  // state 리셋 함수
  const resetState = () => {
    const reset = { ...dispDataSize };
    reset.bit = 0;
    reset.b = 0;
    reset.kb = 0;
    reset.mb = 0;
    reset.gb = 0;
    reset.tb = 0;
    reset.pb = 0;
    reset.eb = 0;
    setDispDataSize(reset);

    refIptIn.current.value = '';
    refIptOut.current.value = '';
    refSelIn.current.value = 'MB';
    refSelOut.current.value = 'GB';
  };

  // INPUT 태그 Validation 함수
  const isNumberValid = evt => {
    const inputVal = evt.target.value;

    // 소수점 다섯자리수까지만 입력 허용
    const regexp = /^\d*(\.\d{0,5})?$/;
    if (inputVal.search(regexp) === -1) {
      if (evt.target.id === 'idIptIn') {
        refIptIn.current.value = inputVal.substr(0, inputVal.length - 1);
      } else if (evt.target.id === 'idIptOut') {
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

    // 기준 단위 byte 값 초기화
    let byte = 0;

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

    // 입력값 byte 값으로 변환
    switch (procSelIn.current.value) {
      case 'bit':
        byte = dataSize.bitToByte(procIptIn.current.value);
        break;
      case 'KB':
        byte = dataSize.kbToByte(procIptIn.current.value);
        break;
      case 'MB':
        byte = dataSize.mbToByte(procIptIn.current.value);
        break;
      case 'GB':
        byte = dataSize.gbToByte(procIptIn.current.value);
        break;
      case 'TB':
        byte = dataSize.tbToByte(procIptIn.current.value);
        break;
      case 'PB':
        byte = dataSize.pbToByte(procIptIn.current.value);
        break;
      case 'EB':
        byte = dataSize.ebToByte(procIptIn.current.value);
        break;
      default:
        byte = 0;
    }

    // byte 값에서 각각의 데이터사이즈 변환
    const result = { ...dispDataSize };
    result.bit = dataSize.byteToBit(byte);
    result.b = byte;
    result.kb = dataSize.byteToKB(byte);
    result.mb = dataSize.byteToMB(byte);
    result.gb = dataSize.byteToGB(byte);
    result.tb = dataSize.byteToTB(byte);
    result.pb = dataSize.byteToPB(byte);
    result.eb = dataSize.byteToEB(byte);

    // 화면 출력
    switch (procSelOut.current.value) {
      case 'bit':
        procIptOut.current.value = result.bit;
        break;
      case 'B':
        procIptOut.current.value = result.b;
        break;
      case 'KB':
        procIptOut.current.value = result.kb;
        break;
      case 'MB':
        procIptOut.current.value = result.mb;
        break;
      case 'GB':
        procIptOut.current.value = result.gb;
        break;
      case 'TB':
        procIptOut.current.value = result.tb;
        break;
      case 'PB':
        procIptOut.current.value = result.pb;
        break;
      case 'EB':
        procIptOut.current.value = result.eb;
        break;
      default:
        procIptOut.current.value = 0;
    }

    setDispDataSize(result);
  };

  const onChange = event => {
    calculate(event.target.id);
  };

  let detailView = null;
  if (dispDataSize.b > 0) {
    detailView = (
      <ul>
        <li>
          <span className={styles.num}>{dispDataSize.bit}</span>
          <span className={styles.text}>
            {units[0].name}&nbsp;({units[0].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.b}</span>
          <span className={styles.text}>
            {units[1].name}&nbsp;({units[1].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.kb}</span>
          <span className={styles.text}>
            {units[2].name}&nbsp;({units[2].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.mb}</span>
          <span className={styles.text}>
            {units[3].name}&nbsp;({units[3].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.gb}</span>
          <span className={styles.text}>
            {units[4].name}&nbsp;({units[4].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.tb}</span>
          <span className={styles.text}>
            {units[5].name}&nbsp;({units[5].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.pb}</span>
          <span className={styles.text}>
            {units[6].name}&nbsp;({units[6].unit})
          </span>
        </li>
        <li>
          <span className={styles.num}>{dispDataSize.eb}</span>
          <span className={styles.text}>
            {units[7].name}&nbsp;({units[7].unit})
          </span>
        </li>
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
            onChange={onChange}
            placeholder="숫자를 입력하세요"
          />
        </div>
        <div className={styles.select_wrap}>
          <select
            id="idSelIn"
            ref={refSelIn}
            defaultValue={defaultIn}
            onChange={onChange}
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
            onChange={onChange}
            placeholder="결과가 표시됩니다"
          />
        </div>
        <div className={styles.select_wrap}>
          <select
            id="idSelOut"
            ref={refSelOut}
            defaultValue={defaultOut}
            onChange={onChange}
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

export default DataSize;
