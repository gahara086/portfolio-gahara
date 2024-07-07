import { useEffect } from 'react';
import { loadModules } from 'esri-loader';
import { Box, Paper, Typography } from '@mui/material';

const MapApp = () => {
  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/WebTileLayer'], { css: true })
      .then(([Map, MapView, WebTileLayer]) => {
        const gsiLayer = new WebTileLayer({
          urlTemplate: "https://cyberjapandata.gsi.go.jp/xyz/std/{level}/{col}/{row}.png",
          copyright: "地理院タイル"
        });

        const map = new Map({
          layers: [gsiLayer] // 国土地理院のレイヤーを追加
        });

        const view = new MapView({
          container: "mapView", // このIDのHTML要素に地図を埋め込む
          map: map,
          center: [139.6917, 35.6895], // 地図の中心地を東京に設定
          zoom: 10 // ズームレベルの設定
        });

        return () => {
          view.destroy(); // コンポーネントのアンマウント時にビューを破棄
        };
      });
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, m: 2 }}>
      <Paper elevation={3} sx={{ width: 1000, maxWidth: '100%', padding: 2 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
          地図アプリ
        </Typography>
        <div id="mapView" style={{ height: '500px', width: '100%' }}>
          {/* 地図が表示される */}
        </div>
      </Paper>
    </Box>
  );
};

export default MapApp;
