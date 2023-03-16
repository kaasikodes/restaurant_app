import React from 'react';
import { TPagination, TQuestion } from 'types';
import Question from './Question';
interface IProps {
  data: TQuestion[];
  pagination: TPagination;
  handleNext: () => void;
  handlePrev: () => void;
  total: number;
}

const QuestionList = ({
  data,
  pagination,
  handleNext,
  handlePrev,
  total,
}: IProps) => {
  return (
    <div>
      {data.map((item) => (
        <Question
          key={item.id}
          item={item}
          pagination={pagination}
          handleNext={handleNext}
          handlePrev={handlePrev}
          total={total}
        />
      ))}
    </div>
  );
};

export default QuestionList;
