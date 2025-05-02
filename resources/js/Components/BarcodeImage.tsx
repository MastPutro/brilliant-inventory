// Components/BarcodeImage.tsx

import { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";

interface BarcodeImageProps {
  value: string;
}

export default function BarcodeImage({ value }: BarcodeImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (canvasRef.current) {
      JsBarcode(canvasRef.current, value, {
        format: "CODE128",
        displayValue: false,
        width: 2,
        height: 60,
        margin: 0
      });
      const url = canvasRef.current.toDataURL("image/png");
      setImageUrl(url);
    }
  }, [value]);

  return (
    <>
      {/* Hide canvas */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      
      {imageUrl && (
        <img src={imageUrl} alt="Barcode" className="w-50 mx-auto" />
      )}
    </>
  );
}
