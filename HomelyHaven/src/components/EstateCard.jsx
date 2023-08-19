import { HiSparkles } from "react-icons/hi";
import { BathRoomIcon, Bed, Dimension, Sparkle } from "../assets/icons";

const EstateCard = ({ estate }) => {
  return (
    <>
      <li
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #000",
          borderRadius: "6px", 
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
              <HiSparkles className="h-3" />
              <p className="text-xs text-center text-black">POPULAR</p>
            </div>
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
