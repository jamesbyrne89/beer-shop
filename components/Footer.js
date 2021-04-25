import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.colors.grey};
  padding: 1.5rem;
  height: 80px;
  font-size: ${({ theme }) => theme.fontSizes.body_sm};
`;

const Footer = () => (
  <FooterStyles>
    <p>By James Byrne for Oodle. Powered by PunkApi.com/v2</p>
  </FooterStyles>
);

export default Footer;
