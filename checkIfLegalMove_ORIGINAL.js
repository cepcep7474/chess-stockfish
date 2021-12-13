function checkIfLegalMove() {
    

// returns false if click on same color piece for piece 2
    notCastling = false;
    if ((player == "white") && (pieceTwoclassArray[5] == "white")) {
        return false;
    }
    if ((player == "black") && (pieceTwoclassArray[5] == "black")) {
        return false;
    }

    

if(pieceOneName === "whiteKing"){
    if(pieceTwoRank != pieceOneRank){
        if(pieceTwoFile - pieceOneFile != 2 || pieceOneFile - pieceTwoFile !=2){
            notCastling = true;

        }
    }
}

if(pieceOneName === "blackKing"){
    if(pieceTwoRank != pieceOneRank){
        if(pieceTwoFile - pieceOneFile != 2 || pieceOneFile - pieceTwoFile !=2){
            notCastling = true;

        }
    }
}

    
   if ((pieceOneName === "whiteKing") && (notCastling))
        {
            if ( (pieceTwoRank - pieceOneRank) >1 || (pieceTwoFile - pieceOneFile) >1)
            {
                badKingMove = true;
                cantMoveCheck.play();
                castling = false;
                return false;
            }
        }
        if ((pieceOneName === "blackKing") && (notCastling))
        {
            if ( (pieceOneRank - pieceTwoRank) >1 || (pieceOneFile - pieceTwoFile) >1 )
            {
                badKingMove = true;
                cantMoveCheck.play();
               // alert("giot here blackking");
                castling = false;
                return false;
            }
        }     
      ///////////////////////////////
      ///////////////////////////////
      
    


    //call isCheck().  if isCheck() is true, return false for legal move
    
    if (isCheck()) {
        if (castling) {
            cantMoveCheck.play();
           // alert("Cant move there, king / back squares in check");
        }
        if (!castling) {
            //add sound here instead of alert
            cantMoveCheck.play();
          //  alert("Cant move there, king is in check");
        }     
        return false;
    }
    

    //pawns
    //white pawn on 2nd rank
    if (pieceOneName === "whitePawn") {
        if (pieceTwoclassArray.length == 4) {
            if (pieceOneRank == 2) {
                if (((pieceTwoRank - pieceOneRank) > 0 && ((pieceTwoRank - pieceOneRank) <= 2))) {
                    if ((pieceOneFile - pieceTwoFile) == 0) {
                        if(((pieceTwoRank - pieceOneRank) <= 2) ){
                            moveSound.play();
                            player = "black";                        
                            return true;
                        }                     
                    }
                 }
            }
        }
    }
    //white pawn move fwd NOT on 2nd rank
    if (pieceOneName === "whitePawn") {
        if (pieceTwoclassArray.length == 4) {
            if (pieceOneRank > 2) {
                if (((pieceTwoRank - pieceOneRank) == 1)) {
                    if ((pieceOneFile - pieceTwoFile) == 0) {
                        player = "black";
                        return true;
                    }
                }
            }
        }
    }
    //white pawn CAPTURE A PIECE
    if (pieceOneName === "whitePawn") {
        if (((pieceTwoclassArray.length >= 6)) && ((pieceTwoclassArray[5] === "black"))) {
            if (((pieceTwoRank - pieceOneRank) == 1)) {
                if (((pieceTwoFile - pieceOneFile) == 1) || ((pieceOneFile - pieceTwoFile) == 1)) {
                    player = "black";
                    capture = true;
                    captureSoundPlayed = true;
                    captureSound.play();
                    return true;
                }
            }
        }
    }

    /*
    //white pawn on 5th rank - capturing en passant to the left
    pawnLeftSquare = "#square" + pieceOneRank + (Number(pieceOneFile) - 1);
    pawnLeftSquareDoc = document.querySelectorAll(pawnLeftSquare);   
    if ((pieceOneName === "whitePawn") && (Number(pieceOneRank) === 5)){     
        if ((pieceTwoclassArray.length == 4) && ((pieceTwoRank == (Number(pieceOneRank)) + 1))) {
            if((pieceOneFile - pieceTwoFile) == 1){
                if(pawnLeftSquareDoc[0].classList.contains("enpassant")){
                    enpassantCapture = true;
                    player = "black";
                    captureSoundPlayed = true;
                    captureSound.play();
                    pawnLeftSquareDoc[0].classList.remove("enpassant");
                   pawnLeftSquareDoc[0].classList.remove("black");
                    pawnLeftSquareDoc[0].classList.remove("blackPawn");
                    pointTotalWhite += 1;
                    pointTotalBlack -= 1;
                    return true;
                }
            }          
        }
    }


     //white pawn on 5th rank - capturing en passant to the right
     pawnRightSquare = "#square" + pieceOneRank + (Number(pieceOneFile) + 1);
     pawnRightSquareDoc = document.querySelectorAll(pawnRightSquare);   
     if ((pieceOneName === "whitePawn") && (Number(pieceOneRank) === 5)) {     
         if ((pieceTwoclassArray.length == 4) && ((pieceTwoRank == (Number(pieceOneRank)) + 1))) {
             if((pieceTwoFile - pieceOneFile) == 1){
                 if(pawnRightSquareDoc[0].classList.contains("enpassant")){
                    enpassantCapture = true;

                     player = "black";
                     captureSoundPlayed = true;
                     captureSound.play();
                     pawnRightSquareDoc[0].classList.remove("enpassant");
                    pawnRightSquareDoc[0].classList.remove("black");
                     pawnRightSquareDoc[0].classList.remove("blackPawn");
                     pointTotalWhite += 1;
                    pointTotalBlack -= 1;
                     return true;
                 }
 
             }        
         }
     }

     */
    //black pawn CAPTURE A PIECE
    if (pieceOneName === "blackPawn") {
        if (((pieceTwoclassArray.length >= 6)) && ((pieceTwoclassArray[5] === "white"))) {
            if (((pieceOneRank - pieceTwoRank) == 1)) {
                if (((pieceTwoFile - pieceOneFile) == 1) || ((pieceOneFile - pieceTwoFile) == 1)) {
                    player = "white";
                    capture = true;
                    captureSoundPlayed = true;
                    captureSound.play();
                    return true;
                }
            }
        }
    }  
    //black pawn on 7th rank
    if (pieceOneName === "blackPawn") {
        if (pieceTwoclassArray.length == 4) {
            if (pieceOneRank == 7) {
                if (((pieceOneRank - pieceTwoRank) > 0) && ((pieceOneRank - pieceTwoRank) <= 2)) {
                    if ((pieceOneFile - pieceTwoFile) == 0) {
                        if(((pieceOneRank - pieceTwoRank) <= 2) ){
                            moveSound.play();
                            player = "white";                         
                            return true;
                        }                     
                    }
                  
                }
            }
        }
    }
    //black pawn NOT on 7th rank
    if (pieceOneName === "blackPawn") {
        if (pieceTwoclassArray.length == 4) {
            if (pieceOneRank < 7) {
                if ((((pieceOneRank - pieceTwoRank) == 1))) {
                    if ((pieceOneclassArray[2] - pieceTwoclassArray[2]) == 0) {
                        player = "white";
                        return true;
                    }
                }
            }
        }
    }
/*
     //black pawn on 4th rank - capturing en passant to the left
     pawnLeftSquare = "#square" + pieceOneRank + (Number(pieceOneFile) - 1);
     pawnLeftSquareDoc = document.querySelectorAll(pawnLeftSquare);   
     if ((pieceOneName === "blackPawn") && (Number(pieceOneRank) === 4)){     
         if ((pieceTwoclassArray.length == 4) && ((pieceTwoRank == (Number(pieceOneRank)) - 1))) {
             if((pieceOneFile - pieceTwoFile) == 1){
                 if(pawnLeftSquareDoc[0].classList.contains("enpassant")){
                    enpassantCapture = true;

                     player = "white";
                     captureSoundPlayed = true;
                     captureSound.play();
                     pawnLeftSquareDoc[0].classList.remove("enpassant");
                    pawnLeftSquareDoc[0].classList.remove("white");
                     pawnLeftSquareDoc[0].classList.remove("whitePawn");
                     pointTotalWhite -= 1;
                    pointTotalBlack += 1;
                     return true;
                 }
 
             }
              
             
         }
     }
 
      //black pawn on 4th rank - capturing en passant to the right
      pawnRightSquare = "#square" + pieceOneRank + (Number(pieceOneFile) + 1);
      pawnRightSquareDoc = document.querySelectorAll(pawnRightSquare);   
      if ((pieceOneName === "blackPawn") && (Number(pieceOneRank) === 4)) {     
          if ((pieceTwoclassArray.length == 4) && ((pieceTwoRank == (Number(pieceOneRank)) - 1))) {
              if((pieceTwoFile - pieceOneFile) == 1){
                  if(pawnRightSquareDoc[0].classList.contains("enpassant")){
                    enpassantCapture = true;

                      player = "white";
                      captureSoundPlayed = true;
                      captureSound.play();
                      pawnRightSquareDoc[0].classList.remove("enpassant");
                     pawnRightSquareDoc[0].classList.remove("white");
                      pawnRightSquareDoc[0].classList.remove("whitePawn");
                      pointTotalWhite -= 1;
                      pointTotalBlack += 1;
                      return true;
                  }
              }             
          }
      }


      */


      
    //knights
    //white knight
    if (pieceOneName === "whiteKnight") {
        if ((pieceTwoRank - pieceOneRank == 2) || (pieceTwoRank - pieceOneRank == -2)) {
            if ((pieceOneFile - pieceTwoFile == 1) || (pieceOneFile - pieceTwoFile == -1)) {
                if (pieceTwoclassArray[5] === "black") {
                    capture = true;
                    captureSoundPlayed = true;
                    captureSound.play();
                    player = "black";
                    return true;
                } else if (pieceTwoclassArray[5] === "white") {
                    return false;
                } else {
                    player = "black";
                    return true;
                }
            }
        }
        if ((pieceTwoRank - pieceOneRank == 1) || (pieceTwoRank - pieceOneRank == -1)) {
            if ((pieceOneFile - pieceTwoFile == 2) || (pieceOneFile - pieceTwoFile == -2)) {
                if (pieceTwoclassArray[5] === "black") {
                    captureSound.play();
                    player = "black";
                    capture = true;
                    return true;
                } else if (pieceTwoclassArray[5] === "white") {
                    return false;
                } else {
                    player = "black";
                    return true;
                }
            }
        }
    }
    //black knight
    if (pieceOneName === "blackKnight") {
        if ((pieceTwoRank - pieceOneRank == 2) || (pieceTwoRank - pieceOneRank == -2)) {
            if ((pieceOneFile - pieceTwoFile == 1) || (pieceOneFile - pieceTwoFile == -1)) {           
                if (pieceTwoclassArray[5] === "white") {
                    capture = true;
                    player = "white";
                    captureSound.play();
                    return true;
                }else if(pieceTwoclassArray[5] === "black"){
                    return false;
                }else{
                    player = "white";
                    return true;
                }
            }
        }
        if ((pieceTwoRank - pieceOneRank == 1) || (pieceTwoRank - pieceOneRank == -1)) {
            if ((pieceOneFile - pieceTwoFile == 2) || (pieceOneFile - pieceTwoFile == -2)) {
                if (pieceTwoclassArray[5] === "white") {
                    player = "white";
                    capture = true;


                    captureSound.play();
                    return true;
                }else if(pieceTwoclassArray[5] === "black"){
                    return false;
                }else{
                    player = "white";
                    return true;
                }
            }
        }
    }
    //DIAGONALS - bishops and queens and kings?
    //black bishop
    if (pieceOneName === "blackBishop") {
        //going UP/LEFT
        let maxNumberOfSquaresToCheckUpLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
        if (pieceOneFile - pieceTwoFile > 0) {
            if (pieceTwoRank - pieceOneRank > 0) {
                if ((pieceTwoRank - pieceOneRank) == (Number(pieceOneFile) - Number(pieceTwoFile))) {
                    let destinationSquareRank = Number(pieceTwoRank);
                    let destinationSquareFileTemp = Number(pieceTwoFile);
                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) + 1;
                    let firstSquareFile = Number(pieceOneFile) - 1;
                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                    let counter = 0;
                    let squaresCountedUpLeft = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckUpLeft; i++) {
                        counter++;
                        squaresCountedUpLeft++;
                        let squareToCheckRank = Number(pieceOneRank) + squaresCountedUpLeft;
                        let squareToCheckFile = Number(pieceOneFile) - squaresCountedUpLeft;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpLeft != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckUpLeft == 0) || (squaresCountedUpLeft == maxNumberOfSquaresToCheckUpLeft)) {
                            if (destinationSquareDoc[0].classList.length != emptySquare) {
                                if (pieceTwoclassArray[5] === "black") {
                                    return false;
                                }
                                if(pieceTwoclassArray[5] === "white"){
                                    captureSound.play();
                                    capture = true;
                                    player = "white";
                                    return true;

                                }
                                 else {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "white";
                        return true;
                    } else {
                        player = "white";
                        return true;
                    }
                }

            }
        }
        //going UP/RIGHT
        let maxNumberOfSquaresToCheckUpRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
        if (pieceTwoFile - pieceOneFile > 0) {
            if (pieceTwoRank - pieceOneRank > 0) {
                if ((pieceTwoRank - pieceOneRank) == (Number(pieceTwoFile) - Number(pieceOneFile))) {
                    let destinationSquareFile = Number(pieceTwoFile);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(destinationSquareFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) + 1;
                    let firstSquareFile = Number(pieceOneFile) + 1;
                    let counter = 0;
                    let squaresCountedUpRight = 0;

                    for (let i = 0; i <= maxNumberOfSquaresToCheckUpRight; i++) {
                        counter++;
                        squaresCountedUpRight++;
                        let squareToCheckRank = Number(pieceOneRank) + squaresCountedUpRight;
                        let squareToCheckFile = Number(pieceOneFile) + squaresCountedUpRight;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpRight != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckUpRight == 0) || (squaresCountedUpRight == maxNumberOfSquaresToCheckUpRight)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "black") {
                                    return false;
                                } 
                                if(pieceTwoclassArray[5] === "white"){
                                    captureSound.play();
                                    capture = true;
                                    player = "white";
                                    return true;

                                }
                                else {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "white";
                        return true;
                    } else {
                        player = "white";
                        return true;
                    }
                }
            }
        }
        //going DOWN/LEFT
        let maxNumberOfSquaresToCheckDownLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
        if (pieceOneFile - pieceTwoFile > 0) {
            if (pieceOneRank - pieceTwoRank > 0) {
                if ((pieceOneRank - pieceTwoRank) == (Number(pieceOneFile) - Number(pieceTwoFile))) {
                    let destinationSquareRank = Number(pieceTwoRank);
                    let destinationSquareFileTemp = Number(pieceTwoFile);
                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) - 1;
                    let firstSquareFile = Number(pieceOneFile) - 1;
                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                    let counter = 0;
                    let squaresCountedDownLeft = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckDownLeft; i++) {
                        counter++;
                        squaresCountedDownLeft++;
                        let squareToCheckRank = Number(pieceOneRank) - squaresCountedDownLeft;
                        let squareToCheckFile = Number(pieceOneFile) - squaresCountedDownLeft;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownLeft != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckDownLeft == 0) || (squaresCountedDownLeft == maxNumberOfSquaresToCheckDownLeft)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "black") {
                                    return false;
                                }
                                if(pieceTwoclassArray[5] === "white"){
                                    captureSound.play();
                                    capture = true;
                                    player = "white";
                                    return true;

                                }
                                 else {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "white";
                        return true;
                    } else {
                        player = "white";
                        return true;
                    }
                }
            }
        }
        //going DOWN/RIGHT
        let maxNumberOfSquaresToCheckDownRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
        if (pieceTwoFile - pieceOneFile > 0) {
            if (pieceOneRank - pieceTwoRank > 0) {
                if ((pieceOneRank - pieceTwoRank) == (Number(pieceTwoFile) - Number(pieceOneFile))) {
                    let destinationSquareFile = Number(pieceTwoFile);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(destinationSquareFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) + 1;
                    let firstSquareFile = Number(pieceOneFile) + 1;
                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                    let counter = 0;
                    let squaresCountedDownRight = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckDownRight; i++) {
                        counter++;
                        squaresCountedDownRight++;
                        let squareToCheckRank = Number(pieceOneRank) - squaresCountedDownRight;
                        let squareToCheckFile = Number(pieceOneFile) + squaresCountedDownRight;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownRight != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckDownRight == 0) || (squaresCountedDownRight == maxNumberOfSquaresToCheckDownRight)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "black") {
                                    return false;
                                } 
                                if(pieceTwoclassArray[5] === "white"){
                                    captureSound.play();
                                    capture = true;
                                    player = "white";
                                    return true;

                                }
                                else {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "white";
                        return true;
                    } else {
                        player = "white";
                        return true;
                    }
                }
            }
        }
    }
    //white bishop
    if (pieceOneName === "whiteBishop") {
        //going UP/LEFT
        let maxNumberOfSquaresToCheckUpLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
        if (pieceOneFile - pieceTwoFile > 0) {
            if (pieceTwoRank - pieceOneRank > 0) {
                if ((pieceTwoRank - pieceOneRank) == (Number(pieceOneFile) - Number(pieceTwoFile))) {
                    let destinationSquareRank = Number(pieceTwoRank);
                    let destinationSquareFileTemp = Number(pieceTwoFile);
                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) + 1;
                    let firstSquareFile = Number(pieceOneFile) - 1;
                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                    let counter = 0;
                    let squaresCountedUpLeft = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckUpLeft; i++) {
                        counter++;
                        squaresCountedUpLeft++;
                        let squareToCheckRank = Number(pieceOneRank) + squaresCountedUpLeft;
                        let squareToCheckFile = Number(pieceOneFile) - squaresCountedUpLeft;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpLeft != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckUpLeft == 0) || (squaresCountedUpLeft == maxNumberOfSquaresToCheckUpLeft)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "white") {
                                    return false;
                                } 
                                if(pieceTwoclassArray[5] === "black"){
                                    captureSound.play();
                                    capture = true;
                                    player = "black";
                                    return true;

                                }
                                else {
                                    player = "black";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "black";
                        return true;
                    } else {
                        player = "black";
                        return true;
                    }
                }
            }
        }
        //going UP/RIGHT
        let maxNumberOfSquaresToCheckUpRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
        if (pieceTwoFile - pieceOneFile > 0) {
            if (pieceTwoRank - pieceOneRank > 0) {
                if ((pieceTwoRank - pieceOneRank) == (Number(pieceTwoFile) - Number(pieceOneFile))) {
                    let destinationSquareFile = Number(pieceTwoFile);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(destinationSquareFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) + 1;
                    let firstSquareFile = Number(pieceOneFile) + 1;
                    let counter = 0;
                    let squaresCountedUpRight = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckUpRight; i++) {
                        counter++;
                        squaresCountedUpRight++;
                        let squareToCheckRank = Number(pieceOneRank) + squaresCountedUpRight;
                        let squareToCheckFile = Number(pieceOneFile) + squaresCountedUpRight;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpRight != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckUpRight == 0) || (squaresCountedUpRight == maxNumberOfSquaresToCheckUpRight)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "white") {
                                    return false;
                                } 
                                if(pieceTwoclassArray[5] === "black"){
                                    captureSound.play();
                                    capture = true;
                                    player = "black";
                                    return true;

                                }
                                else {
                                    player = "black";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "black";
                        return true;
                    } else {
                        player = "black";
                        return true;
                    }
                }
            }
        }
        //going DOWN/LEFT
        let maxNumberOfSquaresToCheckDownLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
        if (pieceOneFile - pieceTwoFile > 0) {
            if (pieceOneRank - pieceTwoRank > 0) {
                if ((pieceOneRank - pieceTwoRank) == (Number(pieceOneFile) - Number(pieceTwoFile))) {
                    let destinationSquareRank = Number(pieceTwoRank);
                    let destinationSquareFileTemp = Number(pieceTwoFile);
                    let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) - 1;
                    let firstSquareFile = Number(pieceOneFile) - 1;
                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                    let counter = 0;
                    let squaresCountedDownLeft = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckDownLeft; i++) {
                        counter++;
                        squaresCountedDownLeft++;
                        let squareToCheckRank = Number(pieceOneRank) - squaresCountedDownLeft;
                        let squareToCheckFile = Number(pieceOneFile) - squaresCountedDownLeft;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownLeft != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckDownLeft == 0) || (squaresCountedDownLeft == maxNumberOfSquaresToCheckDownLeft)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "white") {
                                    return false;
                                }
                                if(pieceTwoclassArray[5] === "black"){
                                    captureSound.play();
                                    capture = true;
                                    player = "black";
                                    return true;

                                }
                                 else {
                                    player = "black";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "black";
                        return true;
                    } else {
                        player = "black";
                        return true;
                    }
                }
            }
        }
        //going DOWN/RIGHT
        let maxNumberOfSquaresToCheckDownRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
        if (pieceTwoFile - pieceOneFile > 0) {
            if (pieceOneRank - pieceTwoRank > 0) {
                if ((pieceOneRank - pieceTwoRank) == (Number(pieceTwoFile) - Number(pieceOneFile))) {
                    let destinationSquareFile = Number(pieceTwoFile);
                    let destinationSquare = "#square" + pieceTwoRank + Math.trunc(destinationSquareFile);
                    let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                    let firstSquareRank = Number(pieceOneRank) + 1;
                    let firstSquareFile = Number(pieceOneFile) + 1;
                    let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                    let firstSquareDoc = document.querySelectorAll(firstSquare);
                    let counter = 0;
                    let squaresCountedDownRight = 0;
                    for (let i = 0; i <= maxNumberOfSquaresToCheckDownRight; i++) {
                        counter++;
                        squaresCountedDownRight++;
                        let squareToCheckRank = Number(pieceOneRank) - squaresCountedDownRight;
                        let squareToCheckFile = Number(pieceOneFile) + squaresCountedDownRight;
                        let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                        let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                        if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownRight != 0)) {
                            return false;
                        }
                        //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                        if ((maxNumberOfSquaresToCheckDownRight == 0) || (squaresCountedDownRight == maxNumberOfSquaresToCheckDownRight)) {
                            if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                if (pieceTwoclassArray[5] === "white") {
                                    return false;
                                } 
                                if(pieceTwoclassArray[5] === "black"){
                                    captureSound.play();
                                    capture = true;
                                    player = "black";
                                    return true;

                                }
                                else {
                                    player = "black";
                                    return true;
                                }
                            }
                        }
                    }
                    //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        player = "black";
                        return true;
                    } else {
                        player = "black";
                        return true;
                    }
                }
            }
        }
    }
    //QUEENS //ROOKS //KINGS
    if ((pieceOneName === "whiteQueen") || (pieceOneName === "blackQueen") || (pieceOneName === "blackQueenRook") || (pieceOneName === "blackKingRook") || (pieceOneName === "whiteQueenRook") ||(pieceOneName === "whiteKingRook") || (pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
        //going UP
        let maxNumberOfSquaresToCheckUp = (Number(pieceTwoRank) - Number(pieceOneRank)) - 1;
        if (pieceOneFile - pieceTwoFile == 0) {
            if (pieceTwoRank - pieceOneRank > 0) {
                let destinationSquareRank = Number(pieceTwoRank);
                let destinationSquareFileTemp = Number(pieceTwoFile);
                let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                let firstSquareRank = Number(pieceOneRank) + 1;
                let firstSquareFile = Number(pieceOneFile);
                let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let counter = 0;
                let squaresCountedUp = 0;
                for (let i = 0; i <= maxNumberOfSquaresToCheckUp; i++) {
                    counter++;
                    squaresCountedUp++;
                    //code added for Kings
                    if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                        maxNumberOfSquaresToCheckUp = 0;
                    }
                    let squareToCheckRank = Number(pieceOneRank) + squaresCountedUp;
                    let squareToCheckFile = Number(pieceOneFile);
                    let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                    let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                    if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUp != 0)) {
                        return false;
                    }
                    //added code for Kings
                    if (pieceOneName === "whiteKing") {
                        if ((pieceTwoRank - pieceOneRank) > 1) {
                            //alert ("got here king cant move there");
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            player = "black";
                            captureSound.play();
                            capture = true;
                            
                            return true;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            return false;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "black";
                            return true;
                        }
                    }
                    if (pieceOneName === "blackKing") {
                        if ((pieceTwoRank - pieceOneRank) > 1) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            player = "white";
                            captureSound.play();
                            capture = true;
                            return true;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "white";
                            return true;
                        }
                    }
                    //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                    if ((maxNumberOfSquaresToCheckUp == 0) || (squaresCountedUp == maxNumberOfSquaresToCheckUp)) {
                        //alert("did we get here?");
                        if (destinationSquareDoc[0].classList.length !== emptySquare) {
                            if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                return false;
                            } 
                            if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                captureSound.play();
                            capture = true;
                            if (player === "white") {
                                player = "black";
                            }
                            else if (player === "black") {
                                player = "white";
                            
                            }
                                
                                return true;
                            }
                            
                            else {
                                if (player === "white") {
                                    player = "black";
                                    
                                    return true;
                                }
                                else if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
                //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                if (destinationSquareDoc[0].classList.length == emptySquare) {
                    //alert("did we get here   1")
                    if (player === "white") {
                        player = "black";
                        return true;
                    } else {
                        if (player === "white") {
                            player = "black";
                            return true;
                        }
                    }
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    } else {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    }
                }
            }
        }
        //going DOWN
        let maxNumberOfSquaresToCheckDown = Number(pieceOneRank) - Number(pieceTwoRank) - 1;
        if (pieceOneFile - pieceTwoFile == 0) {
            if (pieceOneRank - pieceTwoRank > 0) {
                let destinationSquareRank = Number(pieceTwoRank);
                let destinationSquareFileTemp = Number(pieceTwoFile);
                let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                let firstSquareRank = Number(pieceOneRank) - 1;
                let firstSquareFile = Number(pieceOneFile);
                let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let counter = 0;
                let squaresCountedDown = 0;
                for (let i = 0; i <= maxNumberOfSquaresToCheckDown; i++) {
                    counter++;
                    squaresCountedDown++;
                    //code added for Kings
                    if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                        maxNumberOfSquaresToCheckDown = 0;
                    }
                    let squareToCheckRank = Number(pieceOneRank) - squaresCountedDown;
                    let squareToCheckFile = Number(pieceOneFile);
                    let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                    let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                    if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDown != 0)) {
                        return false;
                    }
                    //added code for Kings
                    if (pieceOneName === "whiteKing") {
                        if ((pieceOneRank - pieceTwoRank) > 1) {
                            return false;
                        }
                        
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            player = "black";
                            captureSound.play();
                            capture = true;
                            
                            return true;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            return false;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "black";
                            return true;
                        }
                    }
                    if (pieceOneName === "blackKing") {
                        if ((pieceOneRank - pieceTwoRank) > 1) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            alert("checkiflegal move  king going down  returned false");
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            player = "white";
                            captureSound.play();
                            capture = true;
                            return true;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "white";
                            return true;
                        }
                    }
                    //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                    if ((maxNumberOfSquaresToCheckDown == 0) || (squaresCountedDown == maxNumberOfSquaresToCheckDown)) {
                        if (destinationSquareDoc[0].classList.length !== emptySquare) {
                            if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                return false;
                            } 
                            if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                captureSound.play();
                            capture = true;
                            if (player === "white") {
                                player = "black";
                            
                            }
                            else if (player === "black") {
                                player = "white";
                            
                            }
                                return true;
                            }
                            else {
                                if (player === "white") {
                                    player = "black";
                                    return true;
                                }
                                else if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
                //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                if (destinationSquareDoc[0].classList.length == emptySquare) {
                    if (player === "white") {
                        player = "black";
                        return true;
                    } else {
                        if (player === "white") {
                            player = "black";
                            return true;
                        }
                    }
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    } else {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    }
                }
            }
        }
        
        //CASTLING QUEENSIDE  king moves 2 squares towards "a" file
        //WHITE
        if (pieceOneRank - pieceTwoRank == 0) {
            if (((pieceOneFile - pieceTwoFile == 2) && (pieceOneName === "whiteKing")) && ((whiteKingMoveCounter != 0) || (whiteQueenRookCounter != 0))) {
                alert("Cannot castle, you Rook or King have moved before");
            }
            //if king moves 2 squares AND if pieceOneName === whiteKing  AND whiteKing has never moved and whiteQueenRook has never moved
            if ((pieceOneFile - pieceTwoFile == 2) && (pieceOneName === "whiteKing") && (whiteKingMoveCounter == 0) && (whiteQueenRookCounter == 0)) {
                //alert("got here");
                let maxNumberOfSquaresToCheck = 3;
                let firstSquare = "#square" + (pieceOneRank) + Math.trunc(pieceOneFile - 1);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let secondSquare = "#square" + (pieceOneRank) + Math.trunc(pieceOneFile - 2);
                let secondSquareDoc = document.querySelectorAll(secondSquare);
                let thirdSquare = "#square" + (pieceOneRank) + Math.trunc(pieceOneFile - 3);
                let thirdSquareDoc = document.querySelectorAll(thirdSquare);
                let whiteRookOriginalSquare = "#square" + 1 + 1;
                let whiteRookDestinationSquare = "#square" + 1 + 4;
                let whiteRookOriginalSquareDoc = document.querySelectorAll(whiteRookOriginalSquare);
                let whiteRookDestinationSquareDoc = document.querySelectorAll(whiteRookDestinationSquare);
                let whiteKingOriginalSquare = "#square" + 1 + 5;
                let whiteKingOriginalSquareDoc = document.querySelectorAll(whiteKingOriginalSquare);
                //loop a maximum of 3 times to find the 3 empty squares between king and rook
                let squareToCheck = firstSquare;
                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                    return false;
                }
                squareToCheck = secondSquare;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    return false;
                }
                squareToCheck = thirdSquare;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                    return false;
                }
                //set rank and file of pieceTwo to the white king rank and file at the king square + each of the 3 empty squares
                castling = true;
                for (let i = 5; i > 2; i--) {
                    whiteKingRank = 1;
                    whiteKingFile = i;

                    /*
                    if (isCheck()) {
                        castling = false;
                        return false;
                    }
                    */
                }
                //new king position is taken care of by the second click

                //now move the white rook to the new destination square "14"
                whiteRookOriginalSquareDoc[0].classList.remove("whiteQueenRook");
                whiteRookOriginalSquareDoc[0].classList.remove("white");
                whiteKingOriginalSquareDoc[0].classList.remove("whiteKing");
                whiteKingOriginalSquareDoc[0].classList.remove("white");
                whiteRookDestinationSquareDoc[0].classList.add("whiteQueenRook");
                whiteRookDestinationSquareDoc[0].classList.add("white");
                castling = false;
                player = "black";
                return true;
            }
        }
        //CASTLING QUEENSIDE  king moves 2 squares towards "a" file
        //BLACK
        if (pieceOneRank - pieceTwoRank == 0) {
            if (((pieceOneFile - pieceTwoFile == 2) && (pieceOneName === "blackKing")) && ((blackKingMoveCounter != 0) || (blackQueenRookCounter != 0))) {
            }
            //if king moves 2 squares AND if pieceOneName === blackKing  AND blackKing has never moved and blackQueenRook has never moved
            if ((pieceOneFile - pieceTwoFile == 2) && (pieceOneName === "blackKing") && (blackKingMoveCounter == 0) && (blackQueenRookCounter == 0)) {
                let maxNumberOfSquaresToCheck = 3;
                let firstSquare = "#square" + (pieceOneRank) + Math.trunc(pieceOneFile - 1);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let secondSquare = "#square" + (pieceOneRank) + Math.trunc(pieceOneFile - 2);
                let secondSquareDoc = document.querySelectorAll(secondSquare);
                let thirdSquare = "#square" + (pieceOneRank) + Math.trunc(pieceOneFile - 3);
                let thirdSquareDoc = document.querySelectorAll(thirdSquare);
                let blackRookOriginalSquare = "#square" + 8 + 1;
                let blackRookDestinationSquare = "#square" + 8 + 4;
                let blackRookOriginalSquareDoc = document.querySelectorAll(blackRookOriginalSquare);
                let blackRookDestinationSquareDoc = document.querySelectorAll(blackRookDestinationSquare);
                let blackKingOriginalSquare = "#square" + 8 + 5;
                let blackKingOriginalSquareDoc = document.querySelectorAll(blackKingOriginalSquare);
                //loop a maximum of 3 times to find the 3 empty squares between king and rook
                let squareToCheck = firstSquare;
                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                    return false;
                }
                squareToCheck = secondSquare;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                    return false;
                }
                squareToCheck = thirdSquare;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                    return false;
                }
                //set rank and file of pieceTwo to the black king rank and file at the king square + each of the 3 empty squares
                castling = true;
                for (let i = 5; i > 2; i--) {
                    blackKingRank = 8;
                    blackKingFile = i;
                    /*
                    if (isCheck()) {
                        castling = false;
                        return false;
                    }
                    */
                }
                //new king position is taken care of by the second click

                //now move the black rook to the new destination square "84"
                blackRookOriginalSquareDoc[0].classList.remove("blackQueenRook");
                blackRookOriginalSquareDoc[0].classList.remove("black");
                blackKingOriginalSquareDoc[0].classList.remove("blackKing");
                blackKingOriginalSquareDoc[0].classList.remove("black");
                blackRookDestinationSquareDoc[0].classList.add("blackQueenRook");
                blackRookDestinationSquareDoc[0].classList.add("black");
                castling = false;
                player = "white";
                return true;
            }
        }
        //going LEFT

        let maxNumberOfSquaresToCheckLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
        if (pieceOneRank - pieceTwoRank == 0) {
            if (pieceOneFile - pieceTwoFile > 0) {
                let destinationSquareRank = Number(pieceTwoRank);
                let destinationSquareFileTemp = Number(pieceTwoFile);
                let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                let firstSquareRank = Number(pieceOneRank);
                let firstSquareFile = Number(pieceOneFile) - 1;
                let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let counter = 0;
                let squaresCountedLeft = 0;

                
                //code added for Kings
                if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                    maxNumberOfSquaresToCheckLeft = 0;
                }               

                for (let i = 0; i <= maxNumberOfSquaresToCheckLeft; i++) {
                    counter++;
                    squaresCountedLeft++;
                    let squareToCheckRank = Number(pieceOneRank);
                    let squareToCheckFile = Number(pieceOneFile) - squaresCountedLeft;
                    let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                    let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                    if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckLeft != 0)) {
                        return false;
                    }

                    
                    //added code for Kings
                    if (pieceOneName === "whiteKing") {
                        if (((Number(pieceOneFile)) - destinationSquareFileTemp) > 1) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            //alert("You captured your blacks piece");
                            player = "black";
                            captureSound.play();
                            capture = true;
                            
                            return true;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            //alert("You cant move your King there");
                            return false;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "black";
                            return true;
                        }
                    }
                    if (pieceOneName === "blackKing") {
                        if (((Number(pieceOneFile)) - destinationSquareFileTemp) > 1) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            //alert("You cant move your King there");
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {

                            //alert("You captured your blacks piece");
                            captureSound.play();
                            capture = true;
                            player = "white";
                            return true;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "white";
                            return true;
                        }
                    }

                    


                    //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                    if ((maxNumberOfSquaresToCheckLeft == 0) || (squaresCountedLeft == maxNumberOfSquaresToCheckLeft)) {
                        if (destinationSquareDoc[0].classList.length !== emptySquare) {
                            if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                return false;
                            }
                            if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                captureSound.play();
                            capture = true;
                            if (player === "white") {
                                player = "black";
                                
                            }
                            else if(player === "black") {
                                player = "white";
                            
                            }
                                return true;
                            }
                            
                            else {
                                if (player === "white") {
                                    player = "black";
                                    return true;
                                }
                                else if(player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
                //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                if (destinationSquareDoc[0].classList.length == emptySquare) {
                    if (player === "white") {
                        player = "black";
                        return true;
                    } else {
                        if (player === "white") {
                            player = "black";
                            return true;
                        }
                    }
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    } else {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    }
                }
            }
        }

        //CASTLING KING SIDE  king moves 2 squares towards "h" file
        //white
        if (pieceOneRank - pieceTwoRank == 0) {
            if (((pieceTwoFile - pieceOneFile == 2) && (pieceOneName === "whiteKing")) && ((whiteKingMoveCounter != 0) || (whiteKingRookCounter != 0))) {
                alert("cant castle  king or rook already moved");
            }
            //if king moves 2 squares AND if pieceOneName === whiteKing  AND whiteKing has never moved and whiteKingRook has never moved
            if ((pieceTwoFile - pieceOneFile == 2) && (pieceOneName === "whiteKing") && (whiteKingMoveCounter == 0) && (whiteKingRookCounter == 0)) {
                let maxNumberOfSquaresToCheck = 2;
                let firstSquare = "#square" + 1 + 6;
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let secondSquare = "#square" + 1 + 7;
                let secondSquareDoc = document.querySelectorAll(secondSquare);
                let whiteRookOriginalSquare = "#square" + 1 + 8;
                let whiteRookDestinationSquare = "#square" + 1 + 6;
                let whiteRookOriginalSquareDoc = document.querySelectorAll(whiteRookOriginalSquare);
                let whiteRookDestinationSquareDoc = document.querySelectorAll(whiteRookDestinationSquare);
                let whiteKingOriginalSquare = "#square" + 1 + 5;
                let whiteKingOriginalSquareDoc = document.querySelectorAll(whiteKingOriginalSquare);
                //loop a maximum of 2 times to find the 2 empty squares between king and rook
                let squareToCheck = firstSquare;
                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    return false;
                }
                squareToCheck = secondSquare;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("white");
                squareToCheckDoc[0].classList.remove("whiteKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    return false;
                }
                //set rank and file of pieceTwo to the white king rank and file at the king square + each of the 2 empty squares
                castling = true;
                for (let i = 5; i < 8; i++) {
                    whiteKingRank = 1;
                    whiteKingFile = i;
                    
                    if (isCheck()) {
                        castling = false;
                        return false;
                    }
                    
                }
                //new king position is taken care of by the second click

                //now move the white rook to the new destination square "16"
                whiteRookOriginalSquareDoc[0].classList.remove("whiteKingRook");
                whiteRookOriginalSquareDoc[0].classList.remove("white");
                whiteKingOriginalSquareDoc[0].classList.remove("whiteKing");
                whiteKingOriginalSquareDoc[0].classList.remove("white");
                whiteRookDestinationSquareDoc[0].classList.add("whiteKingRook");
                whiteRookDestinationSquareDoc[0].classList.add("white");
                castling = false;
                player = "black";
                return true;
            }
        }

        



        //CASTLING KING SIDE  king moves 2 squares towards "h" file
        //black
        if (pieceOneRank - pieceTwoRank == 0) {
            if (((pieceTwoFile - pieceOneFile == 2) && (pieceOneName === "blackKing")) && ((blackKingMoveCounter != 0) || (blackKingRookCounter != 0))) {
                alert("Cannot castle, your Rook or King have moved before");
            }
            //if king moves 2 squares AND if pieceOneName === blackKing  AND blackKing has never moved and blackKingRook has never moved
            if ((pieceTwoFile - pieceOneFile == 2) && (pieceOneName === "blackKing") && (blackKingMoveCounter == 0) && (blackKingRookCounter == 0)) {
                let maxNumberOfSquaresToCheck = 2;
                let firstSquare = "#square" + 8 + 6;
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let secondSquare = "#square" + 8 + 7;
                let secondSquareDoc = document.querySelectorAll(secondSquare);
                let blackRookOriginalSquare = "#square" + 8 + 8;
                let blackRookDestinationSquare = "#square" + 8 + 6;
                let blackRookOriginalSquareDoc = document.querySelectorAll(blackRookOriginalSquare);
                let blackRookDestinationSquareDoc = document.querySelectorAll(blackRookDestinationSquare);
                let blackKingOriginalSquare = "#square" + 8 + 5;
                let blackKingOriginalSquareDoc = document.querySelectorAll(blackKingOriginalSquare);
                let squareToCheck = firstSquare;
                let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    return false;
                }
                squareToCheck = secondSquare;
                squareToCheckDoc = document.querySelectorAll(squareToCheck);
                squareToCheckDoc[0].classList.remove("black");
                squareToCheckDoc[0].classList.remove("blackKing2");
                if (squareToCheckDoc[0].classList.length != emptySquare) {
                    return false;
                }
                //set rank and file of pieceTwo to the black king rank and file at the king square + each of the 2 empty squares
                castling = true;
                for (let i = 5; i < 8; i++) {
                    blackKingRank = 8;
                    blackKingFile = i;
                    

                    if (isCheck()) {
                        castling = false;
                        return false;
                    }
                    
                }
                //new king position is taken care of by the second click

                //now move the white rook to the new destination square "86"
                blackRookOriginalSquareDoc[0].classList.remove("blackKingRook");
                blackRookOriginalSquareDoc[0].classList.remove("black");
                blackKingOriginalSquareDoc[0].classList.remove("blackKing");
                blackKingOriginalSquareDoc[0].classList.remove("black");
                blackRookDestinationSquareDoc[0].classList.add("blackKingRook");
                blackRookDestinationSquareDoc[0].classList.add("black");
                castling = false;
                player = "white";
                return true;
            }
        }

        

        //going RIGHT
        let maxNumberOfSquaresToCheckRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
        if (pieceOneRank - pieceTwoRank == 0) {
            if (pieceTwoFile - pieceOneFile > 0) {
                let destinationSquareRank = Number(pieceTwoRank);
                let destinationSquareFileTemp = Number(pieceTwoFile);
                let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                let firstSquareRank = Number(pieceOneRank);
                let firstSquareFile = Number(pieceOneFile) + 1;
                let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let counter = 0;
                let squaresCountedRight = 0;
                for (let i = 0; i <= maxNumberOfSquaresToCheckRight; i++) {
                    counter++;
                    squaresCountedRight++;

                    

                    //code added for Kings
                    if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                        maxNumberOfSquaresToCheckRight = 0;
                    }
                    
                    let squareToCheckRank = Number(pieceOneRank);
                    let squareToCheckFile = Number(pieceOneFile) + squaresCountedRight;
                    let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                    let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                    if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckRight != 0)) {
                        return false;
                    }
                    //added code for Kings
                    if (pieceOneName === "whiteKing") {
                        if ((destinationSquareFileTemp - (Number(pieceOneFile))) > 1) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            // alert("You captured your blacks piece");
                            captureSound.play();
                            capture = true;
                            player = "black";
                            return true;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            //alert("You cant move your King there");
                            return false;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "black";
                            return true;
                        }
                    }
                    if (pieceOneName === "blackKing") {
                        if ((destinationSquareFileTemp - (Number(pieceOneFile))) > 1) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            //alert("You cant move your King there");
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {

                            //alert("You captured whites piece");
                            captureSound.play();
                            capture = true;
                            player = "white";
                            return true;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "white";
                            return true;
                        }
                    }

                    
                    //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                    if ((maxNumberOfSquaresToCheckRight == 0) || (squaresCountedRight == maxNumberOfSquaresToCheckRight)) {
                        if (destinationSquareDoc[0].classList.length !== emptySquare) {
                            if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                return false;
                            }
                            if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                captureSound.play();
                                capture = true;
                            if (player === "white") {
                                player = "black";
                            }
                            else if (player === "black") {
                                player = "white";
                            }
                                return true;
                            }

                             else {
                                if (player === "white") {
                                    player = "black";
                                    //alert("You captured blacks piece");
                                    return true;
                                }
                                else if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
                //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                if (destinationSquareDoc[0].classList.length == emptySquare) {
                    if (player === "white") {
                        player = "black";
                        return true;
                    } else {
                        if (player === "white") {
                            player = "black";
                            return true;
                        }
                    }
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    } else {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    }
                }
            }
        }
        //going UP/LEFT DIAGONAL
        if ((pieceOneName === "whiteQueen") || (pieceOneName === "blackQueen") || (pieceOneName === "blackKing") || (pieceOneName === "whiteKing")) {
            let maxNumberOfSquaresToCheckUpLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
            if (pieceOneFile - pieceTwoFile > 0) {
                if (pieceTwoRank - pieceOneRank > 0) {
                    if ((pieceTwoRank - pieceOneRank) == (Number(pieceOneFile) - Number(pieceTwoFile))) {
                        let destinationSquareRank = Number(pieceTwoRank);
                        let destinationSquareFileTemp = Number(pieceTwoFile);
                        let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                        let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                        let firstSquareRank = Number(pieceOneRank) + 1;
                        let firstSquareFile = Number(pieceOneFile) - 1;
                        let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                        let firstSquareDoc = document.querySelectorAll(firstSquare);
                        let counter = 0;
                        let squaresCountedUpLeft = 0;
                        for (let i = 0; i <= maxNumberOfSquaresToCheckUpLeft; i++) {
                            counter++;
                            squaresCountedUpLeft++;
                            if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                                maxNumberOfSquaresToCheckUpLeft = 0;
                            }
                            let squareToCheckRank = Number(pieceOneRank) + squaresCountedUpLeft;
                            let squareToCheckFile = Number(pieceOneFile) - squaresCountedUpLeft;
                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpLeft != 0)) {
                                return false;
                            }
                            
                            

                            //added code for Kings
                            if (pieceOneName === "whiteKing") {
                                if (((pieceTwoRank - pieceOneRank) > 1) && ((Number(pieceOneFile)) - destinationSquareFileTemp) > 1) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                                    captureSound.play();
                                    capture = true;
                                    player = "black";
                                    return true;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                                    return false;
                                }
                                if (squareToCheckDoc[0].classList.length == emptySquare) {
                                    player = "black";
                                    return true;
                                }
                            }
                            if (pieceOneName === "blackKing") {
                                if (((pieceTwoRank - pieceOneRank) > 1) && ((Number(pieceOneFile)) - destinationSquareFileTemp) > 1) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                                    captureSound.play();
                                   capture = true;
                                    player = "white";
                                    return true;
                                }
                                if (squareToCheckDoc[0].classList.length == emptySquare) {
                                    player = "white";
                                    return true;
                                }
                            }
                            
                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                            if ((maxNumberOfSquaresToCheckUpLeft == 0) || (squaresCountedUpLeft == maxNumberOfSquaresToCheckUpLeft)) {
                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                    if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                        return false;
                                    }
                                    if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                        captureSound.play();
                            capture = true;
                            if (player === "white") {
                                player = "black";
                            }
                            else if (player === "black") {
                                player = "white";
                            }
                                        return true;
                                    }
                                    
                                    else {
                                        if (player === "white") {
                                            player = "black";
                                            return true;
                                        }
                                        if (player === "black") {
                                            player = "white";
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                            if (player === "white") {
                                player = "black";
                                return true;
                            } else {
                                if (player === "white") {
                                    //alert("in the final else statement in queen UP/right");
                                    player = "black";
                                    //alert("You captured blacks piece");
                                    return true;
                                }
                            }
                            if (destinationSquareDoc[0].classList.length == emptySquare) {
                                if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            } else {
                                if (player === "black") {
                                    //alert("in the final else statement in queen UP/right");
                                    player = "white";
                                    //alert("You captured whites piece");
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        //going UP/RIGHT
        if ((pieceOneName === "whiteQueen") || (pieceOneName === "blackQueen") || (pieceOneName === "blackKing") || (pieceOneName === "whiteKing")) {
            let maxNumberOfSquaresToCheckUpRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
            if (pieceTwoFile - pieceOneFile > 0) {
                if (pieceTwoRank - pieceOneRank > 0) {
                    if ((pieceTwoRank - pieceOneRank) == (Number(pieceTwoFile) - Number(pieceOneFile))) {
                        //let destinationSquareRank = Number(pieceTwoRank);
                        let destinationSquareFile = Number(pieceTwoFile);
                        let destinationSquare = "#square" + pieceTwoRank + Math.trunc(destinationSquareFile);
                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                        let firstSquareRank = Number(pieceOneRank) + 1;
                        let firstSquareFile = Number(pieceOneFile) + 1;
                        let counter = 0;
                        let squaresCountedUpRight = 0;
                        for (let i = 0; i <= maxNumberOfSquaresToCheckUpRight; i++) {
                            counter++;
                            squaresCountedUpRight++;
                            if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                                maxNumberOfSquaresToCheckUpRight = 0;
                            }
                            let squareToCheckRank = Number(pieceOneRank) + squaresCountedUpRight;
                            let squareToCheckFile = Number(pieceOneFile) + squaresCountedUpRight;
                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckUpRight != 0)) {
                                return false;
                            }

                            
                            //added code for Kings
                            if (pieceOneName === "whiteKing") {
                                // alert("king got here???");
                                if ((pieceTwoRank - pieceOneRank > 1) && (destinationSquareFile - (Number(pieceOneFile)) > 1)) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                                    // alert("You captured your blacks piece");
                                    captureSound.play();
                                    capture = true;
                                    player = "black";
                                    return true;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                                    //alert("You cant move your King there");
                                    return false;
                                }
                                if (squareToCheckDoc[0].classList.length == emptySquare) {
                                    player = "black";
                                    return true;
                                }
                            }
                            if (pieceOneName === "blackKing") {
                                //alert("king got here???");
                                if (((pieceTwoRank - pieceOneRank) > 1) && (destinationSquareFile - (Number(pieceOneFile)) > 1)) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                                    // alert("You cant move your King there");
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {

                                    //alert("You captured your whites piece");
                                    captureSound.play();
                                    capture = true;
                                    player = "white";

                                    return true;
                                }
                                if (squareToCheckDoc[0].classList.length == emptySquare) {
                                    player = "white";
                                    return true;
                                }
                            }

                            


                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                            if ((maxNumberOfSquaresToCheckUpRight == 0) || (squaresCountedUpRight == maxNumberOfSquaresToCheckUpRight)) {
                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                    if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                        return false;
                                    }
                                    if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                        captureSound.play();
                                        capture = true;
                                        if (player === "white") {
                                            player = "black";
                                        }
                                        else if (player === "black") {
                                            player = "white";
                                        }
                                        return true;
                                    }
                                     else {
                                        if (player === "white") {
                                            player = "black";
                                            return true;
                                        }
                                        else if (player === "black") {
                                            player = "white";
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                            if (player === "white") {

                                player = "black";
                                return true;
                            } else {
                                if (player === "white") {
                                    player = "black";
                                    return true;
                                }
                            }
                            if (destinationSquareDoc[0].classList.length == emptySquare) {
                                if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            } else {
                                if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        //going DOWN/LEFT
        if ((pieceOneName === "whiteQueen") || (pieceOneName === "blackQueen") || (pieceOneName === "blackKing") || (pieceOneName === "whiteKing")) {
            let maxNumberOfSquaresToCheckDownLeft = Number(pieceOneFile) - Number(pieceTwoFile) - 1;
            if (pieceOneFile - pieceTwoFile > 0) {

                if (pieceOneRank - pieceTwoRank > 0) {
                    if ((pieceOneRank - pieceTwoRank) == (Number(pieceOneFile) - Number(pieceTwoFile))) {
                        let destinationSquareRank = Number(pieceTwoRank);
                        let destinationSquareFileTemp = Number(pieceTwoFile);
                        let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                        let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                        let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                        let firstSquareRank = Number(pieceOneRank) - 1;
                        let firstSquareFile = Number(pieceOneFile) - 1;
                        let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                        let firstSquareDoc = document.querySelectorAll(firstSquare);
                        let counter = 0;
                        let squaresCountedDownLeft = 0;
                        for (let i = 0; i <= maxNumberOfSquaresToCheckDownLeft; i++) {
                            counter++;
                            squaresCountedDownLeft++;
                            if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                                maxNumberOfSquaresToCheckDownLeft = 0;
                            }
                            let squareToCheckRank = Number(pieceOneRank) - squaresCountedDownLeft;
                            let squareToCheckFile = Number(pieceOneFile) - squaresCountedDownLeft;
                            let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                            let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                            if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownLeft != 0)) {
                                return false;
                            }

                            
                            //added code for Kings
                            if (pieceOneName === "whiteKing") {
                                if ((pieceOneRank - pieceTwoRank > 1) && ((Number(pieceOneFile)) - destinationSquareFileTemp) > 1) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                                    player = "black";
                                    captureSound.play();
                                    capture = true;
                                    return true;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                                    return false;
                                }
                                if (squareToCheckDoc[0].classList.length == emptySquare) {
                                    player = "black";
                                    return true;
                                }
                            }
                            if (pieceOneName === "blackKing") {
                                if (((pieceTwoRank - pieceOneRank) > 1) && ((Number(pieceOneFile)) - destinationSquareFileTemp) > 1) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                                    return false;
                                }
                                if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {

                                    player = "white";
                                    captureSound.play();
                                    capture = true;

                                    return true;
                                }
                                if (squareToCheckDoc[0].classList.length == emptySquare) {
                                    player = "white";
                                    return true;
                                }
                            }

                            


                            //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                            if ((maxNumberOfSquaresToCheckDownLeft == 0) || (squaresCountedDownLeft == maxNumberOfSquaresToCheckDownLeft)) {
                                if (destinationSquareDoc[0].classList.length !== emptySquare) {
                                    if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                        return false;
                                    }
                                    if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                        captureSound.play();
                                        capture = true;
                                        if (player === "white") {
                                            player = "black";
                                        }
                                        else if (player === "black") {
                                            player = "white";
                                        }
                                        return true;
                                    }
                                     else {
                                        if (player === "white") {
                                            player = "black";
                                            return true;
                                        }
                                        else if (player === "black") {
                                            player = "white";
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                        if (destinationSquareDoc[0].classList.length == emptySquare) {
                            if (player === "white") {
                                player = "black";
                                return true;
                            } else {
                                if (player === "white") {
                                    player = "black";
                                    return true;
                                }
                            }
                            if (destinationSquareDoc[0].classList.length == emptySquare) {
                                if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            } else {
                                if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        
  //going DOWN/Right
  if ((pieceOneName === "whiteQueen") || (pieceOneName === "blackQueen") || (pieceOneName === "blackKing") || (pieceOneName === "whiteKing")) {
    let maxNumberOfSquaresToCheckDownRight = Number(pieceTwoFile) - Number(pieceOneFile) - 1;
    if (pieceTwoFile - pieceOneFile > 0) {
        
        if (pieceOneRank - pieceTwoRank > 0) {
            if ((pieceOneRank - pieceTwoRank) == (Number(pieceTwoFile) - Number(pieceOneFile))) {

                let destinationSquareRank = Number(pieceTwoRank);
                let destinationSquareFileTemp = Number(pieceTwoFile);
                let destinationSquareFile = Math.trunc(destinationSquareFileTemp);
                let destinationSquare = "#square" + pieceTwoRank + Math.trunc(pieceTwoFile);
                let destinationSquareDoc = document.querySelectorAll(destinationSquare);
                let firstSquareRank = Number(pieceOneRank) - 1;
                let firstSquareFile = Number(pieceOneFile) - 1;
                let firstSquare = "#square" + firstSquareRank + Math.trunc(firstSquareFile);
                let firstSquareDoc = document.querySelectorAll(firstSquare);
                let counter = 0;
                let squaresCountedDownRight = 0;
                for (let i = 0; i <= maxNumberOfSquaresToCheckDownRight; i++) {
                    counter++;
                    squaresCountedDownRight++;
                    if ((pieceOneName === "whiteKing") || (pieceOneName === "blackKing")) {
                        maxNumberOfSquaresToCheckDownRight = 0;
                    }
                    let squareToCheckRank = Number(pieceOneRank) - squaresCountedDownRight;
                    let squareToCheckFile = Number(pieceOneFile) + squaresCountedDownRight;
                    let squareToCheck = "#square" + squareToCheckRank + Math.trunc(squareToCheckFile);
                    let squareToCheckDoc = document.querySelectorAll(squareToCheck);
                    if (((squareToCheckDoc[0].classList.length != emptySquare)) && (maxNumberOfSquaresToCheckDownRight != 0)) {
                        return false;
                    }

                    
                    //added code for Kings
                    if (pieceOneName === "whiteKing") {
                        if ((pieceOneRank - pieceTwoRank > 1) && (destinationSquareFileTemp - (Number(pieceOneFile))  > 1)) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            player = "black";
                            captureSound.play();
                            capture = true;
                            return true;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {
                            return false;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "black";
                            return true;
                        }
                    }
                    if (pieceOneName === "blackKing") {
                        if (((pieceTwoRank - pieceOneRank) > 1) && (destinationSquareFileTemp - (Number(pieceOneFile))  > 1)) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "black")) {
                            return false;
                        }
                        if ((squareToCheckDoc[0].classList.length != emptySquare) && (pieceTwoclassArray[5] === "white")) {

                            player = "white";
                            captureSound.play();
                            capture = true;

                            return true;
                        }
                        if (squareToCheckDoc[0].classList.length == emptySquare) {
                            player = "white";
                            return true;
                        }
                    }

                    


                    //checks the final destination square when its the only square to check, if own color piece on square loop ends, if other color piece it captures piece
                    if ((maxNumberOfSquaresToCheckDownRight == 0) || (squaresCountedDownRight == maxNumberOfSquaresToCheckDownRight)) {
                        if (destinationSquareDoc[0].classList.length !== emptySquare) {
                            if (((player === "white") && (pieceTwoclassArray[5] === "white")) || ((player === "black") && (pieceTwoclassArray[5] === "black"))) {
                                return false;
                            }
                            if (((player === "white") && (pieceTwoclassArray[5] === "black")) || ((player === "black") && (pieceTwoclassArray[5] === "white"))) {
                                captureSound.play();
                                capture = true;
                                if (player === "white") {
                                    player = "black";
                                }
                                else if (player === "black") {
                                    player = "white";
                                }
                                return true;
                            }
                             else {
                                if (player === "white") {
                                    player = "black";
                                    return true;
                                }
                                else if (player === "black") {
                                    player = "white";
                                    return true;
                                }
                            }
                        }
                    }
                }
                //after for loop ends, check the final destination square (does not check if the for loop only ran 1 time. )
                if (destinationSquareDoc[0].classList.length == emptySquare) {
                    if (player === "white") {
                        player = "black";
                        return true;
                    } else {
                        if (player === "white") {
                            player = "black";
                            return true;
                        }
                    }
                    if (destinationSquareDoc[0].classList.length == emptySquare) {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    } else {
                        if (player === "black") {
                            player = "white";
                            return true;
                        }
                    }
                }
            }
        }
    }
}
    }

    return false;
}    