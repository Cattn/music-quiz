let intro = 0;
let extro = 0;
let adv = 0;
let opi = 0;
let obje = 0;
let subj = 0;
let help = 0;
let self = 0;
let cons = 0;
let spon = 0;

function submitForm1() {
    var c1 = document.getElementById('q1_1').checked;
    var c2 = document.getElementById('q1_2').checked;
    var c3 = document.getElementById('q1_3').checked;
    var c4 = document.getElementById('q1_4').checked;
    var c5 = document.getElementById('q1_5').checked;
    var c6 = document.getElementById('q1_6').checked;
    var c7 = document.getElementById('q1_7').checked;
    var c8 = document.getElementById('q1_8').checked;
    var c9 = document.getElementById('q1_9').checked;

    if (c1 == true) {
        extro += 1;
        adv += 1;
        subj += 1;
        spon += 1;
    }
    if (c2 == true) {
        extro += 1;
        opi += 1;
        obje += 1;
        self += 1;
        cons += 1;
    }
    if (c3 == true) {
        intro += 1;
        opi += 1;
        help += 1;

    }
    if (c4 == true) {
        intro += 1;
        adv += 1;
        obje += 1;
        self += 1;
    }
    if (c5 == true) {
      intro += 1;
      opi += 1;
      help += 1;
      spon += 1;
  }
    if (c6 == true) {
    adv += 1;
    subj += 1;
    spon += 1;
}
    if (c7 == true) {
  extro += 1;
  adv += 1;
  subj += 1;
  help += 1;
  cons += 1;
}
    if (c8 == true) {
  intro += 1;
  adv += 1;
  obje += 1;
  self += 1;
  cons += 1;
}
    if (c9 == true) {
  adv += 1;
  obje += 1;
  spon += 1;
}
    let results = [intro, extro, adv, opi, obje, subj, help, self, cons, spon];
    console.log(results);
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
    window.location.href = "q2.html";
}

function submitForm2() {
  var c1 = document.getElementById('q1_1').checked;
  var c2 = document.getElementById('q1_2').checked;
  var c3 = document.getElementById('q1_3').checked;
  var c4 = document.getElementById('q1_4').checked;
  
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

  if (c1 == true) {
      spon += 1;
  }
  if (c2 == true) {
      extro += 2;
      adv += 1;
      subj += 1;
      help += 1;
      spon += 1;
  }
  if (c3 == true) {
      intro += 2;
      opi += 1;
      obje += 1;
      self += 1;
      cons += 1;
  }
  if (c4 == true) {
      obje += 1;
      help += 1;
      cons += 2;
  }
  let results = [intro, extro, adv, opi, obje, subj, help, self, cons, spon];
  console.log(results);
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
  window.location.href = "q3.html";
}

function submitForm3() {
  var c1 = document.getElementById('q1_1').checked;
  var c2 = document.getElementById('q1_2').checked;
  var c3 = document.getElementById('q1_3').checked;
  var c4 = document.getElementById('q1_4').checked;
  
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

  if (c1 == true) {
      opi += 1;
      subj += 2;
      self += 1;
      spon += 1;
  }
  if (c2 == true) {
      intro += 1;
      self += 1;
      cons += 2;
  }
  if (c3 == true) {
      extro += 1;
      adv += 1;
      subj += 1;
  }
  if (c4 == true) {
      adv += 2;
      help += 1;
  }
  let results = [intro, extro, adv, opi, obje, subj, help, self, cons, spon];
  console.log(results);
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
  window.location.href = "q4.html";
}

function submitForm4() {
  var c1 = document.getElementById('q1_1').checked;
  var c2 = document.getElementById('q1_2').checked;
  var c3 = document.getElementById('q1_3').checked;
  var c4 = document.getElementById('q1_4').checked;
  var c5 = document.getElementById('q1_5').checked;
  
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

  if (c1 == true) {
      obj += 2;
      cons += 1;
  }
  if (c2 == true) {
      obje += 1;
  }
  if (c3 == true) {
      adv += 1;
  }
  if (c4 == true) {
      adv += 2;
  }
  if (c5 == true) {
      subj += 2;
      spon += 1;
  }

  let results = [intro, extro, adv, opi, obje, subj, help, self, cons, spon];
  console.log(results);
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
  window.location.href = "q5.html";
}

function submitForm5() {
  var c1 = document.getElementById('q1_1').checked;
  var c2 = document.getElementById('q1_2').checked;
  var c3 = document.getElementById('q1_3').checked;
  var c4 = document.getElementById('q1_4').checked;
  var c5 = document.getElementById('q1_5').checked;
  
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

  if (c1 == true) {
      extro += 2;
      adv += 2;
  }
  if (c2 == true) {
      extro += 1;
      adv += 1;
  }
  if (c3 == true) {
      spon += 1;
  }
  if (c4 == true) {
      intro += 1;
      opi += 1;
  }
  if (c5 == true) {
      intro += 2;
      opi += 2;
  }

  let results = [intro, extro, adv, opi, obje, subj, help, self, cons, spon];
  console.log(results);
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
  window.location.href = "q6.html"; 
}

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