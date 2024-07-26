import '../css/Form.css'
function Form() {
    return (
        <div className="App">
            <h4 className='heading'>Form in React</h4>
            <div className='details'>
                <form action='#' method="get" >
                    <label for="firstname" >
                        First Name*
                    </label><br />
                    <input
                        type="text"
                        id="firstname"
                        className='values'
                        placeholder="Enter First Name"
                        required /><br />

                    <label for="firstname">
                        Last Name*
                    </label><br />
                    <input
                        type="text"
                        id="lastname"
                        className='values'
                        placeholder="Enter Last Name"
                        required /><br />

                    <label for="email">
                        Enter Email*
                    </label><br />
                    <input
                        type="text"
                        id="email"
                        className='values'
                        placeholder="Enter email"
                        required /><br />

                    <label for="contact">Contact*</label><br />
                    <input
                        type="text"
                        id="contact"
                        className='values'
                        placeholder="Enter mobile number"
                        required /><br />

                    <label >Gender*</label><br />
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        required />
                    <label for="male" >
                        Male
                    </label>
                    <input type="radio"
                        id="female"
                        name="gender" />
                    <label for="female">
                        Female
                    </label>
                    <input
                        type="radio"
                        id="other"
                        name="gender" />
                    <label for="other">
                        Other
                    </label><br />

                    <label >
                        Your Best Subject*
                    </label><br />
                    <input
                        type="checkbox"
                        id="english" n
                        ame="subject1" />
                    <label for="english" >
                        English
                    </label>
                    <input
                        type="checkbox"
                        id="maths"
                        name="subject2" />
                    <label for="maths" >
                        Maths
                    </label>
                    <input
                        type="checkbox"
                        id="physics"
                        name="subject3" />
                    <label for="physics" >
                        Physics
                    </label><br />

                    <label>
                        Upload Resume*
                    </label><br />
                    <input type="file">
                    </input><br />

                    <label for="url">
                        Enter URL
                    </label><br />
                    <input
                        type="text"
                        id="url"
                        className='values'
                        placeholder="Enter url" /><br />

                    <label for="exp">
                        Select your choice
                    </label><br />
                    <select id="exp" name="cars"
                    >
                        <option value="1-2 years" className='values'>
                            1-2 years
                        </option>
                        <option value="2-3 years" className='values'>
                            2-3 years
                        </option>
                        <option value="3+ years" className='values'>
                            3+ years
                        </option>
                    </select><br />

                    <label for='aboutyou'>
                        About
                    </label><br />
                    <textarea
                        placeholder="Enter about you"
                        id='aboutyou'
                        className='values'></textarea><br />

                    <label>Submit or Reset</label><br />

                    <div className='buttons'>
                        <button className='button1'>Reset</button>
                        <button>Submit</button>
                    </div>


                </form>

            </div>


        </div>
    );
}

export default Form;
