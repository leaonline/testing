import { expect } from 'chai'
export const expectThrow = async ({ fn, message, details }) => {
  try {
    await fn()
    expect.fail()
  } catch (e) {
    if (message) expect(e.message).to.include(message)
    if (details) expect(e.message).to.deep.equal(details)
  }
}