import React from 'react';

import ProfileList from '../ProfileList';

import {
    render
} from '@testing-library/react';

describe('Profile List', () => {

    it('Renders Profile list with h2 title', () => {

        const { getByText } = render(<ProfileList listTitle="Test Title"/>);

        const title = getByText('Test Title', {selector: 'h2'});

        expect(title).toBeInTheDocument()

    })

    it('Renders alternative title when not provided list title', () => {

        const { getByText } = render(<ProfileList/>);

        const title = getByText('Cohort Profiles', {selector: 'h2'});

        expect(title).toBeInTheDocument()

    })

    

});