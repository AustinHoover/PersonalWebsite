import {describe, expect, test} from '@jest/globals';
import { DefaultNavbar } from './DefaultNavbar';
import {render, screen} from '@testing-library/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


describe('DefaultNavbar',() => {
    test('renders', async () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<DefaultNavbar name="test"/>}/>
                </Routes>
            </BrowserRouter>
        )
        await screen.getByText('Home')
        expect(screen.getByText('Home')).toBeTruthy()
    })
})