<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function Form() {
  return (
    <div>
        <form>
            
        </form>

     
    </div>
  );
=======
import { useState } from 'react';
import '../css/Form.css'
function Form() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");
    const [subjects, setSubjects] = useState({
        english: false,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedValue, setSelectedValue] = useState('placeholder');
    const [about, setAbout] = useState("");



    function onReset() {
        setFirstname("");
        setLastname("");
        setEmail("");
        setContact("");
        setUrl("");
        setAbout("");
        setGender("");
        setSelectedValue('placeholder');


    }

    function onSubmit(e) {
        e.preventDefault();

        console.log(
            `First Name : ${firstname}`,
            `Last Name: ${lastname}`,
            `URL: ${url}`,
            `Email: ${email}`,
            `Contact: ${contact}`,
            `Gender: ${gender}`,
            `Selected Value: ${selectedValue}`,
            `About: ${about}`

        )

    }

    function handleSelectChange(event) {
        setSelectedValue(event.target.value);
    };


    return (
        <div className="App">
            <h4 className='heading'>Form in React</h4>
            <div className='details'>
                <form action='#' method="get">
                    <label for="firstname" >
                        First Name*
                    </label><br />
                    <input
                        type="text"
                        id="firstname"
                        name='firstname'
                        value={firstname}
                        className='values'
                        placeholder="Enter First Name"
                        required
                        onChange={(e) => {
                            setFirstname(e.target.value);
                        }}
                    /><br />

                    <label for="lastname">
                        Last Name*
                    </label><br />
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        className='values'
                        placeholder="Enter Last Name"
                        required
                        onChange={(e) => {
                            setLastname(e.target.value);
                        }}
                    /><br />

                    <label for="email">
                        Enter Email*
                    </label><br />
                    <input
                        type="text"
                        id="email"
                        value={email}
                        className='values'
                        placeholder="Enter email"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    /><br />

                    <label for="contact">Contact*</label><br />
                    <input
                        type="text"
                        id="contact"
                        value={contact}
                        className='values'
                        placeholder="Enter mobile number"
                        required
                        onChange={(e) => {
                            setContact(e.target.value);
                        }}
                    /><br />

                    <label >Gender*</label><br />
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        required
                        onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                    <label for="male"
                        className='genders'>
                        Male
                    </label>
                    <input type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                    <label for="female"
                        className='genders'>
                        Female
                    </label>
                    <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                    <label for="other"
                        className='genders'>
                        Other
                    </label><br />

                    <label >
                        Your Best Subject*
                    </label><br />
                    <input
                        type="checkbox"
                        id="english"
                        value="english"
                        name="subject1"
                    />
                    <label for="english"
                        className='subjects'>
                        English
                    </label>
                    <input
                        type="checkbox"
                        id="maths"
                        value="maths"
                        name="subject2"
                        className='subjects' />
                    <label for="maths"
                        className='subjects' >
                        Maths
                    </label>
                    <input
                        type="checkbox"
                        id="physics"
                        value="physics"
                        name="subject3"
                        className='subjects' />
                    <label for="physics"
                        className='subjects'>
                        Physics
                    </label><br />

                    <label>
                        Upload Resume*
                    </label><br />
                    <input type="file"
                        required>
                    </input><br />

                    <label for="url">
                        Enter URL*
                    </label><br />
                    <input
                        type="text"
                        id="url"
                        value={url}
                        className='values'
                        placeholder="Enter url"
                        onChange={(e)=>{
                            setUrl(e.target.value);
                        }}
                        required /><br />

                    <label for="exp">
                        Select your choice
                    </label><br />
                    <select id="exp"
                        name="experience"
                        className='dropdown'
                        value={selectedValue}
                        onChange={handleSelectChange}
                    >
                        <option
                            value="placeholder"
                            disabled
                        >
                            Select your value
                        </option>

                        <option
                            value="1-2 years"
                            className='values'>
                            1-2 years
                        </option>
                        <option
                            value="2-3 years"
                            className='values'>
                            2-3 years
                        </option>
                        <option
                            value="3+ years"
                            className='values'>
                            3+ years
                        </option>
                    </select><br />

                    <label for='aboutyou'>
                        About
                    </label><br />
                    <textarea
                        placeholder="About yourself"
                        id='aboutyou'
                        value={about}
                        onChange={(e)=>{
                            setAbout(e.target.value);
                        }}
                        className='values'></textarea><br />

                    <div className='buttons'>
                        <button
                            className='button1'
                            type='reset'
                            onClick={onReset}>
                            Reset
                        </button>
                        <button
                            type='submit'
                            onClick={onSubmit}
                            >
                            Submit
                        </button>
                    </div>


                </form>

            </div>


        </div>
    );
>>>>>>> 8333a0e99ed8d7cd251d5dff0c8de290d96c4bdb
}

export default Form;
