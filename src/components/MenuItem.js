import { CDN_URL } from "../utils/constants";

export const MenuShimmer = () => (
  <div className="menu-page">
    <div className="menu-hero">
      <div
        className="shimmer"
        style={{ width: "40%", height: "32px", marginBottom: "12px" }}
      />
      <div
        className="shimmer"
        style={{ width: "55%", height: "16px", marginBottom: "20px" }}
      />
      <div style={{ display: "flex", gap: "12px" }}>
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="shimmer"
              style={{ width: "80px", height: "28px", borderRadius: "20px" }}
            />
          ))}
      </div>
    </div>
    {Array(3)
      .fill(null)
      .map((_, i) => (
        <div key={i} className="menu-category">
          <div
            className="shimmer"
            style={{ width: "200px", height: "22px", marginBottom: "16px" }}
          />
          {Array(4)
            .fill(null)
            .map((_, j) => (
              <div key={j} className="menu-item">
                <div style={{ flex: 1 }}>
                  <div
                    className="shimmer"
                    style={{
                      width: "60%",
                      height: "18px",
                      marginBottom: "10px",
                    }}
                  />
                  <div
                    className="shimmer"
                    style={{
                      width: "25%",
                      height: "14px",
                      marginBottom: "10px",
                    }}
                  />
                  <div
                    className="shimmer"
                    style={{ width: "80%", height: "12px" }}
                  />
                </div>
                <div className="shimmer menu-item-img" />
              </div>
            ))}
        </div>
      ))}
  </div>
);

const MenuItem = ({ item }) => {
  const price = (item.price || item.defaultPrice) / 100;
  const isVeg = item.isVeg === 1;

  return (
    <div className="menu-item">
      <div className="menu-item-info">
        <span className={isVeg ? "veg-dot" : "nonveg-dot"} />
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-price">₹{price}</p>
        {item.description && (
          <p className="menu-item-desc">{item.description}</p>
        )}
      </div>
      {item.imageId && (
        <img
          className="menu-item-img"
          src={CDN_URL + item.imageId}
          alt={item.name}
        />
      )}
    </div>
  );
};

export default MenuItem;