export default function TextInput({label,value,onChange,type = "text" ,...props}){

    return (
        <div style={{marginBottom:"10px"}}>
            <label>{label}</label>
            <input 
                type = {type}
                value = {value}
                onChange = {(e) => onChange(e.target.value  )} 
            >
            </input>
        </div>
    );

}