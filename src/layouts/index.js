import React from "react";
import PropTypes from "prop-types";

import NavbarSimple from "./navbar";
import Container from "./Container";

AppLayout.propTypes = {
  children: PropTypes.node,
};

function AppLayout({ children }) {
  return (
    <div>
      <NavbarSimple />
      <Container>{children}</Container>
    </div>
  );
}

export default AppLayout;
