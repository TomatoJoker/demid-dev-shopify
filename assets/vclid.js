class PageController {
    constructor() {
        if (this.window.location.href.includes('?vclid=')) {
            this.setVclid();
        }
        this.setCartNote();
    }

    setVclid() {
        const vclidGet = window.location.search.replace('?vclid=', '');
        localStorage.setItem('vclid', vclidGet);
    }

    getStoredVclid() {
        return localStorage.getItem('vclid');
    }

    setCartNote() {
        if (this.getStoredVclid() != null) {
            const cartNote = document.getElementById('CartDrawer-Note');
            if (cartNote) {
                cartNote.value = this.getStoredVclid();
            }
        }
    }
}

const pageController = new PageController();