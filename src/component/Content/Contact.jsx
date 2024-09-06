import { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container__00 fade-in head_contact col-2">
          <div className="container__01">
            <h1 className="text__head_contact">Contact</h1>
            <div className="box-container">
              <div className="contact__info">
                <div className="contact__content bounce-in">
                  <p style={{ fontSize: '30px' }}>
                    Email: <a href="mailto:nattanon.siripai@gmail.com">nattanon.siripai@gmail.com</a>
                  </p>
                  <p style={{ fontSize: '30px' }}>Phone: +66 928525225</p>
                </div>
                <div className="contact__form bounce-in">
                  <form action="submit_form.php" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    
                    <button type="submit" className="button__style">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
