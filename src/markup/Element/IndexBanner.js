import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "../../css/indexBanner.css";
import SBELogo from "../../assests/SBE-Logo1.png";
import NewDBELogo from "../../assests/New-dbe-logo.png";
import { Link } from "react-router-dom";
var bnr1 = require("./../../images/main-slider/slide2.jpg");

class IndexBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchJob: "",
      currentIndex: 0,
    };
  }

  componentDidMount() {
    // Set up input focus/blur effects
    var inputSelector = document.querySelectorAll("input, textarea");
    inputSelector.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentElement.parentElement.classList.add("focused");
      });
      input.addEventListener("blur", function () {
        if (this.value === "") {
          this.parentElement.parentElement.classList.remove("filled", "focused");
        } else {
          this.parentElement.parentElement.classList.add("filled");
        }
      });
    });

    // Set up the text slider
    this.slideInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex:
          prevState.currentIndex === this.sentences.length - 1
            ? 0
            : prevState.currentIndex + 1,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  handleChange = (e) => {
    localStorage.setItem("title_keyword", e.target.value);
    this.setState({
      searchJob: e.target.value,
    });
  };

  handleSentenceClick = (url) => {
    window.location.href = url;
  };

  sentences = [
    {
      text: "Get Trained & Placed",
      url: "https://ultraaura.education/",
    },
    {
      text: "Explore Home Care Jobs",
      url: "https://novahome.care/",
    },
    {
      text: "Create your Resume",
      url: "https://airesume.novajobs.us/form",
    },
  ];

  render() {
    const { currentIndex } = this.state;

    return (
      <div
        className="dez-bnr-inr dez-bnr-inr-md"
        style={{ backgroundImage: "url(" + bnr1 + ")" }}
      >
        <div className="container">
          <div className="dez-bnr-inr-entry align-m">
            <div className="find-job-bx">

              
            <div className="d-sm-flex gap-4 align-items-center flex-row">
  <div className="hover-3d align-items-center rounded-4">
    <h2 className="py-2">An AI-Enabled HR Job Portal</h2>
  </div>
  <div className="hover-3d align-items-center rounded-4 p-4">
    <div style={styles.sliderBox}>
      <div style={styles.sliderText}>
        {this.sentences.map((sentence, index) => (
          <p
            key={index}
            onClick={() => this.handleSentenceClick(sentence.url)}
            style={{
              ...styles.sentence,
              opacity: index === currentIndex ? 1 : 0,
              transform:
                index === currentIndex ? "translateX(0)" : "translateX(100%)",
              cursor: "pointer",
            }}
          >
            {sentence.text}
          </p>
        ))}
      </div>
    </div>
  </div>
</div>

              <h2>
                <TypeAnimation
                  sequence={[
                    "Search Jobs",
                    1000,
                    "Check Resume AI Score",
                    1000,
                    "Make AI Resume",
                    1000,
                    "Connect with Employers",
                    1000,
                    "Get Hired",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <form className="dezPlaceAni">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="searchJob">
                        Job Title, Keywords, or Phrase
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="searchJob"
                        id="searchJob"
                        onChange={this.handleChange}
                        value={this.state.searchJob}
                      />
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="form-group">
                      <Form.Control as="select" custom className="select-btn">
                        <option>Select Sector</option>
                        <option>Construction</option>
                        <option>Coordinator</option>
                        <option>Employer</option>
                        <option>Financial Career</option>
                        <option>Information Technology</option>
                        <option>Marketing</option>
                        <option>Quality check</option>
                        <option>Real Estate</option>
                        <option>Sales</option>
                        <option>Supporting</option>
                        <option>Teaching</option>
                      </Form.Control>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="form-group">
                      <label htmlFor="Location">Location</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="Location"
                          id="Location"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 col-12">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/user/job/1";
                      }}
                      className="site-button btn-block"
                    >
                      Find Job
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  sliderBox: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    overflow: "hidden",
    position: "relative",
    height: "50px", // adjust as needed
  },
  sliderText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  sentence: {
    position: "absolute",
    transition: "opacity 1s ease, transform 1s ease",
    whiteSpace: "nowrap",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default IndexBanner;
