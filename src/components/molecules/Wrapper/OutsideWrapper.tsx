import useOutsideAlerter from '@/hooks/useOutsideAlerter';
import React, { useRef } from 'react';

interface IOutsideWrapperProps {
  onClickOutside?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function OutsideWrapper(props: IOutsideWrapperProps) {
  const { children, onClickOutside } = props;
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, (e: any) => {
    if (onClickOutside) onClickOutside(e);
  });

  return (
    <>
      <div ref={wrapperRef}>{children}</div>
    </>
  );
}

export default React.memo(OutsideWrapper);
