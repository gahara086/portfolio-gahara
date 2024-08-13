import { useEffect, useState } from 'react';
import { Container, Typography, MenuItem, Select, FormControl, InputLabel, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const cities = [
  { name: 'Tokyo', label: '東京' },
  { name: 'Yokohama', label: '横浜' },
  { name: 'Osaka', label: '大阪' },
  { name: 'Nagoya', label: '名古屋' },
  { name: 'Sapporo', label: '札幌' },
  { name: 'Fukuoka', label: '福岡' },
  { name: 'Kobe', label: '神戸' },
  { name: 'Kyoto', label: '京都' },
  { name: 'Kawasaki', label: '川崎' },
  { name: 'Saitama', label: 'さいたま' },
];

const weatherTranslations: Record<string, string> = {
  // 晴
  'clear sky': '快晴',

  // 曇
  'few clouds': '少し曇り',
  'scattered clouds': '雲が散在',
  'broken clouds': '雲が多い',
  'overcast clouds': '曇り',

  // 雨
  'light rain': '小雨',
  'moderate rain': '中程度の雨',
  'heavy intensity rain': '強い雨',
  'very heavy rain': '非常に強い雨',
  'extreme rain': '猛烈な雨',
  'freezing rain': '凍雨',
  'light intensity shower rain': '弱いにわか雨',
  'shower rain': 'にわか雨',
  'heavy intensity shower rain': '強いにわか雨',
  'ragged shower rain': '断続的なにわか雨',

  // 霧雨
  'light intensity drizzle': '弱い霧雨',
  'drizzle': '霧雨',
  'heavy intensity drizzle': '強い霧雨',
  'light intensity drizzle rain': '弱い霧雨性の雨',
  'drizzle rain': '霧雨性の雨',
  'heavy intensity drizzle rain': '強い霧雨性の雨',
  'shower rain and drizzle': 'にわか雨と霧雨',
  'heavy shower rain and drizzle': '強いにわか雨と霧雨',
  'shower drizzle': 'にわか霧雨',

  // 雷雨
  'thunderstorm with light rain': '小雨を伴う雷雨',
  'thunderstorm with rain': '雨を伴う雷雨',
  'thunderstorm with heavy rain': '大雨を伴う雷雨',
  'light thunderstorm': '弱い雷雨',
  'thunderstorm': '雷雨',
  'heavy thunderstorm': '激しい雷雨',
  'ragged thunderstorm': '断続的な雷雨',
  'thunderstorm with light drizzle': '霧雨を伴う弱い雷雨',
  'thunderstorm with drizzle': '霧雨を伴う雷雨',
  'thunderstorm with heavy drizzle': '強い霧雨を伴う雷雨',

  // 雪
  'light snow': '小雪',
  'snow': '雪',
  'heavy snow': '大雪',
  'sleet': 'みぞれ',
  'light shower sleet': '弱いにわかみぞれ',
  'shower sleet': 'にわかみぞれ',
  'light rain and snow': '弱い雨雪',
  'rain and snow': '雨雪',
  'light shower snow': '弱いにわか雪',
  'shower snow': 'にわか雪',
  'heavy shower snow': '強いにわか雪',

  // 大気
  'mist': 'もや',
  'smoke': '煙',
  'haze': 'かすみ',
  'sand/dust whirls': '砂塵旋風',
  'fog': '濃霧',
  'sand': '砂',
  'dust': '粉塵',
  'volcanic ash': '火山灰',
  'squalls': 'スコール',
  'tornado': '竜巻'
};

// 無料利用枠の機能は制限されており、1日に要求できるのは100件まで
const API_KEY = '48b5564e33edbe68caff4c3466930b44'; // OpenWeatherMapのAPIキー

const WeatherApp = () => {
  const [city, setCity] = useState<string>(cities[0].name);
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + API_KEY;
        const response = await axios.get(
          url
          // TODO: なぜか下記で動作しない 要調査
          // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          // "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=48b5564e33edbe68caff4c3466930b44"
        );
        console.log(response.data)
        setWeather(response.data);
      } catch (err) {
        setError('Failed to fetch weather data.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const getWeatherDescriptionInJapanese = (description: string) => {
    return weatherTranslations[description] || description;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        天気情報表示アプリ
      </Typography>
      <Typography paragraph>
        useEffectは、コンポーネントの副作用を管理するためのReactフックです。このアプリでは、
        <strong>fetchWeather</strong>という関数を使って、選択された都市の天気情報をAPIから取得する処理を行っています。<br />
        <strong>useEffect</strong>は、コンポーネントがマウントされたときや依存配列の値が変更されたときに、指定された副作用処理を実行します。
        このアプリでは、都市が変更されるたびに天気情報を再取得し、取得したデータを状態に保存して表示を更新します。<br />
        具体的には、<strong>city</strong>という状態が変更されるたびに、<strong>fetchWeather</strong>関数が実行され、APIから新しい天気情報が取得されます。
        取得したデータは<strong>weather</strong>という状態に保存され、コンポーネントが再レンダリングされることで画面に反映されます。<br />
      </Typography>
      <FormControl variant="outlined" margin="normal" sx={{ width: 300 }}>
        <InputLabel>都市を選択</InputLabel>
        <Select
          value={city}
          onChange={(e) => setCity(e.target.value as string)}
          label="都市を選択"
        >
          {cities.map((city) => (
            <MenuItem key={city.name} value={city.name}>
              {city.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      {weather && (
        <Box mt={2}>
          <Typography variant="body1">温度: {weather.main.temp}°C</Typography>
          <Typography variant="body1">天気: {getWeatherDescriptionInJapanese(weather.weather[0].description)}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default WeatherApp;
