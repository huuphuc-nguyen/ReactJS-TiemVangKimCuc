const GroupCheckbox = ({ options, title, setSelectedOptions }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions( prev => [...prev, value]);
    } else {
      setSelectedOptions( prev => prev.filter(option => option !== value));
    }
  };

  return (
    <div className="p-2 pl-20">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      {options.map(option => (
        <div key={option.id} className="flex items-center mb-1">
          <input
            type="checkbox"
            id={`checkbox-${title}-${option.id}`}
            value={option.id}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor={`checkbox-${title}-${option.id}`} className="text-sm">
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default GroupCheckbox;
