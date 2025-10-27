export default function Modal({Children,isOpen,onClose,...props}){
    if(!isOpen) return null;
    return(<div style={{background:"rgba(0,0,0,0.5)"}}>
                <div style={{background:"#fff",padding:"20px",margin:"100px auto",width:"300px",position:"relative"}}>
                    <button onClick={onClose}>close</button>{Children}
        </div>
    </div>);


}