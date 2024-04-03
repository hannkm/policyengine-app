import LinkButton from "controls/LinkButton";
import useDisplayCategory from "./useDisplayCategory";
import Hero from "../images/hero.png";
import useCountryId from "./useCountryId";

export default function HomeLanding() {
  const displayCategory = useDisplayCategory();
  const mobile = displayCategory === "mobile";
  const tablet = displayCategory === "tablet";
  const countryId = useCountryId();

  return (
    <div
      style={{
        height: mobile ? 600 : 500,
        position: "relative",
      }}
    >
      <img
        src={Hero}
        style={{
          width: "100%",
          height: mobile ? 600 : "100%",
          objectFit: "cover",
          position: "absolute",
        }}
        alt="Neon-style abstract lights background"
      />
      <div
        style={{
          width: mobile ? "80vw" : "60vw",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            flexDirection: mobile || tablet ? "column" : "row",
            gap: mobile || tablet ? 50 : 30,
            height: "100%",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundColor: "rgb(23, 53, 79, 0.7)",
            padding: 40,
          }}
        >
          <div
            style={{
              width: mobile || tablet ? "100%" : "50%",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: mobile || tablet ? 40 : 55,
                alignItems: "center",
                margin: 0,
              }}
            >
              Computing Public Policy for Everyone
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              width: mobile || tablet ? "100%" : "50%",
            }}
          >
            <LinkButton
              text="Compute my taxes and benefits"
              link={`/${countryId}/household`}
              width="100%"
            />
            <LinkButton
              text="Compute policy reform impacts"
              link={`/${countryId}/policy`}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
