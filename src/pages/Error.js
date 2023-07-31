import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>Something went wrong!</h1>
        <p>Coul not found this page.</p>
      </main>
    </Fragment>
  );
}
