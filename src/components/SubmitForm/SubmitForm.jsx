import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SubmitForm.css";
import { Link } from "react-router-dom";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

function RegistrationForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const navigate = useNavigate();
  //   const token = window.localStorage.getItem("token");
  const [coderData, setCoderData] = useState({
    image: "",
    current_role: "",
    tech_industry: Boolean,
    programs_complete: "",
    programs_interested: "",
    location: "",
    mentoring: "",
    partner_hire: Boolean,
    post_study: Boolean,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCoderData((prevCoderData) => ({
      ...prevCoderData,
      [id]: value,
    }));
  };

  const postData = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_API_URL}coders/`, {
      method: "post",
      headers: {
        Authorization: `Token ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(coderData),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
    setSubmitting(false);
    }, 3000)

    postData()
      .then((response) => {
        console.log('Congrats! New user created.')
        navigate("/success");
    });
  };

  return (
    <form className="submit" onChange={setFormData} onSubmit={handleSubmit}>
      <h2 class="form_h2">Your Cupcake Recipe</h2>
        {/* {submitting && 
        <div>
        <h2 class="form_h2">You are submitting the following:</h2>
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value}</li>
            ))}
          </ul>
        </div>
        } */}
      <div class="label">
        <label htmlFor="image">
          Let's start with a lovely photo of yourself.
        </label>
        <input
          onChange={handleChange}
          type="url"
          id="image"
          placeholder="Please enter URL for your headshot image."
          value={coderData.image}
        />
      </div>
      <div class="label">
        <label htmlFor="current_role">What's your current role?</label>
        <input
          onChange={handleChange}
          type="text"
          id="current_role"
          placeholder="Cupcake Coder and..."
          value={coderData.current_role}
        />
      </div>
      <div class="label">
        <label htmlFor="programs_complete">
          Which of our She Codes programs have you completed?
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="programs_complete"
          placeholder="Eg. Plus Brisbane Cohort"
          value={coderData.programs_complete}
        />
      </div>
      <div class="label">
        <label htmlFor="programs_interested">
          Any She Codes programs you are interested in?
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="programs_interested"
          placeholder="Eg. Plus Brisbane Cohort"
          value={coderData.programs_interested}
        />
      </div>
      <div class="label">
        <label htmlFor="location">Where are you located?</label>
        <input
          onChange={handleChange}
          type="text"
          id="location"
          placeholder="Eg. Brisbane, Perth, Sydney?"
          value={coderData.location}
        />
      </div>
      <div class="label">
        <label htmlFor="mentoring">
          Are you a current mentor? Or interested in mentoring?
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="mentoring"
          placeholder="Current mentor. OR I'm interested!"
          value={coderData.mentoring}
        />
      </div>
      <div class="label">
        <label htmlFor="tech_industry">
          Working in the tech industry? true or false?
        </label>
        <input
          onChange={handleChange}
          ype="text"
          id="tech_industry"
          placeholder="Please write true or false only"
          value={coderData.tech_industry}
        />
      </div>
      <div class="label">
        <label htmlFor="partner_hire">
          Have you secured a position with a program partner? If yes, who did
          you join?
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="partner_hire"
          placeholder="Please write true or false only"
          value={coderData.partner_hire}
        />
      </div>
      <div class="label">
        <label htmlFor="post_study">
          Endeavoured with further study in the tech field? True or False?
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="post_study"
          placeholder="Please write true or false only"
          value={coderData.post_study}
        />
      </div>
      <div className="button-centre">
        <button onClick={handleSubmit} type="submit" disabled={submitting}>
          Bake my Cupcake!
        </button>
      </div>
      {submitting &&
        <div style={{ color: `white`, textAlign: `left`, marginBottom: `1em`, marginTop: '1em' }}>Baking your cupcake in our coders oven...</div>
      }
      {/* <div>
        <Link to="/success">Success test</Link>
      </div> */}
    </form>
  );
}

export default RegistrationForm;
