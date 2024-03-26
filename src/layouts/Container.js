import React from "react";

import PropTypes from "prop-types";

Container.propTypes = {
  children: PropTypes.node,
};

function Container({ children }) {
  return (
    <div className="h-auto w-[92vw] md:w-[90vw] xl:max-w-[1234px] xl:min-w-[1234px] mx-auto">
      {children}
    </div>
  );
}

export default Container;
