let introdat = localStorage.getItem("intro");
let extrodat = localStorage.getItem("extro");
let advdat = localStorage.getItem("adv");
let opidat = localStorage.getItem("opi");
let objedat = localStorage.getItem("obje");
let subjdat = localStorage.getItem("subj");
let helpdat = localStorage.getItem("help");
let selfdat = localStorage.getItem("self");
let consdat = localStorage.getItem("cons");
let spondat = localStorage.getItem("spon");
let intro = JSON.parse(introdat);
let extro = JSON.parse(extrodat);
let adv = JSON.parse(advdat);
let opi = JSON.parse(opidat);
let obje = JSON.parse(objedat);
let subj = JSON.parse(subjdat);
let help = JSON.parse(helpdat);
let self = JSON.parse(selfdat);
let cons = JSON.parse(consdat);
let spon = JSON.parse(spondat);

let type1 = null;
let type2 = null;
let type3 = null;
let type4 = null;

let resultszfe = [intro, extro, adv, opi, obje, subj, help, self, cons, spon];
console.log(resultszfe);
function restart() {
    introdat = localStorage.getItem("intro");
    extrodat = localStorage.getItem("extro");
    advdat = localStorage.getItem("adv");
    opidat = localStorage.getItem("opi");
    objedat = localStorage.getItem("obje");
    subjdat = localStorage.getItem("subj");
    helpdat = localStorage.getItem("help");
    selfdat = localStorage.getItem("self");
    consdat = localStorage.getItem("cons");
    spondat = localStorage.getItem("spon");
    intro = JSON.parse(introdat);
    extro = JSON.parse(extrodat);
    adv = JSON.parse(advdat);
    opi = JSON.parse(opidat);
    obje = JSON.parse(objedat);
    subj = JSON.parse(subjdat);
    help = JSON.parse(helpdat);
    self = JSON.parse(selfdat);
    cons = JSON.parse(consdat);
    spon = JSON.parse(spondat);
  
    intro = 0;
    extro = 0;
    adv = 0;
    opi = 0;
    obje = 0;
    subj = 0;
    help = 0;
    self = 0;
    cons = 0;
    spon = 0;
  
    localStorage.setItem("intro", JSON.stringify(intro));
    localStorage.setItem("extro", JSON.stringify(extro));
    localStorage.setItem("adv", JSON.stringify(adv));
    localStorage.setItem("opi", JSON.stringify(opi));
    localStorage.setItem("obje", JSON.stringify(obje));
    localStorage.setItem("subj", JSON.stringify(subj));
    localStorage.setItem("help", JSON.stringify(help));
    localStorage.setItem("self", JSON.stringify(self));
    localStorage.setItem("cons", JSON.stringify(cons));
    localStorage.setItem("spon", JSON.stringify(spon));
    window.location.href = "index.html";
  }

function results() {
    if (intro > extro) {
      document.getElementById("result1").innerHTML = "You are an Introvert!";
        type1 = "I";
    }
    else if (intro < extro) {
      document.getElementById("result1").innerHTML = "You are an Extrovert!";
        type1 = "E";
    }
    if (adv > opi) {
      document.getElementById("result2").innerHTML = "You are Adventurous!";
        type2 = "N";
    }
    else if (adv < opi) {
      document.getElementById("result2").innerHTML = "You are Opinionated!";
        type2 = "S";
    }
    if (obje > subj) {
    document.getElementById("result3").innerHTML = "You are Objective!";
        type3 = "T";
    }
    else if (obje < subj) {
    document.getElementById("result3").innerHTML = "You are Subjective!";
        type3 = "F";
    }
    if (help > self) {
    document.getElementById("result4").innerHTML = "You are Helpful!";
        }
    else if (help < self) {
    document.getElementById("result4").innerHTML = "You are Self-Focused!";
    }
    if (cons > spon) {
    document.getElementById("result5").innerHTML = "You are Conscientious!";
        type4 = "J";
    }
    else if (cons < spon) {
    document.getElementById("result5").innerHTML = "You are Spontaneous!";
        type4 = "P";
    }
    document.getElementById("pers-type").innerHTML = "Your personality type is " + type1 + type2 + type3 + type4 + "!";
}
results();