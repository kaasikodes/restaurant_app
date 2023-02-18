import { useEffect, useState } from 'react';
import { getQuestions } from 'services/api';
import { TPagination, TQuestion, TRequestState } from 'types';
interface IProps {
  pagination?: TPagination;
}
type TData = {
  questions: TQuestion[];
  total: number;
};
const useFetchQuestions = ({ pagination }: IProps) => {
  const [reqState, setReqState] = useState<TRequestState>('loading');
  const [data, setData] = useState<TData | null>(null);
  useEffect(() => {
    setReqState('loading');

    getQuestions({ pagination })
      .then((res) => {
        const items = res.data.map((item): TQuestion => ({ ...item }));

        setData({ questions: items, total: res.total });
        setReqState('success');
      })
      .catch(() => setReqState('error'));
  }, [pagination]);

  return {
    data,
    reqState,
  };
};

export default useFetchQuestions;
