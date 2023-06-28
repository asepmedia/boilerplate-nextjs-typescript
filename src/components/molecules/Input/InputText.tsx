import { Input } from "@/components/atoms";
import { IInputProps } from "@/components/atoms/Input";
import React, { useState } from "react";
import {
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";

export interface IInputTextProps extends IInputProps {
  labelText?: string | React.ReactNode;
  errors?: any;
  isRequired?: boolean;
  fieldName?: string;
}

function InputText(props: IInputTextProps) {
  const { labelText, fieldName, errors, isRequired, type, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isError = errors && fieldName && errors[fieldName];
  const isPassword = type === "password";

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <label className="block text-sm font-medium leading-6 text-label select-none">
        <span
          className={`font-body text-sm font-bold text-dark/40 block ${
            isError ? "text-danger/50" : ""
          }`}
        >
          {labelText && labelText}
          {isRequired && labelText && (
            <sup
              id={`txt_error_${fieldName}`}
              className="text-danger -top-[0.25em]"
            >
              {" "}
              *
            </sup>
          )}
        </span>
        <div className="relative mt-1">
          <Input
            id={fieldName}
            name={fieldName}
            type={!isPassword ? type : showPassword ? "text" : "password"}
            className={`${isError && "!border-danger !pr-8"}`}
            {...rest}
          />
          {!isPassword ? (
            <>
              {isError && (
                <HiOutlineExclamationCircle className="absolute top-0 flex items-center justify-center h-full right-3 text-sm text-danger w-4" />
              )}
            </>
          ) : (
            <button
              type="button"
              className={`absolute top-0 flex items-center justify-center h-full right-3 text-sm ${
                isError && "text-danger"
              }`}
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <HiOutlineEye className="text-xl" />
              ) : (
                <HiOutlineEyeOff className="text-xl" />
              )}
            </button>
          )}
        </div>
        {isError && (
          <small
            id={`txt_error_${fieldName}`}
            className="text-danger text-tiny block mt-1"
          >
            {errors[fieldName].message}
          </small>
        )}
      </label>
    </>
  );
}

export default React.memo(InputText);
