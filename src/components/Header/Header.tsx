import React, { useEffect, useRef } from "react";

// reactstrap components

// core components

function Header() {
  const pageHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        const windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };

      window.addEventListener("scroll", updateScroll);

      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../images/car/car4.jpeg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div
          className="page-header-image"
          style={{
          }}
          ref={pageHeader}
        ></div>
      </div>
    </>
  );
}

export default Header;
