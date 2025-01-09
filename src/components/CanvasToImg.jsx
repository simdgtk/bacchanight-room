export default function CanvasToImg({ infos = null }) {
  const handleDownload = () => {
    if (infos && infos.current) {
      var gl = infos.current.getContext("experimental-webgl", {
        preserveDrawingBuffer: true,
      });
      console.log("gl:", gl);
      var img = new Image();
      img.src = infos.current.toDataURL("image/png");
      var a = document.createElement("a");
      a.href = img.src;
      a.download = "screenshot.png";
      a.click();
    } else {
      console.error("Le renderer WebGL n'est pas accessible");
    }
  };

  return (
    <div style={{ position: "fixed", zIndex: 1, top: "10px", left: "10px" }}>
      <h1>Canvas to Image</h1>
      <button onClick={handleDownload}>Télécharger l&apos;image</button>
    </div>
  );
}
