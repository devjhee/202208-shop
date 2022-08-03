// import { useNavigate } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Detail(props) {
  const { paraid } = useParams();
  //console.log('check this : ' + paraid);
  const myProduct = props.data.find(function (i) {
    return i.id == paraid;
  });

  useEffect(() => {
    //side-effect : 부가기능 > useEffect : 부가기능함수
    //mount (+ update)될 때 실행되는 소스
    //어려운 연산이나 서버에서 데이터를 가져오는 작업, 타이머 장착 등 시간이 소요되는 소스를 주로 작성함
    //html 렌더링 후에 동작함
    //<React.StrictMode> 설정되어있어 console이 2번 찍힘

    console.log('bye');
    setTimeout(() => {
      setDisplay(!display);
    }, 5000);

    return () => {
      console.log(
        'useEffect 동작 전에 실행됨 / 기존 소스와 충돌되어 제거하고 싶을 때 사용'
      );
    };
  }, []); //[]는 useEffect 실행조건 기재하는 자리

  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="container">
        <br />
        {!display && (
          <>
            <div className="alert alert-warning">2초 이내 구매시 할인</div>
          </>
        )}
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                myProduct.id + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{myProduct.title}</h4>
            <p>{myProduct.content}</p>
            <p>{myProduct.price}</p>
            <button className="btn btn-danger">주문하기</button>
            <br />
            <br />
            <button
              className="btn"
              style={{ backgroundColor: 'blue', color: 'white' }}
              onClick={() => setCount(count + 1)}
            >
              Like {count}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
