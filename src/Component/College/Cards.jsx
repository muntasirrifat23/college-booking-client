// import { Link } from "react-router-dom";

// const Cards = ({data}) => {
//     const {_id, image, name, rating, admission, research, price, event}= data;
//     return (
//         <div>
//              <div>
//             {/* <Row >
//                 <Col> */}
//                     <div className="card card-compact w-96 bg-base-100 shadow-xl">
//                         <figure><img src={image} alt="Shoes" /></figure>
//                         <div className="card-body">
//                             <h2 className="card-title text-2xl font-bold text-green-800">{name}</h2>
//                             <div className='flex'>
//                                 <p className='text-green-800 font-semibold text-lg'>Price: ${price}</p>
//                                 <h6 className='align-items-center text-red-900'>{rating}
//                                     {/* <Rating placeholderRating={rating}
//                                         readonly
//                                         emptySymbol={<FaRegStar />}
//                                         placeholderSymbol={<FaStar />}
//                                         fullSymbol={<FaStar />}>

//                                     </Rating> */}
//                                 </h6>
//                             </div>


//                             <div className="card-actions">
//                                 <Link to={`/data/${_id}`}>
//                                     <button className="btn btn-primary bg-green-800">View Details</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 {/* </Col>
//             </Row> */}

//         </div>
//         </div>
//     );
// };

// export default Cards;