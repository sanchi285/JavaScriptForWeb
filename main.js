//console.log("Hello World");
function main(){
    if(process.argv.length<3){
        console.log("no web site provided")
        process.exit(1)
    }
  //  console.log("Starting crawl")
    for(const arg of process.argv){
        console.log(arg)
    }
}

main()