import React from "react";
import PropTypes from "prop-types";
import { components } from "react-select";

const ValueContainer = ({ children, getValue, ...props }) => {
  const values = getValue();
  var valueLabel = "";

  if (values.length > 0)
    valueLabel += props.selectProps.getOptionLabel(values[0]);
  if (values.length > 1) valueLabel += ` & ${values.length - 1} more`;

  // Keep standard placeholder and input from react-select
  var childsToRender = React.Children.toArray(children).filter(
    (child) =>
      ["Input", "DummyInput", "Placeholder"].indexOf(child.type.name) >= 0
  );
  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && valueLabel}
      {childsToRender}
    </components.ValueContainer>
  );
};

// Add PropTypes validation for selectProps and children
ValueContainer.propTypes = {
  children: PropTypes.node,
  getValue: PropTypes.func,
  selectProps: PropTypes.object,
};

export default ValueContainer;
