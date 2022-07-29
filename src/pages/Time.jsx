import React, { useState, useRef } from 'react';

import time from '../utils/calculate.time';

import styles from '../assets/css/pages/Time.module.css';

function Time() {
  // unit 리스트
  const units = [
    { seq: 1, unit: 's', name: '초' },
    { seq: 2, unit: 'min', name: '분' },
    { seq: 3, unit: 'h', name: '시간' },
    { seq: 4, unit: 'd', name: '일' },
  ];

  // state 셋팅
  const [dispTime, setDispTime] = useState({
    sec: 0,
    min: 0,
    hour: 0,
    day: 0,
    secAmt: 0,
    minAmt: 0,
    hourAmt: 0,
  });

  // Ref 셋팅
  const refIptDay = useRef();
  const refIptHour = useRef();
  const refIptMin = useRef();
  const refIptSec = useRef();

  // state 리셋 함수
  const resetState = () => {
    const reset = { ...dispTime };
    reset.sec = 0;
    reset.min = 0;
    reset.hour = 0;
    reset.day = 0;
    reset.secAmt = 0;
    reset.minAmt = 0;
    reset.hourAmt = 0;
    setDispTime(reset);

    refIptDay.current.value = '';
    refIptHour.current.value = '';
    refIptMin.current.value = '';
    refIptSec.current.value = '';
  };

  // INPUT 태그 Validation 함수
  const isNumberValid = event => {
    const inputVal = event.target.value;

    // 소수점 다섯자리수까지만 입력 허용
    const regexp = /^\d*(\.\d{0,5})?$/;
    if (inputVal.search(regexp) === -1) {
      if (event.target.id === 'idIptDay') {
        refIptDay.current.value = inputVal.substr(0, inputVal.length - 1);
      } else if (event.target.id === 'idIptHour') {
        refIptHour.current.value = inputVal.substr(0, inputVal.length - 1);
      } else if (event.target.id === 'idIptMin') {
        refIptMin.current.value = inputVal.substr(0, inputVal.length - 1);
      } else if (event.target.id === 'idIptSec') {
        refIptSec.current.value = inputVal.substr(0, inputVal.length - 1);
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

    // 단위값, 결과값 초기화
    let sec = 0;
    let min = 0;
    let hour = 0;
    let day = 0;
    let amount = 0;

    // ref 현재값 가져오기
    // 입력값이 비었을 경우 0으로 가져오기
    sec = parseFloat(refIptSec.current.value ? refIptSec.current.value : 0);
    min = parseFloat(refIptMin.current.value ? refIptMin.current.value : 0);
    hour = parseFloat(refIptHour.current.value ? refIptHour.current.value : 0);
    day = parseFloat(refIptDay.current.value ? refIptDay.current.value : 0);

    // 입력값을 기준값인 sec으로 변환하기
    // sec으로 변환한 값 총 합하기
    amount =
      time.dayToSec(day) + time.hourToSec(hour) + time.minToSec(min) + sec;

    // 총 sec합에서  일, 시간, 분, 초 단위로 나누기
    const result = { ...dispTime };
    result.day = time.amtToDay(amount);
    result.hour = time.amtToHour(amount);
    result.min = time.amtToMin(amount);
    result.sec = time.amtToSec(amount);
    result.hourAmt = time.secToHour(amount);
    result.minAmt = time.secToMin(amount);
    result.secAmt = amount;

    // 화면 출력
    setDispTime(result);
  };

  const handleChange = event => {
    calculate(event.target.id);
  };

  let detailView = null;
  if (dispTime.secAmt > 0) {
    detailView = (
      <ul>
        <li>
          <span className={styles.num}>{dispTime.day}</span>
          <span className={styles.text}>{units[3].name}</span>
          &nbsp;
          <span className={styles.num}>{dispTime.hour}</span>
          <span className={styles.text}>{units[2].name}</span>
          &nbsp;
          <span className={styles.num}>{dispTime.min}</span>
          <span className={styles.text}>{units[1].name}</span>
          &nbsp;
          <span className={styles.num}>{dispTime.sec}</span>
          <span className={styles.text}>{units[0].name}</span>
          &nbsp;
        </li>
        <li>
          <span className={styles.num}>{dispTime.hourAmt}</span>
          <span className={styles.text}>{units[2].name}</span>
          &nbsp;
          <span className={styles.num}>{dispTime.min}</span>
          <span className={styles.text}>{units[1].name}</span>
          &nbsp;
          <span className={styles.num}>{dispTime.sec}</span>
          <span className={styles.text}>{units[0].name}</span>
          &nbsp;
        </li>
        <li>
          <span className={styles.num}>{dispTime.minAmt}</span>
          <span className={styles.text}>{units[1].name}</span>
          &nbsp;
          <span className={styles.num}>{dispTime.sec}</span>
          <span className={styles.text}>{units[0].name}</span>
          &nbsp;
        </li>
        <li>
          <span className={styles.num}>{dispTime.secAmt}</span>
          <span className={styles.text}>{units[0].name}</span>
          &nbsp;
        </li>
      </ul>
    );
  }

  return (
    <article>
      <div className={styles.process_wrap}>
        <div className={styles.input_wrap}>
          <label htmlFor="idIptD">
            <input
              type="number"
              id="idIptDay"
              className={styles.input}
              ref={refIptDay}
              onKeyUp={isNumberValid}
              onChange={handleChange}
            />
            <span className={styles.text_unit}>일</span>
          </label>
        </div>
        <div className={styles.input_wrap}>
          <label htmlFor="idIptH">
            <input
              type="number"
              id="idIptHour"
              className={styles.input}
              ref={refIptHour}
              onKeyUp={isNumberValid}
              onChange={handleChange}
            />
            <span className={styles.text_unit}>시간</span>
          </label>
        </div>
      </div>
      <div className={styles.process_wrap}>
        <div className={styles.input_wrap}>
          <label htmlFor="idIptMin">
            <input
              type="number"
              id="idIptMin"
              className={styles.input}
              ref={refIptMin}
              onKeyUp={isNumberValid}
              onChange={handleChange}
            />
            <span className={styles.text_unit}>분</span>
          </label>
        </div>
        <div className={styles.input_wrap}>
          <label htmlFor="idIptS">
            <input
              type="number"
              id="idIptSec"
              className={styles.input}
              ref={refIptSec}
              onKeyUp={isNumberValid}
              onChange={handleChange}
            />
            <span className={styles.text_unit}>초</span>
          </label>
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

export default Time;
