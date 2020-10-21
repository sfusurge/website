import React, { useState } from "react";

import styles from "../css/Dropdown.module.css";

import { ReactComponent as DropDownArrow } from '../icons/drop-down.svg'


// Options: ["Option1", "Option2", ...]
export default ({
  options,
  defualt,
  classes: {
    optionStyles = "",
    listStyles = "",
    dropdownStyles = ""
  } = {
    optionStyles: "",
    listStyles: "",
    dropdownStyles: ""
  },
  onClick = () => { } }) => {

  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState(defualt || options[0])

  const onClickHandler = (event, option) => {
    setSelected(option)
    setOpen(false)
    onClick(option)
  }

  return (
    <div className={`${styles.container} ${dropdownStyles}`}>
      <button onClick={() => setOpen(!isOpen)} className={styles.btn}>
        {selected}
        <DropDownArrow className={styles.dropDownArrow} />
      </button>
      {
        isOpen &&
        <div className={`${styles.list} ${listStyles}`}>
          {options.map(option =>
            <Option
              onClickHandler={onClickHandler}
              option={option}
              key={option}
              className={optionStyles}
              selected={option === selected}
            />
          )}
        </div>
      }
    </div>
  )
}


const Option = ({ onClickHandler = () => { }, option, className = "", selected }) => {
  const onClick = event => {
    onClickHandler(event, option)
  }
  return (
    <span
      onClick={onClick}
      className={`${styles.option} ${className} ${selected ? styles.selected : ''}`}
    >
      {option}
    </span>
  )
}