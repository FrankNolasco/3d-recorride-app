import React from "react";
import Button from "../atoms/Button";
import { Column, Typography } from "../core/overrides";
const ContentButton = ({ children, icon }) => {
  return (
    <Column alignItems="center" gap="5px">
      <i className={icon} style={{ fontSize: 25 }} />
      <Typography style={{ fontSize: 12 }}>{children}</Typography>
    </Column>
  );
};
const Selector = ({ value, onChange, options, template }) => {
  return (
    <Column width="80px" gap="10px">
      {options.map(
        template
          ? template
          : (el) => (
              <Button status={value === el.id} onClick={() => onChange(el.id)}>
                <ContentButton icon={el.icon}>{el.name}</ContentButton>
              </Button>
            )
      )}
    </Column>
  );
};

export default Selector;
