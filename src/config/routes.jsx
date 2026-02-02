import OverView from "../Components/Overview";
import Transaction from "../Components/Transaction";
import Budget from "../Components/Budget";
import Pots from "../Components/Pots";
import RecurringBill from "../Components/Recurring";
import Withdral from "../Components/WithDraw";
import Delete from "../Components/delete";

const routeConfig = {
  main: [
    // ❌ REMOVE "/" — index route already handles Overview
    { path: "transaction", element: <Transaction /> },
    { path: "budget", element: <Budget /> },
    { path: "pots", element: <Pots /> },
    { path: "recurring", element: <RecurringBill /> },
    { path: "edit", element: <Withdral /> },
    { path: "delete", element: <Delete /> },
  ],
};

export default routeConfig;
