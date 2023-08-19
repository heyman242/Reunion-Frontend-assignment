import { HiSparkles } from "react-icons/hi";
import { BathRoomIcon, Bed, Dimension, Sparkle } from "../assets/icons";

const EstateCard = ({ estate }) => {
  return (
    <>
      <li
        style={{
          background: "white",
          padding: "0 1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "inherit", position: "relative" }}>
          <img
            src={estate.image}
            alt=""
            style={{
              width: "inherit",
              height: "10rem",
              zIndex: 100,
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          />

          {estate.popular ? (
            <>
              <div
                className="pill"
                style={{
                  position: "absolute",
                  backgroundColor: "var(--color-primary)",
                  padding: ".5rem 1rem",
                  top: "60%",
                  left: "-14px",
                  borderRadius: "8px 8px 8px 4px",
                  color: "var(--color-light)",
                }}
              >
                <Sparkle />
                <span>Popular</span>
              </div>
              <div
                className="triangle"
                style={{
                  width: 0,
                  height: 0,
                  border: "11px solid transparent",
                  borderRight: "11px solid var(--color-primary)",
                  transform: "rotate(137deg)",
                  position: "absolute",
                  top: "75.5%",
                  left: "-7.6px",
                  zIndex: 1,
                }}
              ></div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div style={{ padding: "0.5rem 1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "0.5rem",
            }}
          >
            <div
              style={{
                fontSize: "1.3rem",
                color: "var(--color-primary)",
                fontWeight: 600,
              }}
            >
              ₹ {estate.price}
              <span
                style={{ fontSize: "1rem", color: "var(--color-grey-400)" }}
              >
                /month
              </span>
            </div>
          </div>
          <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>
            {estate.name}
          </div>
          <div className="address">
            {estate.location.address}, {estate.location.city}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.8rem",
              marginTop: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Bed />
              <span style={{ marginLeft: "4px" }}>{estate.data.bed} Bed</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BathRoomIcon />
              <span style={{ marginLeft: "4px" }}>
                {estate.data.bathroom} bathroom
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Dimension />
              <span style={{ marginLeft: "4px" }}>
                {estate.data.dimension} dimension
              </span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default EstateCard;
