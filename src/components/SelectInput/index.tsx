import SelectInputWrapper from "./SelectInputWrapper";
import { SelectInputProps } from "./type";


const SelectInput = ({ name, id, placeholder, options }: SelectInputProps) => {
  return (
    <SelectInputWrapper>
      <div className="select-wrapper">
        <select name={name} id={id}>
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </SelectInputWrapper>
  );
};

export default SelectInput;