import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=jrJsTYzmK4cFtWtuY728nMFC0ZE6L6TalfP8nOsU&date=${date}`);
}
//위 함수에서는 date 의 기본값을 공백으로 설정하였습니다. 만약에 date 가 주어지지 않았는데 ES6 template literal 문법 ` 가 사용된다면 undefined 가 전달됩니다. undefind 가 전달되면 서버쯕에서 처리하지 못하므로, 해당 값이 비어있을 땐 공백을 넣도록 설정하세요.
