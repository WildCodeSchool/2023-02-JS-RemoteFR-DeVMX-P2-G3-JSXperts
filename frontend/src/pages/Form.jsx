import "../components/form.scss";

function Form() {
  return (
    <div className="contactPage">
      <div className="container-form">
        <div className="background" />
        <h2>CONTACT</h2>
        <div className="form">
          <div className="container-col">
            <div className="col-username">
              <label htmlFor="username">Pseudo</label>
              <input id="username" name="username" type="text" required />
            </div>

            <div className="col-email">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className="col-message">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>

            <button type="submit" className="btn-submit">
              <span>Envoyer</span>
              <img
                src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                alt="validated"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
