import React from "react"
import Title from "../../Global/Title"
function Contact() {
  return (
    <section className="contact py-15">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/xvovolpz" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Type your message here"
              />
            </div>
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize my-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
