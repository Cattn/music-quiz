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
      document.getElementById("result1-title").innerHTML = "Introvert";
      document.getElementById("result1-cont").innerHTML = "You tend to prefer spending time alone to rest and relax. You keep a close group of friends who you may spend time with, but are not quite open to making too many new friends.";
    }
    else if (intro < extro) {
      document.getElementById("result1").innerHTML = "You are an Extrovert!";
        type1 = "E";
      document.getElementById("result1-title").innerHTML = "Extrovert";
      document.getElementById("result1-cont").innerHTML = "You tend to prefer spending time socially with others to have fun and liven up. You have many friends, some close and some from various forms of connections. You can easily start conversations and make new friends.";
    }
    if (intro == extro) {
      document.getElementById("result1").innerHTML = "You are an Ambivert!";
        type1 = "X";
      document.getElementById("result1-title").innerHTML = "Ambivert";
      document.getElementById("result1-cont").innerHTML = " You want a fine balance of alone time and social situations to have a stable amount of energy. You mostly have a close group of friends who you spend time with, but you can still make new friends.";
    }
    if (adv > opi) {
      document.getElementById("result2").innerHTML = "You are Adventurous!";
        type2 = "N";
      document.getElementById("result2-title").innerHTML = "Adventurous";
      document.getElementById("result2-cont").innerHTML = "You are very open to new things and always want to try them. You aren’t afraid of the risks that may come with your decisions. You are open-minded and can recognize that you are wrong easily. You see the bigger picture of a situation or argument and are quickly willing to switch your beliefs or try something new.";
    }
    else if (adv < opi) {
      document.getElementById("result2").innerHTML = "You are Opinionated!";
        type2 = "S";
      document.getElementById("result2-title").innerHTML = "Opinionated";
      document.getElementById("result2-cont").innerHTML = "You aren’t open to new things, but that isn’t necessarily a bad thing. You have firm beliefs and opinions and are more cautious about new things because you consider the risks. You pick up on the little things and important details of a situation or argument and always try to defend and claim that you are correct.";
    }
    if (adv == opi) {
      document.getElementById("result2").innerHTML = "You are an Active Thinker";
        type2 = "X";
      document.getElementById("result2-title").innerHTML = "Active Thinker";
      document.getElementById("result2-cont").innerHTML = "You are neither fully open to new things nor stuck in your ways. You may consider and accept certain opinions of others, but not personally believe in them. You see the bigger picture of a situation or argument, but also have firm beliefs that you stand for.";
    }
    if (obje > subj) {
    document.getElementById("result3").innerHTML = "You are Objective!";
        type3 = "T";
      document.getElementById("result3-title").innerHTML = "Objective";
      document.getElementById("result3-cont").innerHTML = "You base your decisions, opinions, and beliefs mostly off of logic and reason. You weigh your pros and cons when deciding an important issue and use data and facts to support your stance or choice.";
    }
    else if (obje < subj) {
    document.getElementById("result3").innerHTML = "You are Subjective!";
        type3 = "F";
      document.getElementById("result3-title").innerHTML = "Subjective";
      document.getElementById("result3-cont").innerHTML = "You base your decisions, opinions, and beliefs mostly off of emotion and personal experience. You follow your heart and often consider the consequences that will affect you and the people you care about.";
    }
    if (obje == subj) {
    document.getElementById("result3").innerHTML = "You are Indecisive!";
        type3 = "X";
      document.getElementById("result3-title").innerHTML = "Indecisive";
      document.getElementById("result3-cont").innerHTML = "It takes a lot of time and effort to base your decisions, opinions, and beliefs, which isn’t necessarily a bad thing since you consider both logic and personal feelings when deciding on a topic. You think very carefully and don’t want to mess up anything that will come back to haunt you.";
    }

    if (help > self) {
    document.getElementById("result4").innerHTML = "You are Helpful!";

      document.getElementById("result4-title").innerHTML = "Helpful";
      document.getElementById("result4-cont").innerHTML = "You put others before yourself and are willing to help anyone to succeed in their tasks. You provide advice and are always there for your friends, but sometimes you forget to consider and care for yourself.";
        }
    else if (help < self) {
    document.getElementById("result4").innerHTML = "You are Self-Focused!";

      document.getElementById("result4-title").innerHTML = "Self-Focused";
      document.getElementById("result4-cont").innerHTML = "You put yourself before others and are not as willing to help everyone. You believe that you must first worry about yourself before you can help others, and you have many problems that you still need to solve personally.";
    }
    if (help == self) {
    document.getElementById("result4").innerHTML = "You are Self-Caring!";
      document.getElementById("result4-title").innerHTML = "Self-Caring";
      document.getElementById("result4-cont").innerHTML = "You have a balance of selfishness and selflessness. You spend time working on yourself, but you also can be there to help and provide for others. This healthy balance allows you to better yourself and others, but you might find yourself working very hard to try and help yourself and others at the same time.";
    }
    if (cons > spon) {
    document.getElementById("result5").innerHTML = "You are Conscientious!";
        type4 = "J";
      document.getElementById("result5-title").innerHTML = "Conscientious";
      document.getElementById("result5-cont").innerHTML = "You specialize in organization and preparation. You always come up with a plan and want to complete tasks in an orderly fashion. You tend to be more hardworking, attentive, and focused on the goals in front of you.";
    }
    else if (cons < spon) {
    document.getElementById("result5").innerHTML = "You are Spontaneous!";
        type4 = "P";
      document.getElementById("result5-title").innerHTML = "Spontaneous";
      document.getElementById("result5-cont").innerHTML = "You specialize in flexibility and improvisation. You just go with the flow and you can make decisions on the spot. You tend to be more laid-back, relaxed, and creative when it comes to achieving your goals, as you know they will come to you.";
    }
    if (cons == spon) {
    document.getElementById("result5").innerHTML = "You are Efficient!";
        type4 = "X";
      document.getElementById("result5-title").innerHTML = "Efficient";
      document.getElementById("result5-cont").innerHTML = "You specialize in working hard quickly. You can sometimes be organized with a plan, or just go with the flow. If you do end up doing things in the moment, you can work hard to achieve your goals.";
    }
    document.getElementById("pers-type").innerHTML = "Your Myers-Briggs Personality Type is... " + type1 + type2 + type3 + type4 + "!";
}
results();
