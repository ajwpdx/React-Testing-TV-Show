import React from 'react'
import { render, screen } from "@testing-library/react"
import Episodes from './Episodes'
import { showsData } from '../App.test'


test("Episodes render once the data is fetched", () => {
    const { rerender } = render(<Episodes episodes={[]} />)
    rerender(<Episodes episodes={showsData._embedded.episodes} />)
    const episodesArray = screen.getAllByTestId(/episode/i)
    expect(episodesArray).toHaveLength(26)
})
