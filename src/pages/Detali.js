import Button from "components/Button";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const params = useParams();
  const navigator = useNavigate();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(params.id))
  );
  const { id, title, text } = todo;
  return (
    <StWrap>
      <StDetailCon>
        <StButtonCon>
          <p>id: {id}</p>
          <Button width="70px" onClick={() => navigator(-1)}>
            이전으로
          </Button>
        </StButtonCon>
        <StContentsCon>
          <h1>{title}</h1>
          <p>{text}</p>
        </StContentsCon>
      </StDetailCon>
    </StWrap>
  );
}

const StWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StDetailCon = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const StContentsCon = styled.div`
  padding: 5%;
  h1 {
    margin-bottom: 5%;
  }
`;

const StButtonCon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 3%;
  color: #fff;
  background-color: #bf79f8;
`;

export default Detail;
