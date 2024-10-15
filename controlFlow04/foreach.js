const myCoding = [
    {
        languagename : "javascript",
        languageFileName : "js"
    },
    {
        languagename : "java",
        languageFileName : "java"
    }
        ]

    myCoding.forEach((item) => {
        // console.log(item.languagename)
        // console.log(item.languageFileName)
        console.log(`file name ${item.languageFileName} is used for ${item.languagename}`);
        
    })

    const myNums = [1,2,3,4,5,6,7,8,9,10]

    // use of filter
     
    // const newNums = myNums.filter( (num) => num > 4)
    //  console.log(newNums);
     
    const newNums =[]
    myNums.forEach( (num) => {
        if ( num > 5){
            newNums.push(num)
        }
    })
    console.log(newNums);
    