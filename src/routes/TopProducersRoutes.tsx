import React from "react";

import routes from "constants/routes";
import { TopProducers } from "screens";

import ProducerRoutes from "./ProducerRoutes";

export default function TopProducerRoutes() {
  const { TOP_PRODUCERS } = routes;

  return (
    <ProducerRoutes RootComponent={TopProducers} rootPath={TOP_PRODUCERS} />
  );
}
