import axios from "axios";
import Table from "../components/table";
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <div>
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <Table />
    </div>
  );
}
