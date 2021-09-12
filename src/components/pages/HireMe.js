import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import "../../App.css";
import { motion } from "framer-motion";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    body{
        font-family: Arial;
        background: #fff;
        height: 100%;
        color: #555;
    }
    "@media (max-width: 780px)": {
      display: "block"
`;

const sharedStyles = css`
    background-color: #e8c7c5;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
    `;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #e8c7c8;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled(motion.button)`
  display: block;
  background-color: #e8c7c8;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0px;
  legend {
    padding: 0 10px;
  }
  lable {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initialState = {
  name: "",
  email: "",
  message: "",
  collaborate: "",
};


function HireMe() {
  const formId = "DmYJKquI";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postSubmission();

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    console.log("Succeededdd!!");
  };
  const postSubmission = async () => {
    const payload = {
      ...state,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  return (
    <>
      <motion.h2 initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
         className="hire-me">Let's work together!</motion.h2>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>
            Contact Me
          </h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            placeholder="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Do you want to collaborate with me?</legend>
            <label>
              <input
                type="radio"
                value="definitely"
                name="collaborate"
                checked={state.collaborate === "definitely"}
                onChange={handleInput}
              />
              Definitely
            </label>
            <label>
              <input
                type="radio"
                value="thinking"
                name="collaborate"
                checked={state.collaborate === "thinking"}
                onChange={handleInput}
              />
              Maybe
            </label>
            <label>
              <input
                type="radio"
                value="no"
                name="collaborate"
                checked={state.collaborate === "no"}
                onChange={handleInput}
              />
              No
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton
            whileHover={{ scale: 1.05, backgroundColor: "#f1a7a9" }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#f1a7a9",
              border: "none",
              color: "#000",
            }}
            type="submit"
          >Submit
          <motion.i
              animate={{ x: 15, y: -8 }}
              transition={{ ease: "easeOut", duration: 6 }}
              class="fas fa-paper-plane"
            ></motion.i></StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default HireMe;
