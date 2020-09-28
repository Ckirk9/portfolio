import React from 'react'

const Contact = () => {
    return (
        <div className="footer">
            <h5>Thanks for checking out my portfolio!</h5>
            <h5>Let's Connect!</h5>
            <ul>
            <li><a 
              href="https://github.com/Ckirk9" target="_blank"
              className="github-link">
            <i className="fab fa-github" aria-hidden="true"></i>
            </a></li>
            <li><a 
              href="https://www.linkedin.com/in/christine-kirk89/" target="_blank"
              className="linkedIn-link">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a></li>
            <li><a 
              href="mailto:christine.kirk@yahoo.com" target="_blank"
              className="email">
            <i className="email-link far fa-envelope" aria-hidden="true"></i>
            </a></li>
            </ul>
        </div>
    )
}


export default Contact