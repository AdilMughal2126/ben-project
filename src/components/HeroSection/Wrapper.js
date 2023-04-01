import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  .outer-wrapper {
    height: 100vh;
  }

  .main-content-container {
    margin-top: 1.7rem;
  }

  .dashboard {
    border-right: 1px solid black;
    font-size: 1.3rem;
  }
  .form-field {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  input {
    margin: 0 0.5rem;
  }
`;

export default Wrapper;
