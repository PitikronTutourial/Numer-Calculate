import './Numerpost.css';
function NumerPost(props){
    const{Numer,onBgClick}=props;
    return(
        <div className=" numer-post">
            <div className="numer-post-bg" onClick ={onBgClick}/>
            <div className="numer-post-content">
                <img src={Numer.thumbnailUrl}/>
            </div>
        </div>
    );
}
export default NumerPost;