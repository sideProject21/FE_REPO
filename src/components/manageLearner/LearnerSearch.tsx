import useInput from "@/hooks/useInput";
import SearchIcon from "@assets/svg/searchIcon.svg?react";
import { useEffect } from "react";

const LearnerSearch = () => {
	const [keyword, setKeyword] = useInput("");

	const searchLearnerHandler = () => {
		// TODO : keyword에 입력이 있을 경우에만 검색되게 API 구현되면 추가 예정
		console.log(keyword);
	};

	useEffect(() => {
		if (keyword.length !== 0) {
			searchLearnerHandler();
		}
	}, [keyword]);

	return (
		<div className="mt-[1.375rem] flex items-center border-b border-black-800 ">
			<input
				type="text"
				onChange={setKeyword}
				className="h-12 w-full bg-inherit outline-none placeholder:text-black-300"
				placeholder="찾고 있는 학생을 검색해보세요."
			/>
			<SearchIcon width={24} height={24} className="mr-[0.875rem]" />
		</div>
	);
};

export default LearnerSearch;
