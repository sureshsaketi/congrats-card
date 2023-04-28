const element = (
  // Write your code here.
  <div>
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="card-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p>Vishnu Institute of Computer Eduction and Technology, Bhimavaram.</p>
      <img
        className="card-image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
