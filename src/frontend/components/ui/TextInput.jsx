import React from 'react';
import '../../styles/ui/TextInput.css';

export default function TextInput({
  
  value = "",
  onChange,
  type = "text",
  placeholder = "",
  className = "",
  style = {},
  name,
  ...props
}) {
  const handleChange = (e) => {
    
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`text-input-container ${className}`} style={{ marginBottom: "15px", borderRadius: "7px", ...style }}>
      
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        name={name} 
        {...props}
        className="text-input"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #4f6cc3ff',
          ...style
        }}
      />
    </div>
  );
}
