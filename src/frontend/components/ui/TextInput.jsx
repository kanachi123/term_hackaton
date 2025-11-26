import React from 'react';

export default function TextInput({
  label,
  value = "",
  onChange,
  type = "text",
  ...props
}) {
  return (
    <div style={{ marginBottom: "15px", borderRadius: "7px" }}>
      {label && <label>{label}</label>}
      <input 
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #4f6cc3ff'
        }}
      />
    </div>
  );
}
