import Jatekter from "../Jatekter.js";


function tesztLampaEges_KozepsoLampaTest(){
    const szElem = document.createElement("div");
    const e = new Jatekter(szElem);
    

    window.dispatchEvent(new CustomEvent("kattint", { detail: 4 }));


    let vart = [false, true, false,
                true, false, true,
                 false, true, false];
    let kapott = e.allapot;
    console.log(kapott);
    console.log(vart);
    console.assert(
      vart.length === kapott.length,
      `várt: ${vart}, kapott: ${kapott} elbukott a KozepsoLampaTest`
    );
    console.log("KozepsoLampaTest lefutott");
}

tesztLampaEges_KozepsoLampaTest();