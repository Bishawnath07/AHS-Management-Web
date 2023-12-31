import React from "react";

const NotFound404 = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
        Oops! It looks like the page you are trying to reach doesn't exist.
      </p>
      {/* Add your creative elements, such as images, animations, or custom styles */}
      {/* <img
        src="https://example.com/path/to/404-image.png"
        alt="404 Illustration"
        style={{ width: "300px", height: "auto" }}
      /> */}
    </div>
  );
};

export default NotFound404;
