import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const p = document.createElement("p");
    this.emojis.forEach(element => {
      p.innerText = p.innerText.concat(element);
    });
    document.getElementById("emojis").appendChild(p);
  }

  addBananas() {
    this.emojis = this.emojis.map((element) => element.concat(this.banana));
  }
}
