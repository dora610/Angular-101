import { fromEvent } from "rxjs";
import {scan} from 'rxjs/operators'

// callback way of doing things
document.addEventListener("click", () => console.log("clicked"));

// observable of doing things
fromEvent(document, "click").subscribe(() => console.log("clicked with rxjs"));

// with rxjs operator
fromEvent(document, 'click')
.pipe(scan(count => (count + 1), 0))
.subscribe(count => console.log(`Clicked at ${count}`))