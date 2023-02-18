import { Button, Form, Radio } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAnswer } from 'services/api';

import { TPagination, TQuestion } from 'types';

interface IProps {
  item: TQuestion;
  handleNext: () => void;
  handlePrev: () => void;
  pagination: TPagination;
  total: number;
}

const Question = ({
  item,
  handleNext,
  pagination,
  handlePrev,
  total,
}: IProps) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data: any) => {
    setLoading(true);
    const choosenOption = item.options.find(
      (item) => item.id === data.choosenOption
    );
    if (choosenOption) {
      saveAnswer({
        questionId: item.id,

        answer: {
          questionId: item.id,
          optionId: data.choosenOption,
          answer: {
            extrovertValue: choosenOption?.extrovertValue,
            introvertValue: choosenOption?.introvertValue,
          },
        },
      })
        .then((res) => {
          setLoading(false);
          if (pagination.page === total) {
            navigate('/personality/result', { replace: true });
          } else {
            handleNext();
          }
        })
        .catch(() => setLoading(false));
    }
  };
  const handleSaveAnswer = () => {
    form.submit();
  };
  return (
    <div>
      <Form
        layout="vertical"
        size="large"
        form={form}
        onFinish={handleSubmit}
        requiredMark={false}
        initialValues={{
          choosenOption: item.choosenOption?.optionId,
        }}
      >
        <Form.Item
          label={`${pagination.page}.) ${item.content}`}
          name="choosenOption"
          rules={[
            {
              required: true,
              message: 'Please answer question before proceeding',
            },
          ]}
        >
          <Radio.Group>
            <div className="flex flex-col gap-3">
              {item.options.map((opt) => (
                <Radio value={opt.id} key={opt.id}>
                  {opt.content}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        </Form.Item>
      </Form>
      <div className="flex justify-between">
        <Button onClick={handlePrev}>Previous</Button>

        <Button onClick={handleSaveAnswer} loading={loading}>
          {pagination.page === total ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default Question;
