class Entry {
    constructor(min, max = min, data) {
        this.min = min;
        this.max = max;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

class RandomTable {
    constructor(entries) {
        this.entries = entries;
    }

    select(number) {
        let selected = this.entries.filter(e => (number >= e.min && number <= e.max));
        //console.log('RandomTable.select()', number, selected);
        if (selected.length > 0) return selected[0].getData();
    }
}

module.exports = {
    Entry,
    RandomTable
}