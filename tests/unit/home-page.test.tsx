import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage (Level 0 smoke test)', () => {
  it('renders without crashing and shows foundation status', () => {
    render(<HomePage />);
    expect(screen.getByText(/Level 0 foundation is live/i)).toBeInTheDocument();
  });
});
