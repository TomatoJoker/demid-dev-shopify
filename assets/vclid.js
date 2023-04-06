class PageController {
    constructor() {
        if (window.location.href.includes('?vclid=')) {
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
            const cartNote = document.getElementById('Cart-note');
            if (cartNote) {
                cartNote.value = this.getStoredVclid();
                cartNote.focus();
            }
        }
    }
}

const pageController = new PageController();