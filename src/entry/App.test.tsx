import {describe, expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import { App } from './App';


describe('DefaultNavbar',() => {
    test('renders', async () => {
        render(
            <App/>
        )
        await screen.getByText('Hello')
        expect(screen.getByText('Hello')).toBeTruthy()
    })
})