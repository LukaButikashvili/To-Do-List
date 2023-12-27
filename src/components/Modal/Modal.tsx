"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import ModalCSS from "./Modal.module.css";

export default function Modal({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <div className={ModalCSS.overlay_styles}>
          <div className={ModalCSS.modal_wrapper}>{children}</div>
        </div>,
        document.body
      )
    : null;
}
