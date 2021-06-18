import { removeName, copyNames } from './names'

it('creates the REMOVE_NAME action', () => {
  expect(removeName(2)).toMatchSnapshot()
})

it('creates the COPY_NAME action', () => {
  expect(copyNames()).toMatchSnapshot()
})
