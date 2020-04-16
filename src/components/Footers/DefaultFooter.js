/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.github/dodopsantos"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>              
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            
              Douglas Prado dos Santos. Coded by{" "}
            <a
              href="https://www.github/dodopsantos"
              target="_blank"
            >
              Douglas Prado dos Santos
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
