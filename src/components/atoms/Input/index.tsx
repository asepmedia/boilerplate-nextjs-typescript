import React, { HTMLProps } from 'react';

export interface IInputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  ref?: any;
}

const inputClassName =
  'w-full rounded-lg px-3 shadow-sm py-[6px] bg-transparent border-[1.5px] ring-0 outline-none focus:ring-0 border-[#D8D8D8] focus:border-primary placeholder:text-[#90909090] transition duration-300';

function Input(props: IInputProps) {
  const { className, type, ...rest } = props;

  return (
    <input
      type={type}
      autoComplete="off"
      className={`${inputClassName} ${className} ${
        type === 'password' ? "!tracking-[0.125em] font-['Verdana']" : ''
      }`}
      {...rest}
    />
  );
}

export default React.memo(Input);
