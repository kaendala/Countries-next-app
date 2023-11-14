import { CountriesProvider } from '@/context/CountriesContext/CountriesContext';
import countries from '@/mocks/counties.json';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    test('should render correctly', () => {
        render(
            <CountriesProvider>
                <Card info={countries[0]} />
            </CountriesProvider>
        );
        const border = screen.getAllByText('Turks and Caicos Islands')[0]
        expect(border).toBeTruthy();
    });
});
