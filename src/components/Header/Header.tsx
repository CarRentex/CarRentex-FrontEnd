import React, { useEffect, useRef } from "react";

type Props = {
  src:any
}

function Header(props: Props){


  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: `url(${props.src})`

          }}
        ></div>
        <div
          className="page-header-image"
          style={{
          }}
        ></div>
      </div>
    </>
  );
}

export default Header;
