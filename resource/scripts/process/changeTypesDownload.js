let net = 'resource/app/lumuslab.zip';
let exe = 'resource/app/lumuslab.exe';
let pws = 'resource/app/lumuslab.bat';

let buttondownload = document.getElementById('buttondownload')

function selectNet() {
    buttondownload.href = net;
}

function selectExe() {
    buttondownload.href = exe;
}

function selectPws() {
    buttondownload.href = pws;
}

selectExe()