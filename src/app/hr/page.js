"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddLeaves() {
  const [managerid, setManagerid] = useState("");
  const [firstname, setFristname] = useState("");
  const router = useRouter();

  const handlefirstname = (event) => {
    setFristname(event.target.value);
  };

  const handlemanagerid = (event) => {
    setManagerid(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-manager/route", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ managerid, firstname }),
      });

      // Navigate to a different page or update state
      // router.push("/success");
    } catch (error) {
      console.error(error);
    }

    //setManagerid("");
    // setFristname("");
    return false;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="managerid">Title:</label>
          <input
            type="text"
            id="managerid"
            value={managerid}
            onChange={handlemanagerid}
            required
          />
        </div>
        <div>
          <label htmlFor="content">firstname:</label>
          <textarea
            id="firstname"
            value={firstname}
            onChange={handlefirstname}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
