import {describe, expect, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import ProjectListing from './ProjectListing';


describe('ProjectListing',() => {
    test('renders', async () => {
        render(
            <ProjectListing
                title='myProject'
                description='myProject'
                imgpath='somethimg'
            />
        )
        await screen.findAllByText('myProject')
        expect(screen.findAllByText('myProject')).toBeTruthy()
    })
})