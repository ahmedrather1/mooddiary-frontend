import MoodSubmitter from "./MoodSubmitter";

function HomePage() {
  // eslint-disable-next-line no-lone-blocks
  {
    /* this seems liek a bad way to center 3 items, will fix eventually*/
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1> HomePage </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2> How are you doing today? </h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MoodSubmitter />
      </div>
    </div>
  );
}

export default HomePage;
