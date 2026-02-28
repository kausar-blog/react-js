import { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [SubmittedData, SetSubmitData] = useState({
    name: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(predata => ({
      ...predata,
      [name]: value,
    }));
  };

  const HandleSubmit = event => {
    event.preventDefault();
    SetSubmitData(formData);
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-10 ">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Login Form
            </h1>
            <form onSubmit={HandleSubmit}>
              <div>
                <label className="block text-sm text-gray-600">Name:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  value={formData.name}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email:</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  value={formData.email}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md cursor-pointer"
                type="submit"
              >
                Login
              </button>
              <div className="">
                <h2 className="text-center mt-5 font-semibold">
                  User information
                </h2>
                <p className="text-gray-300">
                  Name:{' '}
                  <span className="text-gray-800"> {SubmittedData.name}</span>
                </p>
                <p className="text-gray-300">
                  Email:{' '}
                  <span className="text-gray-800">{SubmittedData.email}</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyForm;

/* function MyForm() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
  });
  const [SubmittedData, SetSubmitData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((predata) => ({
      ...predata,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SetSubmitData(formdata);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-10 ">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Login Form
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="block text-xs text-gray-600">Name:</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                value={formdata.name}
              />
            </div>
            <div className="mt-2">
              <label className="block text-xs text-gray-600">Email:</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                value={formdata.email}
              />
            </div>
            <div className="mt-2">
              <label className="block text-xs text-gray-600">Password:</label>
              <input
                type="password"
                placeholder="Enter Your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md
               cursor-pointer"
              type="submit"
            >
              Login
            </button>
            <div className="">
              <h2 className="text-center mt-5 font-semibold">
                User Information
              </h2>
              <p className="text-gray-300">Name: {SubmittedData.name}</p>
              <p className="text-gray-300">Email: {SubmittedData.email}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
} 
export default MyForm;*/

/*
import { useState } from 'react';
import './Form.css';

function MyForm() {
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
  });
  const [SubmittedData, SetSubmitData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((predata) => ({
      ...predata,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SetSubmitData(formdata);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-10 ">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Login Form
          </h1>
          <form onSubmit={handleSubmit}>

            <div>
              <label className="block text-xs text-gray-600">Name:</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                value={formdata.name}
              />
            </div>


            <div className="mt-2">
              <label className="block text-xs text-gray-600">Email:</label>
              <input
                onChange={handleChange}
                name="email"
                placeholder="Enter Your Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
                value={formdata.email}
              />
            </div>

            <div className="mt-2">
              <label className="block text-xs text-gray-600">Password:</label>
              <input
                type="password"
                placeholder="Enter Your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>


            <button
              className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md cursor-pointer"
              type="submit"
            >
              Login
            </button>


            <div>
              <h2 className="text-center mt-5 font-semibold">
                User Information
              </h2>
              <p className="text-gray-600">Name: {SubmittedData.name}</p>
              <p className="text-gray-600">Email: {SubmittedData.email}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyForm;
 */
