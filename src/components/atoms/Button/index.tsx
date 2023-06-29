import React, { HTMLProps } from 'react';

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | undefined;
  variantType?: 'fill' | 'outlined' | undefined;
  ref?: any;
}

const buttonClassName =
  'transition duration-200 w-full rounded-lg px-3 py-2 text-white font-semibold ';

const variantClassName: any = {
  primary: 'bg-primary hover:bg-primary/80 active:bg-primary',
  danger: 'bg-danger hover:bg-danger/80 active:bg-danger',
  warning: 'bg-warning hover:bg-warning/80 active:bg-warning',
};

function Button(props: IButtonProps) {
  const { className, variant, variantType, type, disabled, ...rest } = props;
  return (
    <button
      type={type || 'button'}
      className={`${buttonClassName} ${
        variant && variantClassName[variant]
      } ${className} ${disabled && 'disabled:bg-opacity-20 hover:bg-gray-500'}`}
      disabled={disabled}
      {...rest}
    ></button>
  );
}

Button.defaultProps = {
  variant: 'primary',
};

export default React.memo(Button);
