function $(id) { return document.getElementById(id); }
function setRootStyle(property, value, priority) { document.documentElement.style.setProperty(property, value, priority); }
function getRootStyle(property) { return document.documentElement.style.getPropertyValue(property); }

const text = $('text');
const bytes = $('byte');
const hex = $('hex');
const hex_ = $('hex_');

function setValue($id) {
    
    if ($id == 'text') {
        bytes.value = TextToBytes(text.value);
        hex.value = TextToHexString(text.value);
        hex_.value = HexTo_Hex_(hex.value);
    }
    else if ($id == 'byte') {
        text.value = BytesToText(bytes.value.split(',').map(x => +x));
        hex.value = TextToHexString(text.value);
        hex_.value = HexTo_Hex_(hex.value);
    }
    else if ($id == 'hex') {
        text.value = HexStringToText(hex.value);
        bytes.value = HexStringToBytes(hex.value);
        hex_.value = HexTo_Hex_(hex.value);
    }
    else if ($id == 'hex_') {
        hex.value = _Hex_ToHex(hex_.value);
        text.value = HexStringToText(hex.value);
        bytes.value = HexStringToBytes(hex.value);
    }

    setRootStyle('--max-width', `calc(var(--font-size) * ${$('byte').value.length} / 4) + calc(var(--font-size)/4)`);
}

function HexTo_Hex_(hex) {
    let h = '';
    for (let i = 0; i < hex.length; i+=2) h += `${hex.substr(i, 2)} `;
    return h;
}
function _Hex_ToHex(hex_) {
    let h = '';
    for (let i = 0; i < hex_.length; i+=3) h += `${(hex_.substr(i, 2))}`;
    return h;
}
