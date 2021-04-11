class BackendService {
    save = (desks) => {
        localStorage.setItem('desks', JSON.stringify(desks))
        console.debug("BackendService.save: ", desks)
    }

    saveDesk = (desk) => {
        let currentDesks = this.load()
        currentDesks[desk.id] = desk
        this.save(currentDesks)
    }

    load = () => {
        // localStorage.clear();
        let desksFromStorage = localStorage.getItem('desks');
        console.debug("BackendService.load: ", desksFromStorage)
        return desksFromStorage ? JSON.parse(desksFromStorage) : {}
    }
}

export default BackendService;
