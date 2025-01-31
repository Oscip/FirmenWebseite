import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        dob: "",
        address: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const getDynamicStyle = (value) => ({
        backgroundColor: value ? "rgba(152, 251, 152, 0.25)" : "",
    });

    const handleSubmit = () => {
        alert("Your message has been successfully sent!");
    };

    return (
        <div className="container mt-5 mb-5">
            <form className="contact-form p-4 bg-light rounded shadow-sm">
                <h1 className="text-center mb-4 text-dark-green">Contact Us</h1>
                <fieldset>
                    <legend className="mb-3 text-dark-green">Personal Information</legend>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label text-dark-green">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.firstName)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label text-dark-green">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.lastName)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label text-dark-green">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.email)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phoneNumber" className="form-label text-dark-green">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.phoneNumber)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="gender" className="form-label text-dark-green">Gender:</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.gender)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="dob" className="form-label text-dark-green">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                className="form-control"
                                style={getDynamicStyle(formData.dob)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label text-dark-green">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="form-control"
                            style={getDynamicStyle(formData.address)}
                            required
                            rows="4"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label text-dark-green">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control"
                            style={getDynamicStyle(formData.message)}
                            required
                            rows="6"
                        />
                    </div>
                </fieldset>

                <div className="text-center">
                    <button type="button" className="btn btn-green" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
