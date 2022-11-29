/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  //let post = "강남 우동 맛집"
  let [logo, setLogo] = useState('치킨 인기순위 월간 베스트')
  let [글제목, 글제목변경] = useState(['1. 굽네치킨 - 고추바사삭', '2. BBQ - 황금올리브 치킨',
   '3. 지코바치킨 - 숯불양념치킨', '4. BHC - 뿌링클', '5. 교촌치킨 - 허니콤보']);
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    따봉변경(따봉 + 1)
  }

  function Modal() {
    return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick={함수}>👍</span> {따봉} </h4>

      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={함수}>👍</span> {따봉} </h4>

      </div>
      <div className="list">
        <h4>{글제목[2]} <span onClick={함수}>👍</span> {따봉} </h4>

      </div>
      <div className="list">
        <h4>{글제목[3]} <span onClick={함수}>👍</span> {따봉} </h4>

      </div>
      <div className="list">
        <h4>{글제목[4]} <span onClick={함수}>👍</span> {따봉} </h4>

      </div>


    </div>
  );
}

export default App;
