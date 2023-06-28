import React, { HTMLProps } from 'react';

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  appendClassName?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | undefined;
  variantType?: 'fill' | 'outlined' | undefined;
  ref?: any;
}

function Button(props: IButtonProps) {
  const { appendClassName, variant, variantType, type, ...rest } = props;
  return (
    <button
      type={type || 'button'}
      className={`${appendClassName}`}
      {...rest}
    ></button>
  );
}

export default React.memo(Button);
