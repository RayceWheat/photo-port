import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact compnet', () => {
    it('renders', () => {
        render(<ContactForm>

        </ContactForm>);
    });

    it('matches snapshot', () =>{
        const { asFragment } = render(<ContactForm

        />);

        expect(asFragment()).toMatchSnapshot;
    });
})

describe('Contact me text', () => {
    it('Contact me text', () => {
        const { getByTestId } = render(<ContactForm/>);

        expect(getByTestId('contact')).toHaveTextContent('Contact me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
    });
})