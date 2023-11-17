"use client"

import { useEffect, useState } from "react";

export default function InstallButton() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!window.matchMedia("(display-mode: standalone)").matches) {
      setVisible(false);
    }
  }, []);

  return (
    <>
      <style>{`
        .install-btn {
          border-radius: 5px;
          display: inline-flex;
          gap: 2px;
          justify-items: center;
          align-items: center;
          border: 1px solid #2b6cb0;
          padding: 5px 8px;
          position: absolute;
        }
      `}</style>
      <a href="/parents/install" className="install-btn" hidden={visible}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#2b6cb0"
          aria-hidden="true"
        >
          <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3h-2z"></path>
          <path d="m17 11.5-1.4-1.4-2.6 2.6V4h-2v8.7L8.4 10 7 11.5l5 5z"></path>
        </svg>
        Guardar
      </a>
    </>
  );
}
