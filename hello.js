
const {
    performance
} = require('perf_hooks');
//console.log('performance', performance.now());
const spawn = require('child_process').spawn,
    fish = spawn('stockfish_14.1_win_x64_avx2/stockfish_14.1_win_x64_avx2/stockfish_14.1_win_x64_avx2');
dataString = '';
fish.stdout.on('data', function (data) {
    dataString += data.toString();
    //sendMessage({message: 'python', body: 'received data from python'});
    let toSend = '';
    for (let i = 0; i < data.length; i++) {
        toSend += String.fromCharCode(data[i]);
    }
    console.log(toSend);
    if (toSend.indexOf('Nodes') !== -1) {
        console.log(performance.now() - now)
        //fish.kill('SIGINT');
    }
    //let ind=toSend.indexOf('{');
    // if (ind!==-1) {toSend=toSend.slice(ind)}
    // toSend = toSend.replace(/\r?\n|\r/g, '');
    // sendMessage({message: 'python', body: {fromPy: toSend}});
});
fish.stdout.on('end', function () {
    console.log('end');
    //sendMessage({message: 'python', body: dataString});
});
let now = performance.now();

fish.stdin.write('position startpos move e2e4' + '\r\n');
fish.stdin.write('go movetime 3000' + '\r\n');

//fish.stdin.write('position fen r2qk2r/1p1bb1pp/p2pQp2/2p2N2/5P2/1P1PP1P1/PBP4P/R3K3 w Qkq -'+'\r\n');
//fish.stdin.write('setoption name hash value 1024'+'\r\n');
//fish.stdin.write('go perft 6'+'\r\n');
//fish.stdin.write('uci'+'\r\n');
// fish.stdin.write('setoption name threads value 1' + '\r\n');
// fish.stdin.write('position fen rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' + '\r\n');
// fish.stdin.write('go infinite' + '\r\n');
//fish.stdin.write('go perft 6'+'\r\n');

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });
// rl.on('line', function(line){
//     if(line.startsWith("bestmove")){
//         console.log(line);

//     }
// })








// var fs = require('fs');
// var data = rl.readFileSync(0, 'utf-8');
// console.log(data);
// Data now points to a buffer containing the file's contents

// const readable = getReadableStreamSomehow();

// // 'readable' may be triggered multiple times as data is buffered in
// readable.on('readable', () => {
//   let chunk;
//   console.log('Stream is readable (new data received in buffer)');
//   // Use a loop to make sure we read all currently available data
//   while (null !== (chunk = readable.read())) {
//     console.log(`Read ${chunk.length} bytes of data...`);
//   }
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function(line){
//     console.log(line);
// })

// console.log(rl);

//fish.kill;


