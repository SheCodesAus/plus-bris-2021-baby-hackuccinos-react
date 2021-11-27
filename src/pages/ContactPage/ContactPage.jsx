import React, { useEffect, useHistory, useState }  from "react";
import { Link } from "react-router-dom";
import TitleForms from '../../components/TitleForms/TitleForms';
import ContactForm from '../../components/ContactForm/ContactForm';
import facebook_logo from "../../components/static file/facebook_logo.png";
import twitter_logo from "../../components/static file/twitter_logo.png";
import instagram_logo from "../../components/static file/instagram_logo.png";
import linkedin_logo from "../../components/static file/linkedin_logo.png";

function ContactPage()  {
    return (
    <div class="contactpage">        
        <div>
            <a href="https://www.facebook.com/shecodesaustralia"><img class="logomedia" src={facebook_logo} alt="facebook_logo" /></a>
            <a href="https://twitter.com/she_codes"><img class="logomedia" src={twitter_logo} alt="twitter_logo" /></a>
            <a href="https://www.instagram.com/shecodesaus"><img class="logomedia" src={instagram_logo} alt="instagram_logo" /></a>
            <a href="https://www.linkedin.com/company/shecodesaustralia"><img class="logomedia" src={linkedin_logo} alt="linkedin_logo" /></a>
            
        </div>
        
        <h1>Contact Us</h1>
        <p>Do you want to order our secret recipe? Please contact us and we would love to share it</p>
        
        <ContactForm />
        

    </div>
   )

}

export default ContactPage;














// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../RegistrationForm/RegistrationForm.css";

// function RegistrationForm () {

//     const [coderData, setCoderData] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         let { id, value } = e.target;
//         setCoderData((prevCoderData) => ({
//             ...prevCoderData,
//             [id]: value, 
//         }));

//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault()


//         const response = await fetch(
//             `${process.env.REACT_APP_API_URL}coders/`, 
//             {
//             method: "post",
//             headers: {
//                 "Authorization": `Token ${localStorage.getItem('token')}`,
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify(coderData),
//             }
//         );
//     }

//     return (
//         <form>
//             <h2 class="form_h2">Cupcake Recipe</h2>
//             <div class="label">
//             <label htmlFor="student_id">Student ID:</label>
//             <input 
//                 onChange={handleChange}
//                 type="text"
//                 id="student_id"
//                 placeholder="Your secret Cupcake Coder Code."
//                 value={coderData.student_id}
//             /></div>
//             <div class="label">
//                 <p class="form-p">Click on the "Choose File" button to upload your amazing headshot:</p>
//                 {/* <form action="/action_page.php"> */}
//                 <input type="file" id="myFile" name="filename"/>
//                 {/* <input type="submit"/> */}
//                 {/* </form> */}
//             </div>
//             <div class="label">
//                 <label htmlFor="image">Enter URL for your headshot image:</label>
//                 <input
//                 onChange={handleChange}
//                 type="url"
//                 id="image"
//                 placeholder="Enter URL for image"
//                 value={coderData.image}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="current_role">What's your current role?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="current_role"
//                 placeholder="Cupcake Coder and..."
//                 value={coderData.current_role}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="tech_industry">You're in the tech industry True or False?</label>
//                 <input
//                 onChange={handleChange}
//                 type="boolean"
//                 id="tech_industry"
//                 placeholder="Please write True or False"
//                 value={coderData.tech_industry}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="programs_complete">Which of our She Codes programs have you completed?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="programs_complete"
//                 placeholder="Eg. Plus Brisbane Cohort"
//                 value={coderData.programs_complete}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="programs_interested">Any She Codes programs you are interested in?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="programs_interested"
//                 placeholder="Eg. Plus Brisbane Cohort"
//                 value={coderData.programs_interested}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="location">Where are you located?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="location"
//                 placeholder="Eg. Brisbane, Perth, Sydney?"
//                 value={coderData.location}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="mentoring">Are you a current mentor? Or interested in mentoring?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="mentoring"
//                 placeholder="Current mentor. OR I'm interested!"
//                 value={coderData.mentoring}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="partner_hire">Have you secured a position with a program partner? If yes, who did you join?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="partner_hire"
//                 placeholder="Landed a role with BHP!"
//                 value={coderData.partner_hire}
//                 />
//             </div>
//             <div class="label">
//                 <label htmlFor="post_study">Endeavoured with further study in the tech field? True or False?</label>
//                 <input
//                 onChange={handleChange}
//                 type="text"
//                 id="post_study"
//                 placeholder="Please write True or False"
//                 value={coderData.post_study}
//                 />
//             </div>
//             <div className="button-centre">
//             <button onClick={handleSubmit} type="submit">
//             Bake my Cupcake!
//             </button>
//             </div>
//         </form>
// );
// }

// export default RegistrationForm


// // function ContactPage() {
// //     return (
// //     <div>
// //         <h1>This is contact page</h1>
// //         <form>
// //             <label>Name:</label>
// //             <input />
// //             {/* <label>Color*:</label>
// //                 <select>
// //                 <option value="">Select color</option>
// //                 {COLORS.map(c => <option key={c}>{c}</option>)}
// //                 </select> */}
// //             <label>Email address:</label>
// //             <input />
// //             <label>Phone number:</label>
// //             <textarea />
// //             <button type="submit">Submit</button>
// //         </form>

// //     </div>
// //     )
// // }

// // export default ContactPage;
