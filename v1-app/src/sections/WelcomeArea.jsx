import welcomeImage from "./../assets/images/welcome.jpg";
import "../assets/styles/sections/welcome_area.css"

const WelcomeArea = () => {
  return (
    <section className="welcome-area section-padding2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="welcome-img">
              <img src={welcomeImage} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="welcome-text mt-5 mt-md-0">
              <h3>
                <span className="style-change">welcome</span> <br />
                to Mjmandelah
              </h3>
              <p className="pt-3">
                Created god gathered don&#39;t you yielding herb you had. And
                isn&#39;t, god was saw. Dominion. Great sixth for in unto was.
                Open can&#39;t tree am waters brought. Divide after there. Was.
              </p>
              <p>
                Created god gathered don&#39;t you yielding herb you had. And
                isn&#39;t, god was saw. Dominion. Great sixth for in unto was.
                Open can&#39;t tree waters brought. Divide after there. Was.
                Created god gathered don&#39;t you yielding herb you had. And
                isn&#39;t god.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeArea;
