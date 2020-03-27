import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Tabs } from '../models/tabs/tabs.model';
import { map, switchMap } from 'rxjs/operators';
import { firestore } from 'firebase';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
    providedIn: 'root'
  })
export class DataService {    
    private dataStore: { 
        tabs: Tabs[],
        topic: string
    } = { 
        tabs: [],
        topic: ""
    };

    // Subjects should not be exposed outside of this class
    private _tabs = new BehaviorSubject<Tabs[]>([]); 
    private _topic = new BehaviorSubject<string>("");

    constructor(public afs: AngularFirestore, private zone: NgZone) { }

    // allow access to data by converting subjects to observables
    get tabs() {
        return this._tabs.asObservable();
    }

    get topic() {
        return this._topic.asObservable();
    }

    // based on passed-in id, update the topic display name and tab array
    ChangeTopic(id) {  
        const topic = this.afs.collection("topics").doc(id);
        topic.snapshotChanges().subscribe(a => {
            this.dataStore.topic = (a.payload.data() as any).displayName;
            this._topic.next(Object.assign({}, this.dataStore).topic);
        },
        error => console.log('Could not load topics'));

        topic.collection('tabs').snapshotChanges()
            .pipe<Tabs[]>(
                map(x => x.map(a => {
                    const data = a.payload.doc.data();
                    return {
                    id: data.id,
                    displayName: data.displayName,
                    toolTip: data.toolTip,
                    area: data.area,
                    display: data.display,
                    order: data.order,
                    etc: data.etc,
                    href: data.href,
                    active: data.active,
                    icon: data.icon
                };
                })
                )
            ).subscribe(data => {
                this.dataStore.tabs = data.sort((a, b) => a.order - b.order);
                this._tabs.next(Object.assign({}, this.dataStore).tabs);
            },
            error => console.log('Could not load tabs.')
        );
    }
}