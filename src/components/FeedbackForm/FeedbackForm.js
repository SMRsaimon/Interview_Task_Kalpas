import React from 'react';
import { useForm } from 'react-hook-form';
import '../../style/global.scss';

const FeedbackForm = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="feedbackForm">
      <h3>Thank you so much for taking the time!</h3>
      <span>Please provide the below details</span>
      <div className="formDiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label for="exampleInputName1">First Name</label>
            <input
              placeholder="John"
              type="email"
              name="firstName"
              className="form-control"
              id="exampleInputName1"
              ref={register({ required: true })}
            />
            {errors.firstName && (
              <span style={{ color: 'red' }}>Required field</span>
            )}
          </div>
          <div className="form-group">
            <label for="exampleInputName2">Last Name</label>
            <input
              placeholder="Doe"
              type="text"
              name="lastName"
              className="form-control"
              ref={register({ required: true })}
              id="exampleInputName2"
            />
            {errors.lastName && (
              <span style={{ color: 'red' }}>Required field</span>
            )}
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Address</label>
            <textarea
              placeholder="Enter Your full postal address"
              class="form-control"
              id="exampleFormControlTextarea1"
              name="address"
              rows="4"
              ref={register({ required: true })}
            ></textarea>
            {errors.address && (
              <span style={{ color: 'red' }}>Required field</span>
            )}
          </div>
          <div className="form-group">
            <label for="exampleInputCountry1">Country</label>
            <input
              placeholder="india"
              type="text"
              name="country"
              className="form-control"
              id="exampleInputCountry1"
              ref={register({ required: true })}
            />
            {errors.country && (
              <span style={{ color: 'red' }}>Required field</span>
            )}
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Id</label>
            <input
              placeholder="example@mail.com"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
            />
            {errors.email && (
              <span style={{ color: 'red' }}>Required field</span>
            )}
          </div>
          <div className="form-group">
            <label for="exampleInputPhone1">Phone Number</label>
            <input
              placeholder="1234567"
              type="text"
              name="phone"
              className="form-control"
              id="exampleInputPhone1"
              ref={register({ required: true, pattern: /^[0-9]$/ })}
            />
            {errors.phone && (
              <span style={{ color: 'red' }}>Required field</span>
            )}
          </div>
          <button type="submit" className="btn btn-success">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
