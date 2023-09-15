const InputField = ({ label, type, name, value, onChange, required, className }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
