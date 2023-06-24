import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  // URL Params
  const { userId } = useParams();
  // const userId = params.userId

  return (
    <div>
      <h2>Details about User {userId}</h2>
    </div>
  );
};

export default UserDetails;
