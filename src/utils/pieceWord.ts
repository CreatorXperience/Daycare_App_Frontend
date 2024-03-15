const pierceWord = (user: {name: string})=>{
    let splits =  user && user?.name.split(" ")
    let Join = ""
    if(splits){ 
     let Firstchar = splits[0].charAt(0)
     let lastChar = splits[splits.length-1]
     let splitlastChar = lastChar.split("")
    let lastMan =  splitlastChar[0]
     Join += `${Firstchar} ${lastMan}`
   }
   return Join.toUpperCase()
   }

   
   export default pierceWord