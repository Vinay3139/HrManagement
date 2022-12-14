import "./Picture.css"
function Picture(props){
    return (
        <div className="Picture">
        <img src={props.src}alt="" className="pic"></img>
        </div>
    )
        
    
        
    
}
export default Picture;