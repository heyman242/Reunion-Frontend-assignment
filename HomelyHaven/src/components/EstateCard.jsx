import { HiSparkles } from "react-icons/hi";
import { BathRoomIcon, Bed, Dimension, Sparkle } from "../assets/icons";

const EstateCard = ({ estate }) => {
  return (
    <li
      style={{
        background: "white",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #000",
        borderRadius: "8px",
        width: "430px",
        position: "relative",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
      }}
    >
      <img
        src={estate.image}
        alt=""
        style={{
          width: "100%",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />

      {estate.popular && (
        <div
          className="pill"
          style={{
            position: "absolute",
            backgroundColor: "yellow",
            top: "0px",
            right: "0px",
            borderRadius: "8px",
            color: "var(--color-light)",
            display: "flex",
            alignItems: "center",
            padding: "0.2rem 0.5rem",
            fontSize: "0.75rem",
          }}
        >
          <HiSparkles className="h-3 mr-1" />
          <p className="text-xs text-center text-black">POPULAR</p>
        </div>
      )}

      <div style={{ padding: "0.5rem 1rem", flex: "1", width: "100%" }}>
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
            <span style={{ fontSize: "1rem", color: "var(--color-grey-400)" }}>
              /month
            </span>
          </div>
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: 600 }}>{estate.name}</div>
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
  );
};

export default EstateCard;
