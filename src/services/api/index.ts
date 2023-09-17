import { API_URL } from 'data/constants';
import { questions as mockQuestions } from 'mocks/data';
import { TQuestion, TAnswer, TPagination } from 'types';

let questions = mockQuestions;

interface IGetQuestionProps {
  pagination?: TPagination;
}

export const getQuestions = async ({
  pagination,
}: IGetQuestionProps): Promise<{
  data: TQuestion[];
  total: number;
}> => {
  // account 4

  if (pagination && process.env.NODE_ENV === 'production') {
    const { page, limit } = pagination;
    return {
      data: questions.slice((page - 1) * limit, page * limit),
      total: questions.length,
    };
  }
  if (!pagination && process.env.NODE_ENV === 'production') {
    return { data: questions, total: questions.length };
  }

  let url = `${API_URL}/questions`;

  if (pagination) {
    const { page, limit } = pagination;
    url += `?_page=${page}&_limit=${limit}`;
  }

  // const res = await axios.get(url);
  const res = await fetch(url);
  const data = await res.json();
  const total = res.headers.get('X-Total-Count');

  return { data, total: total ? +total : data.length }; //if the X-Total-Count doesnot exist use the length of the returned array (as it will be all)
};
export const saveAnswer = async (props: {
  answer: TAnswer;
  questionId: number;
}): Promise<TQuestion> => {
  if (process.env.NODE_ENV === 'production') {
    const question = questions.find(
      (item) => item.id === props.questionId
    ) as unknown as TQuestion;
    let updatedQuestion = { ...question, choosenOption: props.answer };
    questions = questions.map((item) =>
      item.id === props.questionId ? updatedQuestion : item
    );
    return updatedQuestion;
  }

  let url = `${API_URL}/questions/${props.questionId}
  `;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ choosenOption: props.answer }),
  };

  // const res = await axios.get(url);
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
