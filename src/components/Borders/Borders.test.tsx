import { CountriesProvider } from '@/context/CountriesContext/CountriesContext';
import { render, screen } from '@testing-library/react';
import Borders from './Borders';

describe('Borders', () => {
    const items = ["BRA", "ECU", "PAN", "PER", "VEN"]
    
    test('should render correctly', () => {
        render(
            <CountriesProvider>
                <Borders codeList={items} />
            </CountriesProvider>
        );
        const border = screen.getAllByText('PER')[0]
        expect(border).toBeTruthy();
    });
});
