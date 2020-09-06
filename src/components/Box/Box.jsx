import React from 'react';

function Box({
  root,
  vertical,
  centered,
  fluid,
  children,
  classes,
  component,
}) {
  let classNames = 'block';
  if (root) classNames = 'container-root ' + classNames;
  if (vertical) classNames += ' vertical';
  if (centered) classNames += ' centered';
  if (fluid) classNames += ' fluid';
  if (classes) classNames += ` ${classes}`;
  const InnerComponent = component || 'div';
  return (
    <InnerComponent className={classNames}>
      {children}
    </InnerComponent>
  );
}

export default Box;