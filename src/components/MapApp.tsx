import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

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
    // アプリの紹介文も入れる
    // サイズは調整する
    <div id="mapView" style={{ height: '500px', width: '100%' }}>
      {/* 地図が表示される */}
    </div>
  );
};

export default MapApp;
