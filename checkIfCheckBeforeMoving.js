function checkIfCheckBeforeMoving() {

    //see if the king is in check before moving
    //find the white king
    k = 1;
    stopLoopX = false;
    for (let w = 1; w < 9; w++) {
        while (stopLoopX === false) {
            for (let i = 1; i < 9; i++) {
                squareToCheck = "#square" + k + i;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                if (squareToCheckDoc[0].classList.contains("whiteKing")) {
                    whiteKingSquare = "#square" + k + i;
                    whiteKingRank = Number(k);
                    whiteKingFile = Number(i);
                    stopLoopX = true;
                }
                if (i === 8) {
                    k++;
                }
            }
        }
    }
    stopLoopX = false;
    k = 1;
    //find the black king
    for (let w = 1; w < 9; w++) {
        while (stopLoopX === false) {
            for (let i = 1; i < 9; i++) {
                squareToCheck = "#square" + k + i;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                if (squareToCheckDoc[0].classList.contains("blackKing")) {
                    blackKingSquare = "#square" + k + i;
                    blackKingRank = Number(k);
                    blackKingFile = Number(i);
                    stopLoopX = true;
                }
                if (i === 8) {
                    k++;
                }
            }
        }
    }
    //set castling to true to bypass some statements we dont need in isCheck()
    castling = true;
    if (player === "white") {
        pieceTwoclassArray[1] = whiteKingRank;
        pieceTwoclassArray[2] = whiteKingFile;
        if (isCheck()) {
            playerWhiteIsInCheck = true;
            checkSound.play();
            check = true;
            castling = false;
            return true;
        }
        else {
            playerWhiteIsInCheck = false;
            castling = false;
            return false;
        }
    }
    if (player === "black") {
        pieceTwoclassArray[1] = blackKingRank;
        pieceTwoclassArray[2] = blackKingFile;
        if (isCheck()) {
            playerBlackIsInCheck = true;
            checkSound.play();
            castling = false;
            return true;
        }
        else {
            playerBlackIsInCheck = false;
            castling = false;
            return false;
        }
    }
}