import React from "react";

interface BtnSubmitBasicProps {
  text?: string;
  className?: string;
  id?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

const BtnSubmitBasic: React.FC<BtnSubmitBasicProps> = ({
  text,
  className = "",
  id,
  loading = false,
  children,
}) => {
  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button disabled={loading}>{children ? children : text}</button>
    </div>
  );
};

export default BtnSubmitBasic;
