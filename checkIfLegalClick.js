//checks if player picked his own piece
function checkIfLegalClick() {

    
     //////////////////////////////////////////////////////
     // this is a fix for thee problem of not being able to select your piece. This can happen if you first select the king  and then try to move
     // the king to your own piece square
    // this adds back the "white" if  missing.  
    // but after this fix, the first click  on the piece will not work,  you will have to click twice.  
    //  so this may not be the correct spot for this fix
    // 


            
    // alert("called checkIfLegalCLick()");
    // if(pieceOneclassArray.length == 5){
    //     if(pieceOneclassArray[4] == "whitePawn") {
    //         alert("got here whitePawn");

    //         tempSquare2ToCheckDoc[0].classList.add("white");
    //     }
    //     if(pieceOneclassArray[4] == "whiteBishop") {
    //         alert("got here whiteBishop");

    //         tempSquare2ToCheckDoc[0].classList.add("white");
    //     }
    //     if(pieceOneclassArray[4] == "whiteKing") {
    //         alert("got here whiteKing");

    //         tempSquare2ToCheckDoc[0].classList.add("white");
    //     }
    //     if(pieceOneclassArray[4] == "whiteQueen") {
    //         alert("got here whiteQueen");

    //         tempSquare2ToCheckDoc[0].classList.add("white");
    //     }

    



         ////////////////////////////////////////////////////////////////////////  
    if (player === "white") {
        if (pieceOneColor === "white") {
            return true;
        }
    }
    if (player === "black") {
        if (pieceOneColor === "black") {
            return true;
        }
    }
    return false;
}