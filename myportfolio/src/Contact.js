import React from 'react'

const Contact = () => {
    return (
        <div>
            <h5>Thanks for checking out my portfolio!</h5>
            <h5>Let's Connect!</h5>
            <a 
              href="https://github.com/Ckirk9" target="_blank"
              className="github-link">
            <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/christine-kirk-a3085a133/" target="_blank"
              className="linkedIn-link">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a 
              href="mailto:christine.kirk@yahoo.com" target="_blank"
              className="email">
            <i class="email-link fa fa-envelope-o" aria-hidden="true"></i>
            </a>
        </div>
    )
}


export default Contact