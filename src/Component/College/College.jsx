import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const College = () => {
    const[college, setCollege] = useState();
    useEffect(()=>{
        fetch('/college.json')
        .then(res=>res.json())
        .then(data=>{setCollege(data)})
    },[])

    return (
        <div>
             <Helmet>
                <title>College | All College</title>
            </Helmet>
            <h1 className="text-center mt-32 text-4xl font-bold">All Colleges</h1>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mb-20 items-center mt-8'>
                {college && college.length > 0 ? (
                    college.map(data => (
                        <>
                            <div className="flex justify-center ">
                                <div className="card w-96 shadow-xl text-black bg-lime-100">
                                    <figure className="px-10 pt-10">
                                        <img src={data.image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body font-semibold">
                                        <h2 className="card-title font-bold text-2xl">Name: {data.name}</h2>
                                        <p>Rating: {data.rating}</p>
                                        <p>Admission Date: {data.admission}</p>
                                        <p>Research: {data.topic}</p>
                                        <div className="card-actions">
                                            <button >Details</button>
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

export default College;