import Signup from "./Signup";
import {Container } from "react-bootstrap"
import  AuthProvider  from "./context/AuthContext";
function App() {
  return (
    <Container className = "d-flex align-items-center justify-content-center" style = {{minHeight: "100vh"}}>
    <AuthProvider>
      <Signup />
    </AuthProvider>
    </Container>
    
  );
}

export default App;
