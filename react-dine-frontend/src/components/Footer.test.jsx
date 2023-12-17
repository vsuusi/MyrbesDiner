import {test, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe("Footer component", () => {
    test('renders the text', () => {

        render(<Footer/>)

        const FooterElement = screen.getByText("Myrbes Diner", {exact: false});
        expect(FooterElement).toBeInTheDocument();
    });
});