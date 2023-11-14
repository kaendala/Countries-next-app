import { CountriesProvider } from '@/context/CountriesContext/CountriesContext';
import countries from '@/mocks/counties.json';
import { fireEvent, render } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
    test('should submit ', async() => {
        const submit = jest.fn()
        const searchComponent=render(
            <CountriesProvider>
                <Search list={countries} submit={submit} />
            </CountriesProvider>
        );
        const input = await searchComponent.container.querySelector('#inputSearch');
        fireEvent.change(input as Element, { target: { value:'Colombia' }});
        expect(submit).toHaveBeenCalled();
    });
});
