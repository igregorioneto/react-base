import { getNewId } from "../services/idService";

export default function DateInput({
  labelDescription="Descrição do label",
  inputValue="2023-01-02",
  onInputChange=null,
  id="input_date",
  autoFocus=false
}) {

  function handleInputChange({currentTarget}) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return(
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input 
        autoFocus={autoFocus}
        type="date" 
        id={id}
        value={inputValue}
        className="border p-1"
        onChange={handleInputChange}
      />
    </div>
  )
}