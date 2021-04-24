import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Container = styled.main`
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 3rem 0;

  @media (max-width: 750px) {
    margin: 1.5rem 0;
    margin-left: clamp(0.5rem, 5vw, 5rem);
    margin-right: clamp(0.5rem, 5vw, 5rem);
  }
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
