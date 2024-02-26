const useCopy = (phoneNumber: string | undefined, setIsCopied: React.Dispatch<React.SetStateAction<boolean>>)=>{

    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }
  
  
      const handleCopyClick = () => {
          if(phoneNumber)
          
          copyTextToClipboard(phoneNumber)
            .then(() => {
              setIsCopied(true);
              console.log("copied")
              setTimeout(() => {
                setIsCopied(false);
              }, 1500);
            })
            .catch((err) => {
              console.log(err);
            });
        }

    return {handleCopyClick}
}

export default useCopy