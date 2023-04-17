import React from 'react'

function Contact() {
  return (
    <div>
      

      <div className='form'>
        
        <h1> Contact Me</h1>
        <div class="separation"></div>
        <div class="corp-formulaire">
            <div class="gauche">
                <div class="groupe">
                    <label>Name</label>
                    <input type="text"/>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="groupe">
                    <label>Phone Number</label>
                    <input type="text"/>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="groupe">
                    <label>Mail Adress</label>
                    <input type="text"/>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
            <div class="droite">
                <div class="groupe">
                    <label> Message</label>
                    <textarea ></textarea>
                </div>
            </div>
        </div>
        <div class="peid-formulaire" align="center">
        <button>Send Message</button>
    </div>
    </div>



    </div>
  )
}

export default Contact