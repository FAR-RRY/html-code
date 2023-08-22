import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({

  name: Yup.string().required('Name is Required'),
  number: Yup.string().required('Number is Required'),
   
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

const Roll = () => {

  

  // Initializing formik
  const signupForm = useFormik({
    initialValues: {
      name : "",
      number : "",
      number : "",
      email : "",
      password : ""

    },
    onSubmit : ( values ) => { 
      console.log(values);
      // write code to submit form to server
  },
  validationSchema : SignupSchema
 });
 

return (
  <div
  style={{
    backgroundColor: 'gray',
    backgroundSize: 'auto',
    height : '100vh'
  }}>

  
  <div>
   <div className="w-25" class="mx-auto" style={{width : '350px', marginTop: '10%', marginBottom: '10%'}}>
      <div className="card" style={{textAlign: 'center', backgroundColor: 'pink', opacity: '0.8'}}  >
        <div className="card-body">
          <h3 className="text-center">Signup!</h3>
          <hr />

          <form onSubmit={signupForm.handleSubmit}>
            <label htmlFor="">Name</label>
            <span style={{color: 'red', fontsize: '0.7em', marginLeft: 10}}>{signupForm.errors.name}</span>
            <input type="text" className="form-control mb-3" name='name' onChange={signupForm.handleChange} value={signupForm.values.name} />

            <label htmlFor="">Phone Number</label>
            <span style={{color: 'red', fontsize: '0.7em', marginLeft: 10}}>{signupForm.errors.number}</span>
            <input type="tel" className="form-control mb-3" name='number' onChange={signupForm.handleChange} value={signupForm.values.number} />

            <label htmlFor="">Email Address</label>
            <span style={{color: 'red', fontsize: '0.7em', marginLeft: 10}}>{signupForm.errors.email}</span>
            <input type="email" className="form-control mb-3" name='email' onChange={signupForm.handleChange} value={signupForm.values.email} />

            <label htmlFor="">Password</label>
            <span style={{color: 'red', fontsize: '0.7em', marginLeft: 10}}>{signupForm.errors.password}</span>
            <input type="password" className="form-control mb-3" name='password' onChange={signupForm.handleChange} value={signupForm.values.password} />

            <input id="checkbox" type="checkbox" />
            <span style={{ marginLeft: 10}}></span>
            <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>

            <button className="btn btn-primary w-100 mt-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
 
  

</div>  );
};


export default Roll;