import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests

function Login() {
  const [name, setname] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://localhost:1234/student/add', {
        name,
        address,
      });

      if (response.status === 200) {
        // Handle successful login (e.g., redirect, display success message)
        console.log('Login successful!');
        // You can redirect to another page here:
        // window.location.href = '/dashboard'; // Or any other desired route
      } else {
        console.error('Login failed:', response.data);
        // Handle login errors (e.g., display error message)
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle network or other errors (e.g., display error message)
    }
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Student Details</h2>
                    <p className="text-white-50 mb-5">Please enter Student Details!</p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={name} // Use state variable for value
                        onChange={(e) => setname(e.target.value)} // Update state on change
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Student Name
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeAddress"
                        className="form-control form-control-lg"
                        value={address} // Use state variable for value
                        onChange={(e) => setAddress(e.target.value)} // Update state on change
                      />
                      <label className="form-label" htmlFor="typeAddress">
                        Address
                      </label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{' '}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
