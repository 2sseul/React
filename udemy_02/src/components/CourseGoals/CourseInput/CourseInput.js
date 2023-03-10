import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//     background: ${props => props.invalid ? '#ffd7d7' : '#transparent'}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  //입력된 값이 유효한지 확인해주는 formSubmitHandler
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    //유효한지 확인은 onAddGoal이 실행되기 전에 해줘야한다.
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} /> 
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
//transparent: 투명색


export default CourseInput;
