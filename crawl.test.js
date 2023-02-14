const { normalizeURL, getUrlFromHTML } = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL', ()=>{
    const input = 'https://blogboot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blogboot.dev/path' 
    return expect(actual).toEqual(expected)
})


test('normalize url strip trailing slash', ()=>{
    const input = 'https://blogboot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blogboot.dev/path' 
    return expect(actual).toEqual(expected)
})


test('normalize Capital', ()=>{
    const input = 'https://BLOGboot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blogboot.dev/path' 
    return expect(actual).toEqual(expected)
})

test('normalize strip http', ()=>{
    const input = 'http://BLOGboot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blogboot.dev/path' 
    return expect(actual).toEqual(expected)
})

test('getHtmlUrlFromHtml', ()=>{
    const input = `
        <html>
            <body>
                <a href='https://blog.boot.dev'>
                    Boot.dev.blog
                </a>
            </body>
        </html>
    `
    const baseURL = 'https://blog.boot.dev/'

    const actualLinks = getUrlFromHTML(input,baseURL)
    //const actual = normalizeURL(input)
    const expected = ["https://blog.boot.dev/"]
    return expect(actualLinks).toEqual(expected)
})


test('getrelativelUrlFromHtml', ()=>{
    const input = `
        <html>
            <body>
                <a href='/path/'>
                    Boot.dev.blog
                </a>
                <a href='https://blog.boot.dev/path1/'>
                    Boot.dev.blog
                </a>

            </body>
        </html>
    `
    const baseURL = 'https://blog.boot.dev'

    const actualLinks = getUrlFromHTML(input,baseURL)
    //const actual = normalizeURL(input)
    const expected = ["https://blog.boot.dev/path/","https://blog.boot.dev/path1/"]
    return expect(actualLinks).toEqual(expected)
})


test('getrelativelUrlFromHtml invalid', ()=>{
    const input = `
        <html>
            <body>
                <a href='invalid path'>
                    Boot.dev.blog
                </a>
                <a href='invalid2'>
                    Boot.dev.blog
                </a>

            </body>
        </html>
    `
    const baseURL = 'https://blog.boot.dev'

    const actualLinks = getUrlFromHTML(input,baseURL)
    //const actual = normalizeURL(input)
    const expected = []
    return expect(actualLinks).toEqual(expected)
})
