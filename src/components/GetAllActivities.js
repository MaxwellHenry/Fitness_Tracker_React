import React, { useEffect } from "react";

import { getActivities } from "../api";

const GetAllActivities = (props) => {
  const { activities, setActivities } = props;

  useEffect(() => {
    getActivities()
      .then((activities) => {
        setActivities(activities);
      })
      .catch(console.error);
  });

  return (
    <ul>
      {activities.map((activity, index) => {
        return (
          <li key={index}>
            Activity {index + 1}
            <ul>
              <li>{activity.name}</li>
              <li>{activity.description}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default GetAllActivities;
