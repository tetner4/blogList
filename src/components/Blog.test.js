import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from './Blog'
//add CSS classes to component
describe('Blog component tests', () => {

  let blog = {
    title:'React patterns',
    author:'Michael Chan',
    url:'https://reactpatterns.com/',
    likes:7
  }
  const mockUpdateBlog = jest.fn()
  const mockDeleteBlog = jest.fn()


  test( 'Check if blog title and author are rendered by default, but not URL or likes', () => {



    const component = render(
      <Blog updateBlog={mockUpdateBlog} blog={blog} deleteBlog={mockDeleteBlog} />
    )

    expect(component.container).toHaveTextContent(
      'React patterns - Michael Chan')
  })

  test( 'check visibility button functionality for url and likes', () => {

    const component = render(
      <Blog blog={blog} updateBlog={mockUpdateBlog} deleteBlog={mockDeleteBlog} />
    )

    const button = component.getByText('view')
    fireEvent.click(button)

    expect(component.container).toHaveTextContent(
      'https://reactpatterns.com/'
    )

    expect(component.contatiner).toHaveTextContent(
      '7'
    )

  })
})

