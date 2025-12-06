import { imgSrcUrl } from "../utils/constants";
const ResCard=({resData})=>{
    return(
        <div className="res-card">
            <div className="img-container">
                <img
                    className="img"
                    src={
                        imgSrcUrl +
                        resData.cloudinaryImageId
                    }
                    alt={resData.cloudinaryImageId}/>
            </div>
            <h3>{resData.name}</h3>
        </div>
    );
}

export default ResCard;