export default function CheckBoxInput({
  labelDescription="Descrição do checkbox",
  inputValue="Valor padrão do input",
  onToggleChange=null,
  id="input_checkbox",
  autoFocus=false
}) {

  function handleInputChange() {
    if (onToggleChange) {
      onToggleChange();
    }
  }

  return(
    <div className="flex flex-row items-center space-x-2 my-4">
      <input
        autoFocus={autoFocus}
        type="checkbox" 
        id={id} 
        value={inputValue}
        className="border p-1"
        onChange={handleInputChange}
      />

      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
    </div>
  )
}