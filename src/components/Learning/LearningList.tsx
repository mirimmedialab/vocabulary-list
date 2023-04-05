import styled from "@emotion/styled";
import { IoIosArrowBack } from "react-icons/io";
import { learningData } from "@/components/Learning/data";
import { LearningCard } from "@/components/Learning/LearningCard";
import { useRouter } from "next/router";

export default function LearningList() {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/voca-list");
  };

  /*
    category	여행 TRAVEL	
    number	50
  */
  const category = localStorage.getItem("category");
  const number = localStorage.getItem("number");

  learningData[0];
  console.log(category, number); // "여행 TRABLE", "50"  -> 둘 다 스트링으로 들어옴

  return (
    <LearningListContainer>
      <LearningListHeader>
        <IoIosArrowBack style={{ fontSize: "24px", display: "flex", alignItems: "center" }} onClick={handleBack} />
        <LearningListHeaderTypo>Part 1</LearningListHeaderTypo>
      </LearningListHeader>
      <LearningListBody>
        {learningData.map((r) => (
          <LearningCard
            key={r.seq}
            seq={r.seq}
            isLearning={r.isLearning}
            isFavorite={r.isFavorite}
            word={r.word}
            mean={r.mean}
            mean2={r.mean2}
            audio={r.audio}
          />
        ))}
      </LearningListBody>
    </LearningListContainer>
  );
}

const LearningListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: auto;
`;
const LearningListHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 4px;
  border-bottom: 1px solid #cccccc;
`;
const LearningListHeaderTypo = styled.div`
  font-size: 20px;
  height: 24px;
  margin-left: 4px;
`;

const LearningListBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  padding: 20px;
  /* margin-right: 10px; */
`;
