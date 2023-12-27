import React, { FC, useState } from "react";
import { Button } from "../../Components/Button/Button";
import "./Popup.css";

interface PopupProps {
  content?: string;
  children: React.ReactNode;
  height?: string;
  width?: number;
  bgColor?: string;
  color?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  className?: string;
  justifyContent?: string;
  display?: string;
}
let IconClose =
  "https://icons.iconarchive.com/icons/iconsmind/outline/512/Close-icon.png";

let Categoryicon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png";

export const Popup: FC<PopupProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    children,
    content,
    bgColor,
    className,
    color,
    height,
    margin,
    padding,
    radius,
    width,
    justifyContent,
    display,
  } = props;

  return (
    <div className={className}>
      <img src={Categoryicon} width={32} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div
          style={{
            width: width,
            height: height,
            margin: margin,
            padding: padding,
            color: color,
            backgroundColor: bgColor,
            borderRadius: radius,
            justifyContent: justifyContent,
            display: display,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0rem 0rem 1rem 0rem  #d1d1d1",
          }}
          className="my-popup"
        >
          {children}
          <Button
            onClick={() => setIsOpen(false)}
            bgColor="#fff"
            height={60}
            border="#fff solid 1px"
            className="my-button-popup"
          >
            <img src={IconClose} width={40} onClick={() => setIsOpen(false)} />{" "}
          </Button>
        </div>
      )}
    </div>
  );
};
