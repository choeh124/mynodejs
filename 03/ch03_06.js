//const { exec } = require('child_process');
//const { exec:exec } = require('child_process');
const cp = require('child_process');

const cmd = 'dir'; //window : dir, mac:ls -la
cp.exec(cmd, { encoding: 'utf8' }, (err, stdout, stderr) => {
    if(err){
        console.error(`error 발생 : ${err}`);
        return;
    }
    console.log(stdout);
})