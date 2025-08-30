const Contact = () => {
  const whatsappNumber = "918053761134"; // tumhara number

  return (
    <div className="contact-container my-5">
      <h2 className="mb-4">Contact Us</h2>
      <form className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Send
        </button>
      </form>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success w-100"
      >
        Contact via WhatsApp
      </a>
    </div>
  );
};

export default Contact;
