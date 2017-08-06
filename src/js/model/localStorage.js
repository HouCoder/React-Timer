export const getTODO = (id) => {
    let TODOs;

    if (localStorage.getItem('TODOs')) {
        TODOs = JSON.parse(localStorage.getItem('TODOs'))
    } else {
        return null;
    }

    if (id) {
        return TODOs.filter(row => row.id === id)[0];
    } else {
        return TODOs;
    }
};

export const setTODO = (id, options) => {
    const TODOs = getTODO();

    TODOs.map((row) => {
        if (row.id === id) {
            Object.assign(row, options);
        }
    });
    localStorage.setItem('TODOs', JSON.stringify(TODOs))
}
