import React from "react";
import { Container, Header, Footer, Sidebar } from "../components/layout/layout";
import { HamburgerButton,Button, Card, Modal, TextInput } from "../components/ui/ui";
import { DynamicForm, Field, formUtils } from "../components/forms/forms";
import '../styles/App.css';

function App() {    

    const [isLoginOpen, setLoginOpen] = React.useState(false);
    const [isRegisterOpen, setRegisterOpen] = React.useState(false);
    const [isSideBarOpen, setSideBarOpen] = React.useState(false);  
    return (
    <div className="wrapper">
      <Header />

      <div className="main-content">
        <Sidebar />
        
        <Container>
          
          <div className="content">
          <div className="hamburger-menu">
          <HamburgerButton className="navigation" onClick={()=>setSideBarOpen(!isSideBarOpen)}><h4>☰</h4></HamburgerButton>
          </div>
          <h2>Welcome!</h2>
          <div className="identification-buttons">
          <Button className="login" onClick={() => setLoginOpen(true)}><h4>Login</h4></Button>
          <Button className="signup" onClick={() => setLoginOpen(true)}><h4>sign up</h4></Button>
          </div>
          {/* Card with "Create" button */}
          <Card className="card">
            <div className="text">
              <h3>Create a New Hack</h3>
            </div>
            
            
            <Button className="pixel-button" onClick={() => alert("BOOOM!")}>
            <h4>0_o Create</h4>
            </Button>
          </Card>

          {/* Scrollable area */}
          <div className="scrollable">
            <p>Here will be scrollable content...</p>
            <p>For example, a list of projects or messages</p>
            <p>You can add more blocks...</p>
            <p>...</p>
            <p>End of scroll</p>

          </div>


          {/* Authorization forms */}
          <div className="forms-section">
            
          </div>
          
          </div>
        </Container>
      </div>

      {
        isLoginOpen && (
          <Modal onClose={()=>setLoginOpen(false)}>
            <Card>
              <h3>Login</h3>
              <Field label="Email">
                <TextInput placeholder="Enter your email" />
              </Field>
              <Field label="Password">
                <TextInput type="password" placeholder="Enter your password" />
              </Field>
            </Card>
          </Modal>
        )
      }

      <Footer />
    </div>
  );
}

export default App;
