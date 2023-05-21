import ProgressBar from "../reusable/progress";
import "./style.css";
export default function ({ data }) {
  function getTime(time) {
    if (time == 25) {
      return `01:00`;
    }
    return (time > 9 ? time : `0${time}`) + ":00";
  }
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        minWidth: "300px",
        gap: "4px",
        backgroundColor: "#f3fafe",
        padding: "16px 16px",
        marginBottom: "20px",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: "700",
          }}
        >
          {data.title}
        </p>

        <svg
          width="24px"
          height="24px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>

      <span
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          gap: "4px",
          fontFamily: "sans-serif",
          fontWeight: "400",
          color: "gray",
        }}
      >
        <svg
          width="14px"
          height="14px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {getTime(parseInt(data.startTime))} -{" "}
        {getTime(parseInt(data.startTime) + 1)}
      </span>

      <div
        style={{
          paddingTop: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4px",
        }}
      >
        {/* Progress */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            gap: "4px",
            color: "gray",
          }}
        >
          <ProgressBar value={(data.progress * 10) / 100} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Progress</p>
            <p>{data.progress} / 10</p>
          </div>
        </div>

        {/* Avatar */}
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              borderRadius: "100%",
              background: "black",
              width: "32px",
              height: "32px",
              border: "2px solid white",
              marginLeft: "-8px",
              overflow: "hidden",
            }}
          >
            <img
              width="32px"
              height="32px"
              src="https://xsgames.co/randomusers/assets/avatars/male/5.jpg"
            />
          </div>
          <div
            style={{
              borderRadius: "100%",
              background: "black",
              width: "32px",
              height: "32px",
              border: "2px solid white",
              marginLeft: "-8px",
              overflow: "hidden",
            }}
          >
            <img
              width="32px"
              height="32px"
              src="https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
            />
          </div>
          <div
            style={{
              borderRadius: "100%",
              background: "#bee3f3",
              width: "32px",
              height: "32px",
              border: "2px solid white",
              marginLeft: "-8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "500px",
            }}
          >
            +2
          </div>
        </div>
      </div>
    </div>
  );
}
