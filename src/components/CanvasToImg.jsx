import "../styles/components/_button.scss";
export default function CanvasToImg({ glRef }) {
  function download() {
    if (glRef.current) {
      // canvas to webp
      const canvas = glRef.current.domElement; // canvas

      setTimeout(() => {
        console.log("canvas", canvas);
        canvas.toBlob((blob) => {
          const formData = new FormData();
          formData.append("file", blob, new Date().getTime() + ".png");
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
