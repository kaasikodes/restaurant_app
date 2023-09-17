import { screen, render } from 'test-utils';
import { Layout } from './component';

describe('Does the layout render properly', () => {
  test('Render the descriptive text', () => {
    render(<Layout />);
    const comp =
      screen.getByText(`A specailly curated test to find out your personality. Are you an
        extrovert or an introvert and to what degree are you an extrovert or
        an introvert.`);
    expect(comp).toBeInTheDocument();
  });
});
