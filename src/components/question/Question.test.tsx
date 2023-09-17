import { questions } from 'mocks/data';
import { screen, render } from 'test-utils';
import Question from './Question';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe('Question', () => {
  test('Render a form', () => {
    render(<Question item={questions[0]} />);
    const comp = screen.getByRole('form');
    expect(comp).toBeInTheDocument();
  });
});
