import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext";
import { runFireworks } from "@/lib/utils";

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>

        <h2>Thank For Your Order</h2>

        <p className="email-msg"> Check Your email inbox for the reciept</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
          <Link href="/">
            <button type="button" className="btn" width="300px">
              Continue Shoping
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default success;
