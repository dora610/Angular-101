import {from, Observable} from 'rxjs';

const observable = new Observable(subscribe =>{
    subscribe.next(1)
    // subscribe.error('Just stop✋🚫')
    subscribe.next(2)
    subscribe.next(3)
    
    setTimeout(() => {
        subscribe.next(100)
        subscribe.complete()
    }, 2000);
    
    subscribe.next(4)
})

console.log('Hit the subscibe');

const subscriber = observable.subscribe({
    next(x){ console.log(`We got ${x}`)},
    error(err){console.error(`Error occurred!! ${err}`);},
    complete(){console.log('COMPLETED');}
})

subscriber.unsubscribe()

console.log('ALL DONE');

const anotherObservable = from([10, 20, 30, 40])
const subs = anotherObservable.subscribe( x=> console.log(x))
subs.unsubscribe()