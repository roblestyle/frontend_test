import Select from "react-select";
import { useState } from "react";

export type ControlsProps = {
  onSort: (field: string, direction: string) => void;
};


const Controls = ({ onSort }: ControlsProps) => {

  const [selectedField, setSelectedField] = useState("name");
  const [selectedDirection, setSelectedDirection] = useState("ascending");


  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company.name" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const handleFieldChange = (selectedOption: any) => {
    const field = selectedOption.value;
    setSelectedField(field);
    onSort(field, selectedDirection);
  };


  const handleDirectionChange = (selectedOption: any) => {
    const direction = selectedOption.value;
    setSelectedDirection(direction);
    onSort(selectedField, direction);
  };


  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" className="input" onChange={handleFieldChange}/>
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          defaultValue={directionOptions[0]}
          onChange={handleDirectionChange}
        />
      </div>
    </div>
  );
};

export default Controls;