export default function Card({children,...props}){

    return(

        <div style={{border:"4px solid #50074eff",borderRadius:"0px",padding:"10px",boxShadow:"0 2px 5px rgba(12, 86, 32, 0.1)",backgroundColor:"#ffffe0"}} {...props}>
            {children}
        </div>

    )

}