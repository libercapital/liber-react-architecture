import { render, screen } from '@testing-library/react';

import Heading from './';

describe('<Heading />', () => {
  it('should render Heading default', () => {
    render(<Heading>Heading</Heading>);

    const heading = screen.getByRole('heading', { name: /Heading/i });

    expect(heading).toBeInTheDocument();

    expect(heading).toHaveStyle({
      'font-size': '4.2rem',
      'line-height': '5rem',
    });
  });
});
