import React from 'react';


const Contact = () => {
  return (
    <><div className='card'>
      <div className="container">


<h2>CONTACT US</h2>

<form className="form" >
    
    <div className="groupa">
        <label for="Name" className="labela">Your name</label>
        <div className="input-groupa">
            <input type="text" id="Name" name="Name" required/>
        </div>
    </div>

    <div className="groupb">
        <label for="Email" className="labelb">Your email address</label>
        <div className="input-groupb">
            <input type="email" id="Email" name="Email" required/>
        </div>
    </div>

    <div className="groupc">
        <label for="Message" className="labelc">Your message</label>
        <div className="input-groupc">
            <textarea id="Message" name="Message" rows="6" maxlength="3000" required></textarea>
        </div>
    </div>

    <div className="groupd">
        <button type="submit">SUBMIT</button>
    </div>

</form>
</div>
</div>
    </>
  )
}

export default Contact;
