
function compareNums(num, text1, text2, text3, text4, text5, text6, text7, text8){
  switch(num){
    case 1: 
      return text1
    case 2: 
      return text2
    case 3: 
      return text3
    case 4:
      return text4
    case 5: 
      return text5
    case 6:
      return text6
    case 7: 
      return text7 
    case 8: 
      return text8
    default: 
      return ''
  }

}

export {compareNums}

function updateInput (e, num, func1, func2, func3, func4, func5, func6, func7, func8){
  switch(num){
    case 1: 
      return func1(e.target.value)
    case 2: 
      return func2(e.target.value)
    case 3: 
      return func3(e.target.value)
    case 4: 
      return func4(e.target.value)
    case 5:  
      return func5(e.target.value)
    case 6: 
      return func6(e.target.value)
    case 7: 
      return func7(e.target.value)
    case 8: 
      return func8(e.target.value)
  }
}




function updateSeqInput (e, num, func1, func2, func3, func4, func5, func6, func7, func8){
  switch(num){
    case 1: 
      return func1(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 2: 
      return func2(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 3: 
      return func3(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 4: 
      return func4(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 5:  
      return func5(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 6: 
      return func6(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 7: 
      return func7(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
    case 8: 
      return func8(prevValue => (
        {...prevValue, title:title1, summary1}
      ))
  }
}



export {updateInput, updateSeqInput}

// [{...prevValue, title:title1, summary1}, {...prevValue, title:title2, summary2}, {...prevValue, title:title3, summary3}, {...prevValue, title:title4, summary4}, {...prevValue, title:title5, summary5}, {...prevValue, title:title6, summary6}, {...prevValue, title:title7, summary7}, {...prevValue, title:title8, summary8} ]