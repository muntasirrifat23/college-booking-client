import React from 'react';

const no = () => {
    return (
        <div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mb-20 items-center mt-8'>
                {college && college.length > 0 ? (
                    college.map(data => (
                        <>
                            <div className="flex justify-center">
                                <div className="card w-96 shadow-xl text-black bg-lime-100">
                                    <figure className="px-10 pt-10">
                                        <img src={image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body font-semibold">
                                        <h2 className="card-title font-bold text-2xl">Name: {name}</h2>
                                        <p>Rating: {data.rating}</p>
                                        <p>Admission Date: {admission}</p>
                                        <p>Research: {topic}</p>

                                        {/* Button */}
                                        <div className="card-actions">
                                        <Link to={`/college/${_id}`}>
                                            <button className="btn btn-primary bg-green-800 text-white">
                                                View Details
                                            </button>
                                            
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

export default no;