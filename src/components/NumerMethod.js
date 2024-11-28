import './NumerMethod.css'
import { Link } from "react-router-dom";
function NumerMethod(props){
    const{Numer,Click} = props;
    return(
        <div className="Numer-method">
            <Link to ={Numer.link}>
            <img src={Numer.thumbnailUrl} onClick ={() =>{Click(Numer)}}/>
            <h4>{Numer.title}</h4>
            </Link>
        </div>
        
    );
    
            
}
export default NumerMethod;