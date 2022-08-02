import '../App.css';
import img1 from '../img/sample1.png';
import img2 from '../img/sample2.jpg';
import img3 from '../img/sample3.jpg';
import img4 from '../img/sample4.jpg';
import img5 from '../img/sample5.jpg';
import { Row, Col } from 'react-bootstrap';

function Main(props) {
  const thumb1 = img1;
  const thumb2 = img2;
  const thumb3 = img3;
  const thumb4 = img4;
  const thumb5 = img5;

  return (
    <>
      <br />

      <div className="main_chat_wrap">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="인사말을 남겨보세요!"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              등록
            </button>
          </div>
        </div>
        <div className="chat_history">
          <div className="media">
            <div
              className="mr-3 chat_profile"
              style={{
                backgroundImage: `url(${thumb1})`,
              }}
            ></div>
            <div className="media-body">
              <h5 className="mt-0">짱구</h5>
              <p>
                안녕하십니까?<span>2022.06.18</span>
              </p>
            </div>
          </div>
          <div className="media">
            <div
              className="mr-3 chat_profile"
              style={{ backgroundImage: `url(${thumb2})` }}
            ></div>
            <div className="media-body">
              <h5 className="mt-0">철수</h5>
              <p>
                안녕하십니까?<span>2022.06.18</span>
              </p>
            </div>
          </div>
          <div className="media">
            <div
              className="mr-3 chat_profile"
              style={{ backgroundImage: `url(${thumb3})` }}
            ></div>
            <div className="media-body">
              <h5 className="mt-0">유리</h5>
              <p>
                안녕하십니까?<span>2022.06.18</span>
              </p>
            </div>
          </div>
          <div className="media">
            <div
              className="mr-3 chat_profile"
              style={{ backgroundImage: `url(${thumb4})` }}
            ></div>
            <div className="media-body">
              <h5 className="mt-0">맹구</h5>
              <p>
                안녕하십니까?<span>2022.06.18</span>
              </p>
            </div>
          </div>
          <div className="media">
            <div
              className="mr-3 chat_profile"
              style={{ backgroundImage: `url(${thumb5})` }}
            ></div>
            <div className="media-body">
              <h5 className="mt-0">훈이</h5>
              <p>
                안녕하십니까?<span>2022.06.18</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sell-list">
        <Row>
          {props.data.map((item, index) => {
            return (
              <>
                <Col key={index} sm>
                  <img
                    src={`https://codingapple1.github.io/shop/shoes${
                      index + 1
                    }.jpg`}
                    alt="상품사진"
                    width="100%"
                  />
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                  <p>{item.price}</p>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Main;
