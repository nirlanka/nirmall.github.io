var txtEng=document.getElementById('txt-eng'),
    txtSin=document.getElementById('txt-sin'),
    txtNote=document.getElementById('txt-note');

var sin=[
    "ඛ්", "ක්", "ඝ්", "ග්", "ඡ්", "ච්", "ඵ්", "ප්", "භ්", "බ්", 
    "ත්", "ථ්", "ද්", "ධ්", 
    "ජ්", 
    "ට්", "ඨ්", "ඩ්", "ඪ්", "න්", "ණ්", "ම්", "ඹ්", "ල්", "ළ්", 
    "ය්", "ර්", "ව්", 
    "ෂ්", "ශ්", "ස්", 
    "හ්", "ෆ්", 
    "ෑ", "ැ", "ා", "", "ී", "ි", "ූ", "ු", "ේ", "ෙ", "ෝ", "ො", 
    "ඈ", "ඇ", "ආ", "අ", "ඊ", "ඉ", "ඌ", "උ", "ඒ", "එ", "ඕ", "ඔ"
],
    eng=[
        /kh/g, /k/g, /gh/g, /g/g, /Ch/g, /ch/g, /ph/g, /p/g, /bh/g, /b/g, 
        /th/g, /Th/g, /dh/g, /Dh/g, 
        /j/g,
        /t/g, /T/g, /d/g, /D/g, /n/g, /N/g, /m/g, /M/g, /l/g, /L/g, 
        /y/g, /r/g, /w/g, 
        /sh/g, /Sh/g, /s/g, 
        /h/g, /f/g, 
        /[්]aae/g, /[්]ae/g, /[්]aa/g, /[්]a/g, /[්]ie/g, /[්]i/g, /[්]uu/g, /[්]u/g, /[්]ea/g, /[්]e/g, /[්]oa/g, /[්]o/g, 
        /aae/g, /ae/g, /aa/g, /a/g, /ie/g, /i/g, /uu/g, /u/g, /ea/g, /e/g, /oa/g, /o/g
    ];

function convert() {
    var txt="",
        txt_parts=txtEng.value.split("~~");
    for (var n=0; n<txt_parts.length; n++) {
        if (n%2==0) {
            for (var k=0; k<eng.length; k++)
                txt_parts[n]=txt_parts[n].replace(eng[k], sin[k]);
        }
        txt+=txt_parts[n];
    }
    txtSin.value=txt;
}

function clear_txt() {
    txtEng.value="";
    txtSin.value="";
}

function add() {
    txtNote.value+=txtSin.value;
}

function new_txt() {
    clear_txt();
    txtNote.value="";
}