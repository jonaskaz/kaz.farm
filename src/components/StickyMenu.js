import { useState, useEffect, useCallback } from "react";

const StickyMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const toggleSticky = useCallback(
    ({ top, bottom }) => {
      if (top <= 0 && bottom > 2 * 68) {
        !isSticky && setIsSticky(true);
      } else {
        isSticky && setIsSticky(false);
      }
    },
    [isSticky]
  );
  return <div>Test</div>;
};

export default StickyMenu;
