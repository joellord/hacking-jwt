import React from "react";
import PropTypes from "prop-types";

import { Slide, Subtitle } from "@sambego/diorama";

const SectionSlide = ({ text, background, color, note, style }) => (
  <Slide style={{ background }} note={note}>
    <Subtitle style={{ color, ...style }}>{text}</Subtitle>
  </Slide>
);

SectionSlide.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.node.isRequired,
  note: PropTypes.string,
  style: PropTypes.shape({})
};

SectionSlide.defaultProps = {
  background: "#fff",
  color: "#000",
  note: undefined,
  style: {}
};

export default SectionSlide;