import { TQuestion, TAnswer, TPagination } from 'types';

interface IGetQuestionProps {
  pagination?: TPagination;
}

export const getQuestions = async ({
  pagination,
}: IGetQuestionProps): Promise<{
  data: TQuestion[];
  total: number;
}> => {
  let url = `http://localhost:8000/questions`;

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
  let url = `http://localhost:8000/questions/${props.questionId}
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
