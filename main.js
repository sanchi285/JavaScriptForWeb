//console.log("Hello World");
const { crawlPage} = require('./crawl.js')
const {printReport} = require('./report.js')

async function main(){
    if(process.argv.length<3){
        console.log("no web site provided")
        process.exit(1)
    }
  //  console.log("Starting crawl")
    for(const arg of process.argv){
        console.log(arg)
    }
    try{
    const baseURL = process.argv[2]
    const pages = await crawlPage(baseURL,baseURL,{})
    printReport(pages)
    
}
    catch(err){
        console.log(`err: ${err.message}`)
    }
}

main()