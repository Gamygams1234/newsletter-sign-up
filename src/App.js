import "./App.scss";
import { useState } from "react";

import NewsLetterConfirmation from "./NewsLetterConfirmation";
import SubmissionSuccess from "./SubmissionSuccess";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [failedSubmission, setFailedSubmisson] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setSubmitted(true);
      setFailedSubmisson(false);
    } else {
      setFailedSubmisson(true);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setFailedSubmisson(false);
  };
  const failSubmission = () => {
    setSubmitted(false);
  };

  return (
    <div className="App outside-container">
      {!submitted && <NewsLetterConfirmation handleChange={handleChange} failedSubmission={failedSubmission} email={email} handleSubmit={handleSubmit} />}
      {submitted && <SubmissionSuccess failSubmission={failSubmission} email={email} />}
    </div>
  );
}

export default App;
