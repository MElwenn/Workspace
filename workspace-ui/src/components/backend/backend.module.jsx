class BackendService {
    save = (desks) => {
        localStorage.setItem('desks', JSON.stringify(desks))
        console.debug("BackendService.save: ", desks)
    }

    load = () => {
        // localStorage.clear();
        let desksFromStorage = localStorage.getItem('desks');
        console.debug("BackendService.load: ", desksFromStorage)
        return desksFromStorage ? JSON.parse(desksFromStorage) : []
    }
}

export default BackendService;
