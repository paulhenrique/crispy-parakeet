import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

export const RedirectHandler = () => {
  const navigate = useNavigate();
  const { currentRoute } = useSelector((state: RootState) => state.router);
  const firstTime = useRef(true);
  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
      return;
    }
    navigate(currentRoute);
  }, [currentRoute]);
  return null;
};
