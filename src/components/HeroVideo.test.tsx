import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroVideo } from './HeroVideo';

describe('HeroVideo', () => {
  it('renders the title', () => {
    render(<HeroVideo title="Welcome" />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});
