import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nexPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nexPathname) {
          history.push(nexPathname);
        }
      },
    });
    /* este es para llamar solo la primera vez  ya que no se ejecuta el listen */
    /*     onParentNavigate(history.location); */
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};

export default MarketingApp;
