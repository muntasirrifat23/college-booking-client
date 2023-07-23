import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
             <div className="flex justify-center mb-8 mt-8">
            {details.map(({ _id, name, image, price, rating, des }) => (
                <div key={_id}
                    className='flex justify-center'>
                    <div className="card card-compact w-3/4 bg-base-100 shadow-xl flex justify-center">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-green-800">{name}</h2>
                            <div className='flex'>
                                <p className='text-green-800 font-semibold text-lg'>Price: ${price}</p>
                                <h6 className='align-items-center text-red-900'>{rating}
                                    
                                    {/* <Rating placeholderRating={rating}
                                        readonly
                                        emptySymbol={<FaRegStar />}
                                        placeholderSymbol={<FaStar />}
                                        fullSymbol={<FaStar />}>
                                    </Rating> */}
                                </h6>
                            </div>
                            <h2 className="font-semibold">{des}</h2>


                            <div className="card-actions">
                                {/* <Link to='/mytoy'> */}
                                    <button className="btn btn-primary bg-green-800">Buy Now</button>
                                {/* </Link> */}

                            </div>
                            <Link to='/college'>
                            <button className="btn btn-primary bg-green-400 text-black w-full"><span className="ml-2"> Go Back</span></button>
                            {/* <button className="btn btn-primary bg-green-400 text-black w-full"><FaArrowLeft/><span className="ml-2"> Go Back</span></button> */}
                                </Link>
                        </div>
                    </div>
                </div>
                  ))}



                  </div>
        </div>
    );
};

export default Details;