import styled from "@emotion/styled";
import { FC, HTMLAttributes, useRef } from "react";

const BtnWrapperDiv = styled.div<
  HTMLAttributes<HTMLDivElement> & { childrenAmount: number }
>((props) => ({
  width: "100%",
  display: "flex",
  borderRadius: "10px",
  overflow: "hidden",
  border: "black 0.5px solid",
  boxShadow: "rgba(0, 0, 0, 0.15) 3px 2.4px 2.6px",
  "& > *": {
    padding: "0.9rem",
  },
  "& > * :not(:last-child)": {},
  "& .group-children": {
    "&:first-child": {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },

    "&:last-child": {
      "border-top-right-radius": "10px",
      "border-bottom-right-radius": "10px",
      "border-right-width": "0px",
    },
    border: "0px solid black",
    "border-right-width": "0.5px",
    width: `calc(100% / ${props.childrenAmount}) !important`,
  },
}));

const BtnsWrapp: FC<Omit<HTMLAttributes<HTMLDivElement>, "ref">> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <BtnWrapperDiv
      ref={ref}
      childrenAmount={ref.current?.childNodes.length || 0}
      {...props}
    />
  );
};

export default BtnsWrapp;
