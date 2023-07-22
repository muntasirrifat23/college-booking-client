import { useRef } from "react";
import { Helmet } from "react-helmet";

const Admission = () => {
    const formReset = useRef(null);

    const formLog = (event) => {
        event.preventDefault();
        const form = event.target;
        const college = form.college.value;
        const name = form.name.value;
        const subject = form.subject.value;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const image = form.image.value;
        const submit = { college, name, subject, date, email, phone, address, image }

        console.log(submit)

    }

    return (
        <div className="mt-32">
            <Helmet>
                <title>College | Admission</title>
            </Helmet>
            <h1 className="text-center font-bold text-4xl mb-10 text-rose-700">
                Hurry Up! Fill Admission Form
            </h1>

            {/* form */}
            <form onSubmit={formLog} ref={formReset}>
                <div className="card-body bg-lime-100 rounded-xl font-semibold flex justify-evenly rounded-2xl">

                    <div className="">
                        {/* College Name */}
                        <div className="form-control flex">
                            <div className="label w-full text-xl">
                                College Name:
                            </div>
                            <input type="text" name="college" placeholder="Enter College Name" className="input input-bordered" style={{ width: '100%' }} required />
                        </div>

                        {/* Your Name  */}
                        <div className="form-control flex mt-4">
                            <div className="label w-full text-xl">
                                Your Name:
                            </div>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" style={{ width: '100%' }} required />
                        </div>
                    </div>

                    {/* Part 101 */}
                    <div className="lg:flex justify-between">
                        {/* Subject */}
                        <div className="form-control flex">
                            <div className="label w-full text-xl">
                                Subject:
                            </div>
                            <input type="text" name="subject" placeholder="Subject" className="input input-bordered" style={{ width: '100%' }} required />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-xl">Your Email:</span>
                            </label>
                            <input type="text" name="email" placeholder=". . . . . . . .com" className="input input-bordered" style={{ width: '100%' }} required />
                        </div>

                        {/* Phone */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Phone Number:</span>
                            </label>
                            <input type="tel" name="phone" placeholder="+880 . . . . . . . . . ." className="input input-bordered" maxLength="15" style={{ width: '100%' }} required />
                        </div>
                    </div>


                    {/* Part 02 */}
                    <div className="lg:flex justify-between mt-4">
                        {/* Address */}
                        <div className="form-control flex">
                            <div className="label w-full text-xl">
                                Address:
                            </div>
                            <input type="text" name="address" placeholder="Dhaka, Bangladesh" className="input input-bordered" required style={{ width: '100%' }} />
                        </div>

                        {/* Date of birth */}
                        <div className="form-control flex lg:ml-12">
                            <div className="label w-full text-xl">
                                Date of Birth:
                            </div>
                            <input type="date" name="date" placeholder="Date" className="input input-bordered" style={{ width: '100%' }} required />
                        </div>

                        {/* image */}
                        <div className="form-control">
                            <div className="label w-full text-xl">
                                Image:
                            </div>
                            <input type="file" name="image" placeholder="Dhaka, Bangladesh" className="input input-bordered" pattern="([^\s]+(\.(?i)(jpg|png|gif|bmp))$)" required style={{ width: '100%' }} />
                        </div>
                    </div>


                    <div className="form-control mt-6 text-center">
                    <button className="btn btn-error text-white font-semibold text-xl lg:w-1/4 sm:w-2/3  mx-auto">Success</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Admission;
