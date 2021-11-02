import React from "react";
import { withProtected } from "../src/hooks/route";

function Admin({ auth }) {
  const { logout } = auth;
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default withProtected(Admin);
