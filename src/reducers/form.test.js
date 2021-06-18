import form from './form'
import { setUsername, setPassword } from '../actions/form'

it('returns the initial state', () => {
  const state = form(undefined, {})
  expect(state).toEqual({
    username: '',
    password: ''
  })
})

it('returns the initial state', () => {
  const state = form(undefined, {})
  expect(state).toMatchSnapshot()
})

it('handles SET_USERNAME', () => {
  let state = {
    username: 'test',
    password: 'password'
  }
  state = form(state, setUsername('NEWUSER'))
  expect(state).toEqual({
    username: 'NEWUSER',
    password: 'password'
  })
  expect(state).toMatchSnapshot()
})

it('handles SET_PASSWORD', () => {
  let state = {
    username: 'username',
    password: 'old password'
  }
  state = form(state, setPassword('new password'))
  expect(state).toEqual({
    username: 'username',
    password: 'new password'
  })
  // expect(state).toMatchSnapshot()
})
