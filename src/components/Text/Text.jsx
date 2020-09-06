import React from 'react';
import './Text.scss';

function Text({ component, text, size, centered}) {

  const InnerComponent = component || 'div';
  let textStyles = '';
  switch(size) {
    case 'big':
      textStyles = 'text--big';
      break;
    case 'small':
      textStyles = 'text--small';
      break;
    default:
      textStyles = 'noraml';
    }
  if (centered) {
    textStyles += '--centered';
  }
  return (
    <InnerComponent className={textStyles}>
      {text}
    </InnerComponent>
  );
}

export default Text;
