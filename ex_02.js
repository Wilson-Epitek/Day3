function findHousing (housingToFind, housingList){ 
    let a=0
      while (a < housingList.length){
        if (housingToFind.toLowerCase() === housingList[a].toLowerCase()) {
            return [a,housingList[a]]
        }
        a++
        }
    }