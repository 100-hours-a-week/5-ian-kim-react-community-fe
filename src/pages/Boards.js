import styled from "styled-components";
import BoardList from "../components/boards-form/BoardList";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
// import data from "../data.json"
import { useNavigate } from "react-router-dom";

const Boards = () => {
    const StyledButton = styled(Button)`
        width: 138px;
        height: 39px;
        align-self: flex-end;
        border-radius: 16px;
    `
    const StyledContent = styled.span`
        text-align: center;
        font-size: 24px;
    `

    const navigate = useNavigate();
    return (
        <>
            <StyledContent style={{textAlign : "center"}}>안녕하세요,<br></br>아무 말 대잔치 <b>게시판</b> 입니다.</StyledContent>
            <StyledButton title="게시글 작성" />
            <BoardList onClickItem={(boardId) => {
                        navigate(`/boards/${boardId}`);
                    }}/>
        </>
    );
}
export default Boards;