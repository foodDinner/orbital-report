export class Satellite {
    aname: string;
    btype: string;
    elaunchDate: string;
    dorbitType: string;
    coperational: boolean;
    
    constructor(aname: string, btype: string, elaunchDate: string, dorbitType: string, coperational: boolean) {
        this.aname = aname;
        this.btype = btype;
        this.elaunchDate = elaunchDate;
        this.dorbitType = dorbitType;
        this.coperational = coperational;
    }

    shouldShowWarning() {
        if (this.btype.toLowerCase() == 'space debris') {
            return true;
        }
        else {
            return false;
        }
    }
}