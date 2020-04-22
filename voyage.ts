class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    getNom(): string {
        return this._nom;
    }

    getPrix(): number {
        return this._prix;
    }
}

class SejourService {
    private _tabSejour: Sejour[]
    constructor() {
        this._tabSejour = [new Sejour('Londres', 200), new Sejour('Moscou', 400), new Sejour('Sydney', 1500)]
    }

    getSejourByName(nomSejour: string): Sejour | void {
        let sejourTrouve
        for (const sejour of this._tabSejour) {
            if (sejour.getNom() === nomSejour) {
                sejourTrouve = sejour;
                return sejourTrouve
            }
        };
    }
}

const sejourService = new SejourService()
console.log(sejourService.getSejourByName('Londres'))
console.log(sejourService.getSejourByName('Tokyo'))