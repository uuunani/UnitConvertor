import React, { useState, useRef } from 'react';

import dataSize from '../utils/calculate.datasize';

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
  const refInputIn = useRef();
  const refInputOut = useRef();

  const refSelectIn = useRef();
  const refSelectOut = useRef();

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
    let refSelIn = null;
    let refSelOut = null;
    let refIptIn = null;
    let refIptOut = null;

    if (_id === 'idSelectIn' || _id === 'idIn') {
      refSelIn = refSelectIn;
      refSelOut = refSelectOut;
      refIptIn = refInputIn;
      refIptOut = refInputOut;
    }
    if (_id === 'idSelectOut' || _id === 'idOut') {
      refSelIn = refSelectOut;
      refSelOut = refSelectIn;
      refIptIn = refInputOut;
      refIptOut = refInputIn;
    }

    // 의도치 않은 상황
    if (
      refSelIn === null ||
      refSelOut === null ||
      refIptIn === null ||
      refIptOut === null
    ) {
      resetState();
      return;
    }

    // 입력값 byte 값으로 변환
    switch (refSelIn.current.value) {
      case 'bit':
        byte = dataSize.bitToByte(refIptIn.current.value);
        break;
      case 'KB':
        byte = dataSize.kbToByte(refIptIn.current.value);
        break;
      case 'MB':
        byte = dataSize.mbToByte(refIptIn.current.value);
        break;
      case 'GB':
        byte = dataSize.gbToByte(refIptIn.current.value);
        break;
      case 'TB':
        byte = dataSize.tbToByte(refIptIn.current.value);
        break;
      case 'PB':
        byte = dataSize.pbToByte(refIptIn.current.value);
        break;
      case 'EB':
        byte = dataSize.ebToByte(refIptIn.current.value);
        break;
      default:
        byte = 0;
    }

    // for test
    console.log(`byte = ${byte}`);

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
    switch (refSelOut.current.value) {
      case 'bit':
        refIptOut.current.value = result.bit;
        break;
      case 'B':
        refIptOut.current.value = result.b;
        break;
      case 'KB':
        refIptOut.current.value = result.kb;
        break;
      case 'MB':
        refIptOut.current.value = result.mb;
        break;
      case 'GB':
        refIptOut.current.value = result.gb;
        break;
      case 'TB':
        refIptOut.current.value = result.tb;
        break;
      case 'PB':
        refIptOut.current.value = result.pb;
        break;
      case 'EB':
        refIptOut.current.value = result.eb;
        break;
      default:
        refIptOut.current.value = 0;
    }

    setDispDataSize(result);
  };

  const onKeyup = event => {
    calculate(event.target.id, event.target.value);
  };

  const onChange = event => {
    calculate(event.target.id);
  };

  return (
    <article>
      <h1>데이터 사이즈 변환</h1>
      <div>
        <input type="number" id="idIn" ref={refInputIn} onKeyUp={onKeyup} />
        <select
          id="idSelectIn"
          ref={refSelectIn}
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
      <div>
        <input type="number" id="idOut" ref={refInputOut} onKeyUp={onKeyup} />
        <select
          id="idSelectOut"
          ref={refSelectOut}
          value={defaultOut}
          onChange={onChange}
        >
          {units.map(unit => (
            <option key={unit.seq} value={unit.unit}>
              {unit.name}&nbsp;({unit.unit})
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          <li>
            {dispDataSize.bit} {units[0].name}&nbsp;({units[0].unit})
          </li>
          <li>
            {dispDataSize.b} {units[1].name}&nbsp;({units[1].unit})
          </li>
          <li>
            {dispDataSize.kb} {units[2].name}&nbsp;({units[2].unit})
          </li>
          <li>
            {dispDataSize.mb} {units[3].name}&nbsp;({units[3].unit})
          </li>
          <li>
            {dispDataSize.gb} {units[4].name}&nbsp;({units[4].unit})
          </li>
          <li>
            {dispDataSize.tb} {units[5].name}&nbsp;({units[5].unit})
          </li>
          <li>
            {dispDataSize.pb} {units[6].name}&nbsp;({units[6].unit})
          </li>
          <li>
            {dispDataSize.eb} {units[7].name}&nbsp;({units[7].unit})
          </li>
        </ul>
      </div>
    </article>
  );
}

export default DataSize;
