import notFound from '../../../public/404.jpeg'
import './Not.css'
const NotFound = () => {
    return (
<div className="image-container">
            <img src={notFound} className="fade-in" style={{width:"100%"}}></img>
        </div>
    );
};

export default NotFound;