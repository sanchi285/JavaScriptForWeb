const {JSDOM} = require('jsdom')


async function crawlPage(baseURL,currentURL,pages){

    const baseURLObj = new URL(baseURL)
    const currentUrlObj = new URL(currentURL)

    if(baseURLObj.hostname!=currentURL.hostname){
        console.log(`${baseURL.hostname} " " ${currentURL.hostname}`);
        return pages;
    }
    const normalizedCurrentURL = normalizeURL(currentURL)
    if(pages[normalizedCurrentURL] > 0){
        pages[normalizedCurrentURL]++;
        return pages;
    }
    pages[normalizedCurrentURL] = 1


    try{
    const resp = await fetch(currentUrl)
        if(resp.status>399){
            console.log(`error in fetch with status code ${resp.status} on Page: ${currentUrl}`)
            return
        }
        const contentType = resp.headers.get("content-type")
        if(!contentType.includes('text/html')){
            console.log(`non html response ${resp.status} on Page: ${currentUrl}`)
            return
        }

    //console.log(await resp.text())
    const htmlbody = await resp.text()
    nextURLs = getUrlFromHTML(htmlbody,baseURL)
    for(const nextURL of nextURLs){
        pages = await crawlPage(baseURL, nextURL, pages)
    }    


    }
    catch(Err){
        console.log(`err: ${Err.message}`)
    }

    return pages
}

function getUrlFromHTML(htmlbody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlbody);
    const linkElements  = dom.window.document.querySelectorAll('a')
    console.log(linkElements)
    for(const linkElement of linkElements){
        console.log(linkElement.href)
        if(linkElement.href.slice(0,1)==='/'){
            //relative url
            try{
            const urlObj = new URL(`${baseURL}${linkElement.href}`)
            urls.push(urlObj.href);
            }
            catch(err){
                console.log(`error : ${err.message}`)
            }
        }
        else{
            //abs url
            try{
                const urlObj = new URL(linkElement.href)
                urls.push(urlObj.href);
                }
                catch(err){
                    console.log(`error : ${err.message}`)
                }
        }
    }

    return urls
} 

function normalizeURL(urlString){

    const urlobj = new URL(urlString);
    const hostpath = `${urlobj.hostname}${urlobj.pathname}`
    if(hostpath.length>0 && hostpath.slice(-1)==='/'){
        return hostpath.slice(0,-1)
    }
    return hostpath;
}

module.exports = {
    normalizeURL,
    getUrlFromHTML,
    crawlPage
}