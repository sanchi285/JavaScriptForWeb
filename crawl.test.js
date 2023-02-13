const { normalizeURL } = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL', ()=>{
    const input = 'https://blogboot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blogboot.dev/path' 
    return expect(actual).toEqual(expected)
})


test('normalize url strip protocol', ()=>{
    const input = 'https://blogboot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blogboot.dev/path' 
    return expect(actual).toEqual(expected)
})