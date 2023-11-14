import { ThemeProvider } from '@/context/ThemeContext/ThemeContext';
import { fireEvent, render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('should render ', async() => {
        const headerComponent=render(
        <ThemeProvider>
            <Header />
        </ThemeProvider>
        );
        const button = await headerComponent.container.querySelector('#changeTheme');
        fireEvent.click(button as Element);
        expect(headerComponent).toBeTruthy();
    });
});
