import React, { useState, useRef } from 'react';
import styles from '../assets/css/pages/Percent.module.css';
import calc from '../utils/calculate.percent';

function Percent() {
  const [baseAmt, setBaseAmt] = useState();
  const [percent, setPercent] = useState();
  const [resultAmt, setResultAmt] = useState();

  const [minusAmt, setMinusAmt] = useState(0);
  const [plusAmt, setPlusAmt] = useState(0);

  const baseAmtRef = useRef();
  const percentRef = useRef();
  const resultAmtRef = useRef();

  const resetState = () => {
    setBaseAmt(0);
    setPercent(0);
    setResultAmt(0);
    setMinusAmt(0);
    setPlusAmt(0);

    baseAmtRef.current.value = '';
    percentRef.current.value = '';
    resultAmtRef.current.value = '';
  };

  // 전체값 인풋 키업 이벤트
  const onKeyupBaseAmt = () => {
    const cBaseAmt = parseFloat(baseAmtRef.current.value);
    const cPercent = parseFloat(percentRef.current.value);

    if (cBaseAmt > 0 && cPercent > 0) {
      const cResultAmt = calc.percentAmt(cBaseAmt, cPercent);
      resultAmtRef.current.value = cResultAmt;

      // state 업데이트
      setBaseAmt(cBaseAmt);
      setPercent(cPercent);
      setResultAmt(cResultAmt);
      setMinusAmt(calc.minus(cBaseAmt, cResultAmt));
      setPlusAmt(calc.plus(cBaseAmt, cResultAmt));
    }
  };

  // 퍼센트 인풋 키업 이벤트
  const onKeyupPercent = () => {
    const cBaseAmt = parseFloat(baseAmtRef.current.value);
    const cResultAmt = parseFloat(resultAmtRef.current.value);

    if (cBaseAmt > 0 && cResultAmt > 0) {
      // 퍼센트 계산
      const cPercent = calc.percent(cBaseAmt, cResultAmt);
      percentRef.current.value = cPercent;

      // state 업데이트
      setBaseAmt(cBaseAmt);
      setPercent(cPercent);
      setResultAmt(cResultAmt);
      setMinusAmt(calc.minus(cBaseAmt, cResultAmt));
      setPlusAmt(calc.plus(cBaseAmt, cResultAmt));
    }
  };

  let detailView = null;
  if ((baseAmt > 0 && percent > 0) || (baseAmt > 0 && resultAmt > 0)) {
    detailView = (
      <ul>
        <li>
          <span className={styles.text1}>
            {parseFloat(baseAmt)}의 {parseFloat(percent)}% 는{' '}
          </span>{' '}
          <span className={styles.text2}>{parseFloat(resultAmt)}</span>
          <span className={styles.text1}>입니다</span>
        </li>
        <li>
          <span className={styles.text1}>
            {parseFloat(baseAmt)}
            에서 {parseFloat(percent)}% 만큼 증가한 값은&nbsp;
          </span>
          <span className={styles.text2}>{parseFloat(plusAmt)}</span>
        </li>
        <li>
          <span className={styles.text1}>
            {parseFloat(baseAmt)}
            에서 {parseFloat(percent)}% 만큼 감소한 값은&nbsp;
          </span>
          <span className={styles.text2}>{parseFloat(minusAmt)}</span>
        </li>
      </ul>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles.process_wrap}>
        <label className={styles.lbl_base_amt} htmlFor="idBaseAmt">
          <span className={styles.text}>전체값</span>
          <input
            type="number"
            id="idBaseAmt"
            ref={baseAmtRef}
            onKeyUp={onKeyupBaseAmt}
            onChange={() => {
              setBaseAmt(baseAmtRef.current.value);
            }}
            placeholder="전체값 100의"
          />
        </label>
        <label className={styles.lbl_percent} htmlFor="idPercent">
          <span className={styles.text}>비율 (%)</span>
          <input
            type="number"
            id="idPercent"
            ref={percentRef}
            onKeyUp={onKeyupBaseAmt}
            onChange={() => {
              setPercent(percentRef.current.value);
            }}
            placeholder="10% 는"
          />
        </label>
      </div>
      <div className={styles.result_wrap}>
        <label className={styles.lbl_result} htmlFor="idResultAmt">
          <span className={styles.text}>결과값</span>
          <input
            type="number"
            id="idResultAmt"
            ref={resultAmtRef}
            onKeyUp={onKeyupPercent}
            onChange={() => {
              setResultAmt(resultAmtRef.current.value);
            }}
            placeholder="10 입니다"
          />
        </label>
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

export default Percent;
