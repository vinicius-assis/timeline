import "./style.css";

const EditField = ({ type, name, value, onChange, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      className="input"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default EditField;
