import React from 'react'
import Profile from '../Profile';

import {
    render
} from '@testing-library/react';

describe('Profile', () => {

    it('it renders profile with a name', () => {

        const { getByText } = render(<Profile name="Name"/>);
        const name = getByText('Name', { selector: 'h3.profile-name'});

        expect(name).toBeInTheDocument();

    });

    it('it renders profile with location', () => {

        const { getByText } = render(<Profile location="Test location" />);
        const location = getByText('Test location', { selector: 'h4.profile-location'});

        expect(location).toBeInTheDocument();

    })

    it('it renders profile with job role', () => {

        const { getByText } = render(<Profile role="Test role" />);
        const role = getByText('Test role', { selector: 'h4.profile-role'});

        expect(role).toBeInTheDocument();

    })

    it('it renders profile with a short bio', () => {

        const { getByText } = render(<Profile bio="Test"/>);
        
        const bio = getByText('Test', { selector: 'p.profile-bio'});

        expect(bio).toBeInTheDocument();
        
    })
})
