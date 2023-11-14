import { CountriesProvider } from '@/context/CountriesContext/CountriesContext';
import countries from '@/mocks/counties.json';
import { render, screen } from '@testing-library/react';
import CountriesList from './CountriesList';

describe('CountriesList', () => {
    test('should render correctly', () => {
        render(
            <CountriesProvider>
                <CountriesList list={countries} />
            </CountriesProvider>
        );
        const border = screen.getAllByText('Turks and Caicos Islands')[0]
        expect(border).toBeTruthy();
    });
});
