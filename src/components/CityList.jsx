import Spinner from './Spinner';
import styles from './CityList.module.css';
import CityItem from './CityItem';
import Message from './Message';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

//////////////////////////////

// ※ Fake server 구축을 위해,

// - npm i json-server

// - package.json script에 아래 문구 추가
// "server": "json-server --watch data/cities.json --port 8000 --delay 500"

// - npm run server
