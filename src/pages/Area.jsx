import React, { useState, useRef } from 'react';

import area from '../utils/calculate.area';

import styles from '../assets/css/pages/Area.module.css';

function Area() {
  const defaultIn = 'm²';
  const defaultOut = '평';

  const units = [
    { seq: 1, unit: 'm²', name: '제곱미터' },
    { seq: 2, unit: 'a', name: '아르' },
    { seq: 3, unit: 'ha', name: '헥타르' },
    { seq: 4, unit: 'km²', name: '제곱킬로미터' },
    { seq: 5, unit: 'mi²', name: '제곱마일' },
    { seq: 6, unit: 'ft²', name: '제곱피트' },
    { seq: 7, unit: 'yd²', name: '제곱야드' },
    { seq: 8, unit: 'ac', name: '에이커' },
    { seq: 9, unit: null, name: '평방자' },
    { seq: 10, unit: null, name: '평' },
    { seq: 11, unit: null, name: '단보' },
    { seq: 12, unit: null, name: '정보' },
  ];

  const [dispAreaSize, setDispAreaSize] = useState({
    m2: 0,
    a: 0,
    ha: 0,
    km2: 0,
    mi2: 0,
    ft2: 0,
    yd2: 0,
    ac: 0,
    pbj: 0,
    pyeong: 0,
    danbo: 0,
    jeongbo: 0,
  });

  // Ref  셋팅
  const refIptIn = useRef();
  const refIptOut = useRef();
  const refSelIn = useRef();
  const refSelOut = useRef();

  // state 리셋 함수
  const resetState = () => {
    const reset = { ...dispAreaSize };
    reset.m2 = 0;
    reset.a = 0;
    reset.ha = 0;
    reset.km2 = 0;
    reset.mi2 = 0;
    reset.ft2 = 0;
    reset.yd2 = 0;
    reset.ac = 0;
    reset.pbj = 0;
    reset.pyeong = 0;
    reset.danbo = 0;
    reset.jeongbo = 0;
    setDispAreaSize(reset);

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

    // 기준 단위 m2 값 초기화
    let m2 = 0;

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

    // 입력값 제곱미터 값으로 변환
    switch (procSelIn.current.value) {
      case 'm²':
        m2 = procIptIn.current.value;
        break;
      case 'a':
        m2 = area.aToM2(procIptIn.current.value);
        break;
      case 'ha':
        m2 = area.haToM2(procIptIn.current.value);
        break;
      case 'km²':
        m2 = area.km2ToM2(procIptIn.current.value);
        break;
      case 'mi²':
        m2 = area.mi2ToM2(procIptIn.current.value);
        break;
      case 'ft²':
        m2 = area.ft2ToM2(procIptIn.current.value);
        break;
      case 'yd²':
        m2 = area.yd2ToM2(procIptIn.current.value);
        break;
      case 'ac':
        m2 = area.acToM2(procIptIn.current.value);
        break;
      case '평방자':
        m2 = area.pbjToM2(procIptIn.current.value);
        break;
      case '평':
        m2 = area.pyeongToM2(procIptIn.current.value);
        break;
      case '단보':
        m2 = area.danboToM2(procIptIn.current.value);
        break;
      case '정보':
        m2 = area.jeongboToM2(procIptIn.current.value);
        break;
      default:
        procIptIn.current.value = 0;
    }

    // 제곱미터 값에서 각각의 면적 변환
    const result = { ...dispAreaSize };
    result.m2 = m2;
    result.a = area.m2ToA(m2);
    result.ha = area.m2ToHa(m2);
    result.km2 = area.m2ToKm2(m2);
    result.mi2 = area.m2ToMi2(m2);
    result.ft2 = area.m2ToFt2(m2);
    result.yd2 = area.m2ToYd2(m2);
    result.ac = area.m2ToAc(m2);
    result.pbj = area.m2ToPbj(m2);
    result.pyeong = area.m2ToPyeong(m2);
    result.danbo = area.m2ToDanbo(m2);
    result.jeongbo = area.m2ToJeongbo(m2);

    // 화면 출력
    switch (procSelOut.current.value) {
      case 'm²':
        procIptOut.current.value = result.m2;
        break;
      case 'a':
        procIptOut.current.value = result.a;
        break;
      case 'ha':
        procIptOut.current.value = result.ha;
        break;
      case 'km²':
        procIptOut.current.value = result.km2;
        break;
      case 'mi²':
        procIptOut.current.value = result.mi2;
        break;
      case 'ft²':
        procIptOut.current.value = result.ft2;
        break;
      case 'yd²':
        procIptOut.current.value = result.yd2;
        break;
      case 'ac':
        procIptOut.current.value = result.ac;
        break;
      case '평방자':
        procIptOut.current.value = result.pbj;
        break;
      case '평':
        procIptOut.current.value = result.pyeong;
        break;
      case '단보':
        procIptOut.current.value = result.danbo;
        break;
      case '정보':
        procIptOut.current.value = result.jeongbo;
        break;
      default:
        procIptOut.current.value = 0;
    }

    setDispAreaSize(result);
  };

  const handleChange = event => {
    calculate(event.target.id);
  };

  // TODO: 값이 비었을 때 입력필드에 0 출력

  let detailView = null;
  if (dispAreaSize.m2 > 0) {
    detailView = (
      <ul>
        {Object.values(dispAreaSize).map((unit, index) => (
          <li key={units[index].seq}>
            <span className={styles.num}>{unit}</span>
            <span className={styles.text}>
              {units[index].unit !== null
                ? `${units[index].name} (${units[index].unit})`
                : units[index].name}
            </span>
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
              <option
                key={unit.seq}
                value={unit.unit !== null ? unit.unit : unit.name}
              >
                {unit.unit !== null ? `${unit.name} (${unit.unit})` : unit.name}
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
              <option
                key={unit.seq}
                value={unit.unit !== null ? unit.unit : unit.name}
              >
                {unit.unit !== null ? `${unit.name} (${unit.unit})` : unit.name}
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

export default Area;
