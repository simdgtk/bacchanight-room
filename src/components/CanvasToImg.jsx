import "../styles/components/_button.scss";
export default function CanvasToImg({ glRef }) {
  function download() {
    if (glRef.current) {
      // canvas to webp
      const canvas = glRef.current.domElement; // canvas
      const imgData = canvas.toDataURL("image/webp");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "canvas_capture.webp";
      link.click();
    } else {
      console.error("Le canvas n'a pas été trouvé");
    }
  }

  return (
    <button
      style={{ zIndex: 3, position: "fixed", bottom: "10px", right: "10px" }}
      onClick={download}
    >
      Ajouter au musée collaboratif !
    </button>
  );
}
