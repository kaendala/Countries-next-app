import { CountriesProvider } from '@/context/CountriesContext/CountriesContext';
import countries from '@/mocks/counties.json';
import { fireEvent, render, screen } from '@testing-library/react';
import DropDown from './DropDown';

describe('DropDown', () => {
    test('should submit without filer', async() => {
        const submit = jest.fn()
        const dropdown=render(
            <CountriesProvider>
                <DropDown list={countries} submit={submit} />
            </CountriesProvider>
        );
        const opener=dropdown.container.querySelector("#opener")
        fireEvent.click(opener as Element);
        const button =await screen.findByText('All');
        fireEvent.click(button);
        expect(submit).toHaveBeenCalled();
    });
    test('should submit with filter', async () => {
        const submit = jest.fn()
        const dropdown = render(
            <CountriesProvider>
                <DropDown list={countries} submit={submit} />
            </CountriesProvider>
        );
        const opener = dropdown.container.querySelector("#opener")
        fireEvent.click(opener as Element);
        const button = await screen.findByText('Americas');
        fireEvent.click(button);
        expect(submit).toHaveBeenCalled();
    });
});
