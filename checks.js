function checkEmpty(array) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (array[i][j] === "") {
                return true;
            }
        }
    }
    return false;
}

function checkHorizontal(array) {

    let check = "";
    for (i = 0; i < 3; i++) {
        let sum = 0;
        check = array[i][0];
        if (check === "") {
            continue;
        } else {
            check = array[i][0];
        }
        for (j = 0; j < 2; j++) {

            if (array[i][j + 1] === check) {
                sum++;
            }

            if (sum === 2) {
                return true;
            }

        }
    }

}

function checkVertical(array) {

    let check = "";
    for (i = 0; i < 3; i++) {
        let sum = 0;
        check = array[0][i];
        if (check === "") {
            continue;
        } else {
            check = array[0][i];
        }
        for (j = 0; j < 2; j++) {

            if (array[j+1][i] === check) {
                sum++;
            }

            if (sum === 2) {
                return true;
            }

        }
    }
    return false;

}

function checkDiagonal(array) {

    let check = array[0][0];
    let check2 = array[2][0];
    
    if(check === "" && check2 === ""){
        return false;
    }else if(check === "" && check2 !== ""){
        check = "N";
    }else if(check2 === "" && check !== ""){
        check2 = "N";
    }
    
    if(check === array[1][1] && check === array[2][2]){
        return true;
    } else if(check2 === array[1][1] && check2 === array[0][2]){
        return true;
    }else{
        return false;
    }

}