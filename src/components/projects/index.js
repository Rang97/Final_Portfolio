// 1. 개별 프로젝트 컴포넌트들을 가져옵니다.
import Project1 from "./projects_1";
// import Project3 from './projects_3'; <-- 프로젝트가 늘어나면 계속 추가

// 2. id를 키(Key)로 하고 컴포넌트를 값(Value)으로 하는 매핑 객체를 export 합니다.
export const projectComponents = {
  "01": Project1,
};
