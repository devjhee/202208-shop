// import { useNavigate } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const { paraid } = useParams();
  console.log('check this : ' + paraid);
  const myProduct = props.data.find(function (i) {
    return i.id == paraid;
  });

  return (
    <>
      <div className="container">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
