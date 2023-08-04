import React, { useEffect, useRef, useState } from "react";
import { SkinViewer, IdleAnimation } from "skinview3d";

interface PlayerRenderProps {
  username: string;
}

function PlayerRender({ username }: PlayerRenderProps) {
  const [uuid, setUuid] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);



  useEffect(() => {
    fetch(`http://localhost:5000/api/player/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching player data");
        }
        return response.json();
      })
      .then((data) => {
        setUuid(data.id);
      });
  }, [username]);

  useEffect(() => {
    if (canvasRef.current && uuid) {
      const skinViewer = new SkinViewer({
        canvas: canvasRef.current,
        width: 200,
        height: 300,
        skin: `https://mc-heads.net/skin/${uuid}`,
      });

      skinViewer.animation = new IdleAnimation();
      skinViewer.controls.enableRotate = true;
      skinViewer.controls.enableZoom = false;
    }
  }, [uuid]);

  return <canvas className="skin display" id="skin" ref={canvasRef}></canvas>;
}

export default PlayerRender;
