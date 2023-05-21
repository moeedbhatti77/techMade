import PageTitle from "./components/pageTitle";
import TimelineBox from "./components/timelineBox";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:5000/api/projectTimelines"
      );
      setData(response.data);
    })();
  }, []);
  return (
    <div>
      <PageTitle title={"Project 1 Timeline"} />
      <div class="flex-container">
        {Array.isArray(data) &&
          data.map((item, index) => <TimelineBox key={index} data={item} />)}
      </div>
    </div>
  );
}
