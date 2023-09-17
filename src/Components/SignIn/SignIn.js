import React, { useContext, useEffect, useState } from "react";
import "./SignIn.scss";
import logo from "../../assets/images/logo.svg";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const {googleSignIn,user} = useContext(AuthContext)
  const [errorState, setError] = useState(null);
  const navigate = useNavigate()
  
  const handleGoogleSiginIn = async (e) => {
    e.preventDefault()
    setError(null); // Reset the error state
    try {
        await googleSignIn()
        
        // navigate('/')
    } catch (error) {
        if(error)console.log('yes');
        setError("An error occurred while signing in. Please try again later.");
        console.log(error);
    }
  }

  useEffect(() => {
    if(user !== null){
        navigate('/')
    }

  }, [user])

  return (
    <div className="parent-sign-in">
      <section className="sign-in-page">
        <img src={logo} alt="" className="sign-in-logo-image" />
        <p className="sign-in-brief">
          Unlock a world of culinary choices with the power of your Google
          account. Sign in to enjoy the ability to purchase any delectable dish
          you desire, while also gaining the advantage of effortlessly saving
          your favorite meals to a dedicated 'Favorites' section for swift and
          easy access.
        </p>
        <button className="google-btn" onClick={handleGoogleSiginIn}>
          <i className="fab fa-google"></i>
          <span className="google-text">Sign in with Google</span>
        </button>
      </section>
    </div>
  );
};

export default SignIn;
