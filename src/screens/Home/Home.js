import React, { Component } from "react";
import "./Home.css";
import { Images } from "../../assets/Assets";
import { Row, Col, Button, Spinner , Modal} from "react-bootstrap";
import { FiFacebook, FaInstagram } from "react-icons/all";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {NavLink} from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      role: "",
      show: false,
      error: false,
      nameError: false,
      phoneError: false,
      emailError: false,
      messageError: false,
      roleError: false,
      isDisabled: true,
      day: "",
      hour: "",
      minute: "",
      second: "",
      spinner: false,
    };
  }

  componentDidMount() {
    this.timeCounter();
  }

  inputChange = (e) => {
    e.preventDefault();
    const {
      name,
      phone,
      email,
      message,
      role,
  
    } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "name") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({ nameError: true });
      } else {
        this.setState({ nameError: false });
      }
    }
    if (e.target.name === "phone") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({ phoneError: true });
      } else {
        this.setState({ phoneError: false });
      }
    }
    if (e.target.name === "email") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({ emailError: true });
      } else {
        this.setState({ emailError: false });
      }
    }
    if (e.target.name === "role") {
      console.log("role");
      if (e.target.value === ""  || e.target.value === null ) {
        
        this.setState({ roleError: true });
      } else {
        
        this.setState({ roleError: false });
      }
    }
    if (e.target.name === "message") {
      if (e.target.value === "" || e.target.value === null) {
        this.setState({ messageError: true });
      } else {
        this.setState({ messageError: false });
      }
    }

    if (
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      message !== "" &&
      role !== ""
    ) {
      this.setState({ isDisabled: false });
    }
  };

  validateFields = (e) => {

    e.preventDefault();
    const {
      name,
      phone,
      email,
      message,
      role,
    } = this.state;
    if (name === "" || name === null) {
      this.setState({ nameError: true });
    }
    if (phone === "" || phone === null) {
      this.setState({ phoneError: true });
    }
    if (email === "" || email === null) {
      this.setState({ emailError: true });
    }
    if (role === "") {
      this.setState({ roleError: true });
    }
    if (message === "" || message === null) {
      this.setState({ messageError: true });
    }
     else {
      this.setState({ spinner: true });
      this.sendEmail(e);
      console.log(role,"successful");
      this.clearInputs();
     
    }
  };

  clearInputs = () => {
    this.setState({ name: "", phone: "", email: "", message: "", role: "" });
  };

  submitForm = () => {
    this.validateFields();
  };

  timeCounter = () => {
    var countDownDate = new Date("May 24, 2021 12:00:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
  
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      if(document.getElementById("countdown")){
        document.getElementById("countdown").innerHTML =
        days + "J " + hours + "H:" + minutes + "MN:" + seconds + "S ";
      }
     

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  };s
  
  sendEmail = (e) => {
    const templateId = "template_779jjr8";
    emailjs
      .sendForm(
        "service_jmqh8lg",
        templateId,
        e.target,
        "user_L0QpW22rfIPT7J9ffYphX"
      )
      .then(
        (result) => {
          this.setState({spinner: false});
          console.log(result.text);
          this.modalHandler();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(error.text);
        }
      );
  };

  modalHandler = () => {
    this.setState({show: !this.state.show});
  
  }
  render() {
    const {
      name,
      phone,
      email,
      message,
      nameError,
      emailError,
      phoneError,
      messageError,
      roleError,
    } = this.state;
    return (
      <>
      <div className="home-main">
        <div className="home">
          <div className="text-left pt-4">
            <img src={Images.logo} alt="Issyne" className="home-logo" />
          </div>
          {/*     Header      */}
          <Row className="home-header">
            <Col
              md={8}
              xs={12}
              className="home-header-content"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="home-header-heading">
                DONNEZ DES COURS INSTANTANÉS ET GAGNEZ DE L’ARGENT
              </div>
              <div className="home-header-desc">
                Enseignants, étudiants, professeurs des écoles, vous n’avez
                besoin que de votre smartphone !
              </div>
              <a className="home-header-button" href="#custom-form">
                <span>
                  <img src={Images.heart} alt="Issyne" />
                </span>{" "}
                Je veux enseigner, je m’inscris !
              </a>
            </Col>
            <Col
              md={4}
              xs={12}
              className="home-header-image"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img src={Images.header} alt="Issyne" />
            </Col>
          </Row>
          {/*     Header END     */}

          {/*     Why Issyne      */}
          <div className="why-section">
            <div className="text-center pb-5 why-heading">
              POURQUOI ISSYNE ?
            </div>
            <Row className="why-content-container">
              <Col
                md={6}
                sm={12}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="why-content">
                  <div className="why-content-item">
                    <div className="why-item-image">
                      <img alt="Issyne" src={Images.mobile} />
                    </div>
                    <div className="why-item-detail">
                      <b>8 élèves sur 10</b> utilisent leur smartphone pour
                      faire leurs devoirs
                    </div>
                  </div>
                  <div className="why-content-item why-content-item-2">
                    <div className="why-item-image">
                      <img alt="Issyne" src={Images.emoji} />
                    </div>
                    <div className="why-item-detail">
                      Les 11-17 ans passent <b>3h par jour</b> sur les réseaux
                      sociaux et les jeux vidéos
                    </div>
                  </div>
                  <div className="why-content-item">
                    <div className="why-item-image">
                      <img alt="Issyne" src={Images.laptop} />
                    </div>
                    <div className="why-item-detail">
                      <b>43% des parents</b> ont déjà sollicité des cours
                      particuliers pour leurs enfants.
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                sm={12}
                className="why-image"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img alt="Issyne" src={Images.card1} />
              </Col>
            </Row>
          </div>
          {/*     Why Issyne END      */}

          {/*     Opeartion Section      */}
          <div className="home-operation">
            <div className="form-bottom text-center home-operation-header">
              <div className="form-bottom-image text-right">
                <img alt="Issyne" src={Images.heart} />
              </div>
              <div className="form-bottom-heading">
                Et si nous apprenions aux ados à utiliser leur smartphone d’une
                autre façon ?
              </div>
            </div>

            <div className="custom-heading text-center heading-operation">
              FONCTIONNEMENT{" "}
            </div>

            <div className="operation-card-container">
              <div className="operation-card text-center">
                <img alt="Issyne"
                  src={Images.mobile1}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <div className="operation-card-detail text-center">
                  ÉLÈVES ET ENSEIGNANTS SE CONNECTENT EN QUELQUES SECONDES
                </div>
              </div>
              <div className="operation-card text-center">
                <img alt="Issyne"
                  src={Images.mobile2}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <div className="operation-card-detail text-center">
                  DÉMARREZ UNE SESSION D’APPRENTISSAGE ET AIDEZ L’ÉLÈVE POUR SON
                  DEVOIR
                </div>
              </div>
              <div className="operation-card text-center">
                <img alt="Issyne"
                  src={Images.mobile3}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <div className="operation-card-detail text-center">
                  SESSION TERMINÉE, VOUS ÊTES RECOMMANDÉ PAR L’ÉLÈVE, MISSION
                  ACCOMPLIE !
                </div>
              </div>
            </div>
            {/* <div className="operation-card-detail-container">
              <div className="operation-card-detail text-center">
                ÉLÈVES ET ENSEIGNANTS SE CONNECTENT EN QUELQUES SECONDES
              </div>
              <div className="operation-card-detail text-center">
                DÉMARREZ UNE SESSION D’APPRENTISSAGE ET AIDEZ L’ÉLÈVE POUR SON
                DEVOIR
              </div>
              <div className="operation-card-detail text-center">
                SESSION TERMINÉE, VOUS ÊTES RECOMMANDÉ PAR L’ÉLÈVE, MISSION
                ACCOMPLIE !
              </div>
            </div> */}
          </div>
          {/*     Opeartion Section END      */}

          {/*     FORM      */}
          <div className="custom-heading text-center">
            NE MANQUEZ PAS LE LANCEMENT D’ISSYNE
          </div>
          <div className="home-form pt-5" id="custom-form">
            <Row style={{ alignItems: "center" }}>
              <Col md={6} xs={12}>
                <div className="form-launch text-center">
                  <div className="form-launch-heading">
                    LANCEMENT DE L’APP DANS :
                  </div>
                  <div className="form-launch-time" id="countdown">
                    40J 8H:13MN:20S
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <form className="custom-form" onSubmit={this.validateFields}>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.inputChange}
                    placeholder="Prénom et Nom"
                    className="home-form-input"
                  />
                  {nameError === true && (
                    <div className="input-error">please enter name</div>
                  )}
                  <input
                    type="number"
                    value={phone}
                    name="phone"
                    onChange={this.inputChange}
                    placeholder="Téléphone"
                    className="home-form-input"
                  />
                  {phoneError === true && (
                    <div className="input-error">please enter phone</div>
                  )}
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={this.inputChange}
                    placeholder="Adresse e-mail"
                    className="home-form-input"
                  />
                  {emailError === true && (
                    <div className="input-error">please enter email</div>
                  )}
                  <select
                    id="role"
                    className="home-form-input"
                    onChange={this.inputChange}
                    name="role"
                    placeholder="Vous êtes : "
                    
                    value={this.state.role}
                  >
                    <option value="">Vous êtes :</option>
                    <option value="Un professeur des écoles">Un professeur des écoles</option>
                    <option value="Un étudiant en cycle supérieur">
                      Un étudiant en cycle supérieur
                    </option>
                    <option value="Un expert">Un expert</option>
                  </select>
                  {roleError === true && (
                    <div className="input-error">Please select option</div>
                  )}
                  <input
                
                    value={message}
                    name="message"
                    onChange={this.inputChange}
                    placeholder="Quelle matière vous enseignez ?"
                    className="home-form-input"
                  />
                  {messageError === true && (
                    <div className="input-error">please enter message</div>
                  )}
                  <Button
                    // disabled={this.state.isDisabled}
                    type="submit"
                    className="home-form-btn"
                  >
                    {this.state.spinner ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                      /> 
                    ) : (
                      "S’inscrire"
                    )}
                    
                  </Button>{" "}
                </form>
              </Col>
            </Row>
            <div className="form-bottom text-center custom-margin-top">
              <div className="form-bottom-image text-right">
                <img alt="Issyne" src={Images.heart} />
              </div>
              <div className="form-bottom-heading">
                II ne sert à rien d’aller contre la technologie. Il suffit
                d’apprendre à s’en servir !
              </div>
            </div>
          </div>
          {/*     FORM END     */}

          {/*     SOCIAL MEDIA LINKS     */}

          <div className="home-social-links">
            <div>
              <a
              rel="noreferrer"
                className="home-social-link mb-3"
                href="https://www.instagram.com/issyne_lapplication"
                target="_blank"
              >
                <FaInstagram className="home-social-icon" />
              </a>
            </div>
            <div>
              <a
              rel="noreferrer"
                className="home-social-link"
                href="https://www.facebook.com/issyne"
                target="_blank"
              >
                <FiFacebook className="home-social-icon" />
              </a>
            </div>
          </div>

          {/*     SOCIAL MEDIA LINKS END     */}
        </div>

        {/*     HOME FOOTER     */}
        <div className="home-footer">
          <div style={{ flexBasis: "40%" }}>
            <div className="home-footer-heading">ISSYNE </div>
            <div className="home-footer-content">
              Application connectant instantanément les étudiants aux
              professeurs !
            </div>
          </div>
          <div style={{ flexBasis: "25%" }}>
            <div className="home-footer-content pl-3">Tous droits réservés</div>
          </div>
          <div style={{ flexBasis: "25%", textAlign: "right", color: "#fff" }}>
            <NavLink to="/cgu" className="home-footer-content text-right pr-3">CGU/CGV</NavLink>
          </div>   
        </div>
        {/*     HOME FOOTER END     */}
      </div>
      <Modal className="custom-modal" show={this.state.show} onHide={this.modalHandler}  aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
      
        </Modal.Header>
        <Modal.Body>
          <div className="custom-modal-heading">MERCI !</div>
          <div className="text-center">
          <img src={Images.logo} alt="Issyne" className="custom-modal-img" />
          <div className="custom-modal-detail">Nous vous tiendrons informés des nouvelles
liées au projet. En attendant, n’hésitez pas 
À en parler autour de vous ! </div>

          </div>
          <div className="modal-social-links">
            <div className="modal-social-link">
              <a
                rel="noreferrer"
                href="https://www.instagram.com/issyne_lapplication"
                target="_blank"
              >
                <FaInstagram className="modal-social-icon" />
              </a>
            </div>
            <div className="modal-social-link">
              <a
                rel="noreferrer"
                href="https://www.facebook.com/issyne"
                target="_blank"
              >
                <FiFacebook className="modal-social-icon" />
              </a>
            </div>
          </div>
          </Modal.Body>
     
      </Modal>
      </>
    );
  }
}

export default Home;
