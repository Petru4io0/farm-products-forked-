import React from "react";
import { StyledList } from "./styles";
import Checkbox from "/src/components/UI/checkbox/checkbox";

function CheckboxList({
  options,
  labelComponent,
  name,
  selectValues,
  onChange,
  onClickLabel = () => {},
}) {
  console.log(Checkbox);
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  return (
    <StyledList>
      {options &&
        options.length &&
        options.map((option) => {
          <li key={option.title}>
            <Checkbox
              labelComponent={labelComponent}
              selectValues={selectValues}
              isChecked={selectValues.includes(option.value)}
              name={name}
              value={option.value}
              text={option.title}
              onClick={(value) => onClickLabel(value, index)}
              onChange={handleChange}
            />
            ;
          </li>;
        })}
    </StyledList>
  );
}

export default CheckboxList;
