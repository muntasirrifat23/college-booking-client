import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css'

import college1 from '../../../public/College/c1.jpeg'
import college2 from '../../../public/College/c2.jpeg'
import college3 from '../../../public/College/c3.jpeg'
import college4 from '../../../public/College/c4.jpeg'
import college5 from '../../../public/College/c5.jpeg'
import college6 from '../../../public/College/c6.jpeg'
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Home = () => {
    const[popular, setPopular] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/college')
        .then(res=>res.json())
        .then(data=>{
            const populars = data.filter(item=>
                item.category==='popular');
                setPopular(populars);

        })
    },[])
    return (
        <div className="mt-32 text-black bg-white">
            <Helmet>
                <title>College | Home</title>
            </Helmet>

            <div className="text-center">
                <Carousel className="bg-white">
                    <div className="carousel-item">
                        <img src={college1} />
                        <div >
                            <p className="carousel-text font-bold text-2xl text-center">
                                <p>Milestone College</p>
                                <p>Uttara, Dhaka</p>
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={college2} />
                        <div >
                            <p className="carousel-text font-bold text-2xl text-center">
                                <p>Rajuk Uttara Model College</p>
                                <p>Uttara, Dhaka</p>
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={college3} />
                        <div >
                            <p className="carousel-text font-bold text-2xl text-center">
                                <p>Uttara High School & College</p>
                                <p>Uttara, Dhaka</p>
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={college4} />
                        <div >
                            <p className="carousel-text font-bold text-2xl text-center">
                                <p>Nawab Habibullah College</p>
                                <p>Uttara, Dhaka</p>
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={college5} />
                        <div >
                            <p className="carousel-text font-bold text-2xl text-center">
                                <p>Notre Dame College</p>
                                <p>Laxmibazar, Dhaka</p>
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src={college6} />
                        <div >
                            <p className="carousel-text font-bold text-2xl text-center">
                                <p>Shaheed Ramij Udiin College</p>
                                <p> Dhaka</p>
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/*........ My College Booking .................. */}
            <div className="text-center mt-20">
                <h1 className="font-bold text-4xl">BD College Booking</h1>
                <h3 className="font-semibold mt-5 px-5 lg:mx-40">Welcome to our <span className="font-bold">BD College Booking</span> Hub! We are here to make your college dreams a reality. Whether you are interested in Science, Arts, or Business Studies, we have got you covered. We have partnerships with numerous colleges across various disciplines, offering you a wide array of options to choose from. Many of our partner colleges boast modern facilities and cutting-edge technology, ensuring an enriching learning environment. We understand the importance of financial considerations. Our platform also features colleges with affordable tuition fees.</h3>
            </div>

            {/* Popular Home */}
            <div className="text-center mt-12">
            <h1 className="font-bold text-4xl">Popular College</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center mb-20 items-center mt-8'>
                {popular && popular.length > 0 ? (
                    popular.map(data => (
                        <>
                            <div className="flex justify-center  ">
                                <div className="card w-96 shadow-xl text-black bg-lime-100">
                                    <figure className="px-10 pt-10">
                                        <img src={data.image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body font-semibold">
                                        <h2 className="card-title font-bold text-2xl">Name: {data.name}</h2>
                                        <div className="flex ">
                                            <div><span className="font-bold">Rating :</span> {data.rating}</div>
                                            <Rating className="text-red-800 ml-2" placeholderRating={data.rating}
                                                readonly
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={<FaStar />}
                                                fullSymbol={<FaStar />}>
                                            </Rating>
                                        </div>
                                        <p>Admission Date: {data.admission}</p>
                                        <div className="card-actions">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                ) : (
                    <p>No popular college found.</p>
                )}
            </div>

            </div>


            {/* Bottom Home */}
            <div className="mt-12 rounded-xl">
                <div className="hero min-h-screen imgCng" style={{ height: '115px' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white">Book Now</h1>
                            <h3 className="text-white font-semibold">BD College Booking is Helping you to find top and best colleges and autonomous Colleges in Bangladesh</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;