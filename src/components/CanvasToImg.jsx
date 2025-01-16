import "../styles/components/_button.scss";
import { useState } from "react";
export default function CanvasToImg({ glRef }) {
  const [isDownloading, setIsDownloading] = useState(false);
  function download() {
    setIsDownloading(true);
    if (glRef.current) {
      // canvas to webp
      const canvas = glRef.current.domElement; // canvas

      setTimeout(() => {
        console.log("canvas", canvas);
        canvas.toBlob((blob) => {
          const formData = new FormData();
          formData.append("file", blob, new Date().getTime() + ".webp");
          fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((response) => console.log(JSON.stringify(response)));
        }, "image/webp");

        // .catch((error) => console.error("Error:", error));
      }, 100);
    } else {
      console.error("Le canvas n'a pas été trouvé");
    }
    setTimeout(() => {
      window.location.href = "/";
      setIsDownloading(false);
    }, 500);
  }

  return (
    <button
      style={{ zIndex: 3, position: "fixed", top: "10px", right: "10px" }}
      onClick={download}
      className={isDownloading ? "disabled" : ""}
    >
      Ajouter au musée collaboratif
    </button>
  );
}
