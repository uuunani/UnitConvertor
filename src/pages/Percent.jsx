import React, { useState, useRef } from 'react';

import styles from '../styles/pages/Percent.module.css';

import calc from '../utils/calcurate';

function Percent() {
  const [minusAmt, setMinusAmt] = useState(0);
  const [plusAmt, setPlusAmt] = useState(0);

  const refBaseAmt = useRef();
  const refPercent = useRef();
  const refPercentAmt = useRef();

  // 키업 이벤트
  const onKeyupPercentAmt = () => {
    let baseAmt = refBaseAmt.current.value;
    let percent = refPercent.current.value;

    // float 타입으로 변경
    baseAmt = parseFloat(baseAmt);
    percent = parseFloat(percent);

    if (baseAmt > 0 && percent > 0) {
      // 퍼센트금액 계산
      const percentAmt = calc.percentAmt(baseAmt, percent);

      // 화면 업데이트
      refPercentAmt.current.value = percentAmt;

      setMinusAmt(calc.minus(baseAmt, percentAmt));
      setPlusAmt(calc.plus(baseAmt, percentAmt));
    }
  };

  // 키업 이벤트
  const onKeyupPercent = () => {
    const baseAmt = parseFloat(refBaseAmt.current.value);
    const percentAmt = parseFloat(refPercentAmt.current.value);

    if (baseAmt > 0 && percentAmt > 0) {
      // 퍼센트 계산
      const percent = calc.percent(baseAmt, percentAmt);

      // 화면 업데이트
      refPercent.current.value = percent;
      setMinusAmt(calc.minus(baseAmt, percentAmt));
      setPlusAmt(calc.plus(baseAmt, percentAmt));
    }
  };

  return (
    <article className={styles.article}>
      <div>
        <br />
        <label htmlFor="idBaseAmt">
          <span className={styles.text}>전체금액</span>
          <input
            type="number"
            id="idBaseAmt"
            ref={refBaseAmt}
            onKeyUp={onKeyupPercentAmt}
          />
        </label>
        <br />
        <br />
        <label htmlFor="idPercent">
          <span className={styles.text}>%</span>
          <input
            type="number"
            id="idPercent"
            ref={refPercent}
            onKeyUp={onKeyupPercentAmt}
          />
        </label>
        <br />
        <br />
        <label htmlFor="idPercentAmt">
          <span className={styles.text}>금액</span>
          <input
            type="number"
            ref={refPercentAmt}
            id="idPercentAmt"
            onKeyUp={onKeyupPercent}
          />
        </label>
        <br />
        <br />
        <label htmlFor="idMinusAmt">
          <span className={styles.text}>결과 뺀 금액</span>
          <span id="idMinusAmt">
            {minusAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </label>
        <br />
        <br />
        <label htmlFor="idPlusAmt">
          <span className={styles.text}>결과 더한 금액</span>
          <span id="idPlusAmt">
            {plusAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </label>
      </div>
    </article>
  );
}

export default Percent;
