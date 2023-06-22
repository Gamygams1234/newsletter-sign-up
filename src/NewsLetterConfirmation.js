import React from "react";
import clsx from "clsx";

import bulletCheck from "./assets/images/icon-list.svg";

export default function NewsLetterConfirmation(props) {
  const { handleSubmit, handleChange, email, failedSubmission } = props;
  const formClasses = clsx("form", { warning: failedSubmission });
  return (
    <div className="inner-container newsletter-confirmation">
      <div className="left-side">
        <div className="description">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers recieving monthy updates on:</p>

          <div className="bullets">
            <div className="bullet">
              <img src={bulletCheck} alt="" /> <p>Product discovery and building what matters</p>
            </div>
            <div className="bullet">
              <img src={bulletCheck} alt="" /> <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="bullet">
              <img src={bulletCheck} alt="" /> <p>And much more!</p>
            </div>
          </div>
        </div>
        <div className={formClasses}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="labels">
              <label className="fw-700" for="email">
                Email address
              </label>
              <label className="warning-label fw-700">Valid email required</label>
            </div>
            <input className="email-input" type="text" placeholder="email@company.com" id="email" value={email} onChange={(e) => handleChange(e)} />
            <input type="submit" className="fw-700" value="Subscribe to monthly newsletter" />
          </form>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}
