import React from "react";

export default function ({ title }) {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        src="https://picsum.photos/200"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
        }}
      />
      <h3
        // className="heading"
        style={{
          marginTop: "20px",
        }}
      >
        {title}
      </h3>
      <svg
        width="24px"
        height="24px"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeHeight={1.5}
        stroke="currentColor"
      >
        <path
          height="24px"
          width="24px"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    </div>
  );
}
