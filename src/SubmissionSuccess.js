import React from "react";
import check from "./assets/images/icon-success.svg";

export default function SubmissionSuccess(props) {
  const { email, failSubmission } = props;
  return (
    <div className="submisson-container">
    <div className="top">

    
      <div className="image">
        <img src={check} alt="" />
      </div>
      <h1 className="fw-700">Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <span className="fw-700">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      </div>

 

      <button onClick={failSubmission}>Dismiss message</button>
    </div>
  );
}
