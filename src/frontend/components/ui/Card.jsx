export default function Card({children,...props}){

    return(

        <div style={{border:"4px solid #5481acff",borderRadius:"7px",padding:"10px",boxShadow:"0 2px 5px rgba(12, 86, 32, 0.1)",backgroundColor:"#395c7d"}} {...props}>
            {children}
        </div>

    )

}