import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link,  } from "react-router-dom";

const Details = () => {
    const [college, setCollege] = useState();
    useEffect(() => {
        fetch('https://college-server-seven.vercel.app/college')
            .then(res => res.json())
            .then(data => { setCollege(data) })
    }, [])
//     const details = useLoaderData();
//     console.log(details);
    return (
        <div className="mt-32 bg-white text-black">
              <Helmet>
                <title>College | Details</title>
            </Helmet>
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 flex justify-center mb-20 items-center mt-8'>
                {college && college.length > 0 ? (
                    college.map(data => (
                        <>
                            <div className="flex justify-center m-3">
                                <div className="card shadow-xl text-black bg-lime-100">
                                    <figure className="px-10 pt-10">
                                        <img src={data.image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body font-semibold">
                                        <h2 className="card-title font-bold text-2xl">Name: {data.name}</h2>

                                        {/* rating */}
                                        <div className="flex ">
                                            <div> <span className="font-bold">Rating :</span> {data.rating}</div>
                                            <Rating className="text-red-800 ml-2" placeholderRating={data.rating}
                                                readonly
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={<FaStar />}
                                                fullSymbol={<FaStar />}>
                                            </Rating>
                                        </div>

                                        <p> <span className="font-bold">Admission Date:</span> {data.admission}</p>

                                        <p> <span className="font-bold">Form Fees:</span> ${data.price}</p>

                                        <p> <span className="font-bold">Must Carry:</span> {data.procedure}</p>

                                        <p> <span className="font-bold">Research Subject:</span> {data.topic}</p>

                                        <p><span className="font-bold">Research Works:</span> {data.research}</p>

                                        <p><span className="font-bold"> Sports:</span> {data.sports}</p>

                                        <div className="card-actions w-full justify-center mt-4">
                                            {/* <Link to={`/college/${_id}`}> */}
                                            <Link to={`/college`} className="w-2/3 text-center">
                                                <p className=" bg-red-800 text-white p-3 rounded-xl">
                                                    Go Back
                                                </p>
                                                {/* <button className="btn btn-primary bg-red-800 text-white"> Go BAck</button> */}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                ) : (
                    <p>No popular college.</p>
                )}
            </div>

        </div>
    );
};

export default Details;