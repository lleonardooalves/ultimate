import React, { useContext } from "react";

import StackRoutes from "./stack.routes";
import { AuthContext } from "../contexts/login";
import TabRoutes from "./tab.routes";

function Routes() {
  const { signed } = useContext(AuthContext);
  const loading = false;

  return signed ? <TabRoutes /> : <StackRoutes />;
}

export default Routes;
