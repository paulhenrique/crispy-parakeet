import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

export const RedirectHandler = () => {
  const navigate = useNavigate();
  const { currentRoute } = useSelector((state: RootState) => state.router);
  useEffect(() => {
    navigate(currentRoute);
  }, [currentRoute]);
  return null;
};
