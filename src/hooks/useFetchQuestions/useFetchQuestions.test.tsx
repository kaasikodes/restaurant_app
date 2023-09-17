import { renderHook, waitFor } from '@testing-library/react';
import { questions } from 'mocks/data';

import useFetchQuestions from './useFetchQuestions';

describe('useFetchQuestions', () => {
  test('should return null as data when state is loading', () => {
    const { result } = renderHook(useFetchQuestions);
    expect(result.current.data).toBe(null);
  });
  test('should return all data on component mounting', async () => {
    const { result } = renderHook(useFetchQuestions);
    await waitFor(() => {
      expect(result.current.reqState).toBe('success');
    });
  });
  test('should return paginated data', async () => {
    const { result } = renderHook(useFetchQuestions, {
      initialProps: {
        pagination: {
          page: 1,
          limit: 2,
        },
      },
    });

    await waitFor(() => {
      expect(result.current.data?.questions.length).toBe(2);
    });
  });
  test('should return the correct total count of data', async () => {
    const { result } = renderHook(useFetchQuestions, {
      initialProps: {
        pagination: {
          page: 1,
          limit: 1,
        },
      },
    });

    await waitFor(() => {
      expect(result.current.data?.total).toBe(questions.length);
    });
  });
});
